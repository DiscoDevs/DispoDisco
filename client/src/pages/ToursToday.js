import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useQuery } from "react-query";
import styled from "styled-components/macro";
import GlobalStyle from "../GlobalStyles";

import { getCurrentDateString } from "../utils/date";
import { getSortedDataByQuery } from "../utils/api";

import Badge from "../components/Badge";
import Card from "../components/Card";
import HeaderMain from "../components/HeaderMain";
import ButtonPlus from "../components/ButtonPlus";
import ToursGrid from "../components/helpers/ToursGrid";

const ToursToday = () => {
  const [today, setToday] = useState(getCurrentDateString());

  const history = useHistory();

  const handleDateChange = (date) => {
    setToday(date !== "" ? date : getCurrentDateString());
  };

  const { isLoading, isError, data, error } = useQuery(["tours", today], () =>
    getSortedDataByQuery({
      collectionName: "tours",
      type: "date",
      query: today,
    })
  );

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <HeaderMain handleChange={handleDateChange} />
        <ToursGrid>
          {isLoading && <span>Loading...</span>}
          {isError && <span>Error: {error.message}</span>}
          {!isError &&
            !isLoading &&
            data.sort(sortByPriority).map((ride) => {
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
        <ButtonPlus onClick={() => history.push("/tours/new")} />
      </PageWrapper>
    </>
  );
};

const sortByPriority = (a, b) => {
  let indexA = null;
  let indexB = null;
  switch (a.status) {
    case "delivered":
      indexA = 2;
      break;
    case "fetched":
      indexA = 1;
      break;
    default:
      indexA = 0;
      break;
  }
  switch (b.status) {
    case "delivered":
      indexB = 2;
      break;
    case "fetched":
      indexB = 1;
      break;
    default:
      indexB = 0;
      break;
  }
  return indexA - indexB;
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
