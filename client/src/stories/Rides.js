import React from "react";
import styled from "styled-components/macro";

import GlobalStyle from "../globalStyles";
import { Badge } from "./Badge";
import { Card } from "./Card";
import { HeaderMain } from "./HeaderMain";

const PageWrapper = styled.div`
  position: fixed;
  overflow: scroll;
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
      </PageWrapper>
    </>
  );
};
