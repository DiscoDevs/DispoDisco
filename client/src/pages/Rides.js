import React from "react";
import styled from "styled-components/macro";

import GlobalStyle from "../GlobalStyles";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { HeaderMain } from "../components/HeaderMain";
import { ButtonPlus } from "../components/ButtonPlus";
import { useHistory } from "react-router-dom";

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

export const Rides = () => {
  const history = useHistory();
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <HeaderMain />
        <Card type="concurrentRide" />
        <Card
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
