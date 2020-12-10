import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components/macro";
import GlobalStyle from "../GlobalStyles";

import { getCurrentDateString } from "../utils/date";
import { getDataByQuery } from "../utils/api";

import Badge from "../components/Badge";
import Card from "../components/Card";
import HeaderMain from "../components/HeaderMain";
import ButtonPlus from "../components/ButtonPlus";
import ToursGrid from "../components/helpers/ToursGrid";
import { useQuery } from "react-query";

const ToursToday = () => {
  const history = useHistory();
  const today = getCurrentDateString();

  const { isLoading, isError, data, error } = useQuery("tours", () =>
    getDataByQuery({
      collectionName: "tasks",
      dataName: "date",
      query: today,
    })
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <HeaderMain />
        <ToursGrid>
          {data.map((ride) => {
            return (
              <Card
                {...ride}
                rideID={ride._id}
                key={ride._id}
                type={ride.priority}
                rider={ride.assignment}
                {...ride}
                labels={
                  <>
                    {ride.cargo && <Badge type={ride.cargo} active />}
                    {ride.priority !== "normal" &&
                    ride.priority !== "concurrentRide" ? (
                      <Badge type={ride.priority} active />
                    ) : (
                      ""
                    )}
                    {ride.carriage && <Badge type="carriage" active />}
                  </>
                }
              />
            );
          })}
        </ToursGrid>
        <ButtonPlus onClick={() => history.push("/tours/new")} />
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  position: fixed;
  overflow: auto;
  height: 100%;
  width: 100%;
  background: var(--gradient-dark);
  & > *:not(:first-child) {
    margin: 1rem auto;
  }
  & > :nth-child(2) {
    margin-top: clamp(10rem, 25vw, 12rem);
  }
`;

export default ToursToday;
