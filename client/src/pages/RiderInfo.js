import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import CardRider from "../components/CardRider";
import Header from "../components/Header";
import { getDataByID } from "../utils/api";

export default function RiderInfo() {
  const { id } = useParams();
  const [rider, setRider] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const data = await getDataByID({
        collectionName: "riders",
        id,
      });
      setRider(data);
    };

    doFetch();
  }, [id]);
  return (
    <Background>
      <Header title="Info" />
      <Wrapper>
        <CardRider
          id={id}
          {...rider}
          info={false}
          removeButton={true}
          settings={true}
        />
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  background-color: var(--text-secondary);
  min-height: 100%;
  width: 100%;
  padding-top: 200px;
`;
const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  max-width: 500px;
  margin: auto;
  text-align: center;
  color: var(--text-primary);

  h2 {
    margin-top: 1.5rem;
    text-align: center;
  }
`;
