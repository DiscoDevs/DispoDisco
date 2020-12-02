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
    margin-top: 150px;
  }
`;

const Rides = () => {
  const [rides, setRides] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const doFetch = async () => {
      const today = getCurrentDateString();
      const todaysRides = await getDataByQuery({
        collectionName: "tasks",
        dataName: "date",
        query: today,
      });
      setRides(todaysRides);
    };
    doFetch();
  }, []);
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <HeaderMain />
        {rides &&
          rides.map((ride) => {
            return (
              <Card
                key={ride._id}
                type={ride.priority}
                start={ride.start}
                dest={ride.dest}
                rider={ride.assignment}
                labels={
                  <>
                    {ride.cargo && <Badge type={ride.cargo} status={true} />}
                    {ride.priority !== "normal" ? (
                      <Badge type={ride.priority} status={true} />
                    ) : (
                      ""
                    )}
                    {ride.carriage && (
                      <Badge type={ride.carriage} status={true} />
                    )}
                  </>
                }
              />
            );
          })}
        <ButtonPlus onClick={() => history.push("/addRide")} />
      </PageWrapper>
    </>
  );
};

export default Rides;
