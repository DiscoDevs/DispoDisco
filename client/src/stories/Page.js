import React from "react";
import styled from "styled-components";
import { Cargo, Direct, Kutsche, Primary } from "./Badge.stories";
import { Card } from "./Card";
import { ConcurrentRide, DayRide, DirectRide } from "./Card.stories";

import { HeaderMenus } from "./Header.stories";
import "./page.css";

const Wrapper = styled.div`
  background-color: var(--white);
  & > :not(:first-child) {
    margin: 1rem;
  }
`;

export const Page = () => (
  <Wrapper>
    <HeaderMenus />
    <Primary label={"Badge"} />
    <Cargo type={"cargo"} label={"Cargo"} />
    <Direct type={"direct"} label={"Direkt"} />
    <Kutsche type={"kutsche"} label={"Kutsche"} />
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
);
