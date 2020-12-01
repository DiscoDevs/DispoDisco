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
        <Card type="concurrentRide" />
        <Card
          type="normal"
          labels={
            <>
              <Badge type="cargoS" label="5-25kg" />
              <Badge type="direct" label="Direct" />
              <Badge type="carriage" label="Kutsche" />
            </>
          }
        />
        <Card
          type="dayRide"
          labels={
            <>
              <Badge type="cargoS" label="5-25kg" />
              <Badge type="direct" label="Direct" />
              <Badge type="carriage" label="Kutsche" />
            </>
          }
        />
        <Card
          type="direct"
          labels={
            <>
              <Badge type="cargoS" label="5-25kg" />
              <Badge type="direct" label="Direct" />
              <Badge type="carriage" label="Kutsche" />
            </>
          }
        />
        <Card
          type="onTimeRide"
          labels={
            <>
              <Badge type="cargoS" label="5-25kg" />
              <Badge type="direct" label="Direct" />
              <Badge type="carriage" label="Kutsche" />
            </>
          }
        />
        <ButtonPlus onClick={() => history.push("/addRide")} />
      </PageWrapper>
    </>
  );
};

export default Rides;
