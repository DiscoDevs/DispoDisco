import React from "react";
import { useHistory } from "react-router-dom";

import { useQuery } from "react-query";
import styled from "styled-components/macro";
import GlobalStyle from "../GlobalStyles";

import { getSortedDataByQuery } from "../utils/api";

import Badge from "../components/Badge";
import Card from "../components/Card";
import ButtonPlus from "../components/ButtonPlus";
import Header from "../components/Header";
import ToursGrid from "../components/helpers/ToursGrid";

const Tours = () => {
  const history = useHistory();

  const { isLoading, isError, data, error } = useQuery("concurrenctTours", () =>
    getSortedDataByQuery({
      collectionName: "tours",
      type: "type",
      query: "concurrentRide",
    })
  );

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header title="Geplante Touren" />
        <ToursGrid>
          {isLoading && <span>Loading...</span>}
          {isError && <span>Error: {error.message}</span>}
          {!isError &&
            !isLoading &&
            data.map((ride) => {
              return (
                <Card
                  key={ride._id}
                  rideID={ride._id}
                  rider={ride.assignment}
                  type={ride.priority}
                  {...ride}
                  labels={
                    <>
                      {ride.cargo && <Badge type={ride.cargo} active />}
                      {ride.priority !== "normal" &&
                        ride.priority !== "concurrentRide" && (
                          <Badge type={ride.priority} active />
                        )}
                      {ride.carriage && <Badge type="carriage" active />}
                    </>
                  }
                />
              );
            })}
        </ToursGrid>
        <ButtonPlus
          onClick={() => history.push("/tours/new?type=concurrent")}
        />
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
    margin-top: clamp(9rem, 25vw, 200px);
  }
`;

export default Tours;
