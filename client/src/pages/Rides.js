import React from "react";
import styled from "styled-components/macro";

import GlobalStyle from "../GlobalStyles";
import Badge from "../components/Badge";
import Card from "../components/Card";
import HeaderMain from "../components/HeaderMain";
import ButtonPlus from "../components/ButtonPlus";
import { useHistory } from "react-router-dom";
import { getCurrentDate } from "../utils/date";
import { getDataByQuery } from "../utils/api";
import { useEffect } from "react";

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
  const history = useHistory();
  useEffect(() => {
    const doFetch = async () => {
      const today = getCurrentDate();
      const todaysRides = await getDataByQuery({
        collectionName: "tasks",
        dataName: "date",
        query: today,
      });
      console.log(todaysRides);
      return todaysRides;
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
              <Badge type="cargo" label="5-25kg" />
              <Badge type="direct" label="Direct" />
              <Badge type="carriage" label="Kutsche" />
            </>
          }
        />
        <Card
          type="dayRide"
          labels={
            <>
              <Badge type="cargo" label="5-25kg" />
              <Badge type="direct" label="Direct" />
              <Badge type="carriage" label="Kutsche" />
            </>
          }
        />
        <Card
          type="direct"
          labels={
            <>
              <Badge type="cargo" label="5-25kg" />
              <Badge type="direct" label="Direct" />
              <Badge type="carriage" label="Kutsche" />
            </>
          }
        />
        <Card
          type="onTimeRide"
          labels={
            <>
              <Badge type="cargo" label="5-25kg" />
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
