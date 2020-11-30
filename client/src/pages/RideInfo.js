import React from "react";
import styled from "styled-components/macro";
import Badge from "../components/Badge";
import Card from "../components/Card";
import Header from "../components/Header";
import Todo from "../components/Todo";

const Background = styled.div`
  background-color: var(--text-secondary);
  min-height: 100%;
  width: 100%;
  padding-top: 200px;
`;
const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
  text-align: center;
  color: var(--text-primary);

  h2 {
    margin-top: 1.5rem;
    text-align: center;
  }
`;

const InfoContainer = styled.div`
  padding: 0.5rem;
  text-align: left;
`;
export default function RideInfo() {
  return (
    <Background>
      <Header title="Info" />
      <Wrapper>
        <Card
          type="direct"
          info={false}
          labels={
            <>
              <Badge type="cargoS" label="5-25kg" />
              <Badge type="direct" label="Direct" />
              <Badge type="carriage" label="Kutsche" />
            </>
          }
        />
        <InfoContainer>
          <h2>Checkliste</h2>
          <Todo>Test Todo</Todo>
          <Todo>Test Todo</Todo>
          <Todo>Test Todo</Todo>
          <Todo>Test Todo</Todo>
          <Todo>Test Todo</Todo>
          <h2>Infos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est
            iusto, asperiores sapiente obcaecati illum nostrum, placeat nemo
            totam hic ratione quas pariatur animi dignissimos cupiditate unde
            ipsa modi eum fuga temporibus quo
          </p>
        </InfoContainer>
      </Wrapper>
    </Background>
  );
}
