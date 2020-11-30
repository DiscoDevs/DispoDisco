import React from "react";
import styled from "styled-components";
import Badge from "../components/Badge";
import Card from "../components/Card";
import Header from "../components/Header";

const Background = styled.div`
  background-color: var(--text-secondary);
  height: 100%;
  width: 100%;
  padding-top: 200px;
`;

export default function RideInfo() {
  return (
    <Background>
      <Header title="Info" />
      <Card
        type="direct"
        info={false}
        labels={
          <>
            <Badge type="cargo" label="5-25kg" />
            <Badge type="direct" label="Direct" />
            <Badge type="carriage" label="Kutsche" />
          </>
        }
      />
    </Background>
  );
}
