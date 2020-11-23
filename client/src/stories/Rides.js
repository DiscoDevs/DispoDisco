import React from "react";
import styled from "styled-components/macro";
import { GlobalStyle } from "../App";
import { Badge } from "./Badge";
import { Cargo } from "./Badge.stories";
import { Card } from "./Card";
import { ConcurrentRide, DayRide, DirectRide } from "./Card.stories";

import { HeaderMain } from "./HeaderMain";

const Wrapper = styled.div`
  position: relative;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  & > :not(:first-child) {
    margin: 1rem;
  }
`;

export const Rides = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <HeaderMain />

      <Card
        labels={
          <>
            <Badge type="cargo" label="5-25kg" />
            <Badge type="direkt" label="Direct" />
            <Badge type="kutsche" label="Kutsche" />
          </>
        }
      />
      <DayRide
        type="dayRide"
        labels={
          <>
            <Badge type="cargo" label="5-25kg" />
            <Badge type="direkt" label="Direct" />
            <Badge type="kutsche" label="Kutsche" />
          </>
        }
      />
      <DirectRide
        type="directRide"
        labels={
          <>
            <Badge type="cargo" label="5-25kg" />
            <Badge type="direkt" label="Direct" />
            <Badge type="kutsche" label="Kutsche" />
          </>
        }
      />
      <ConcurrentRide type="concurrentRide" />
    </Wrapper>
  </>
);
