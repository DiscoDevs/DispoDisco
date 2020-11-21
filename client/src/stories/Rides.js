import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../App";
import { Cargo, Direct, Kutsche, Primary } from "./Badge.stories";
import { Card } from "./Card";
import { ConcurrentRide, DayRide, DirectRide } from "./Card.stories";

import { HeaderMenus } from "./Header.stories";
import { HeaderMain } from "./HeaderMain";
import "./page.css";

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
            <Cargo type="direct" label="5-25kg" />
            <Cargo label="Direct" />
            <Cargo type="kutsche" label="Kutsche" />
          </>
        }
      />
      <DayRide
        type="dayRide"
        labels={
          <>
            <Cargo type="direct" label="5-25kg" />
            <Cargo label="Direct" />
            <Cargo type="kutsche" label="Kutsche" />
          </>
        }
      />
      <DirectRide
        type="directRide"
        labels={
          <>
            <Cargo type="direct" label="5-25kg" />
            <Cargo label="Direct" />
            <Cargo type="kutsche" label="Kutsche" />
          </>
        }
      />
      <ConcurrentRide type="concurrentRide" />
    </Wrapper>
  </>
);
