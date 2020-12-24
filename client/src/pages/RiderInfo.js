import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import CardRider from "../components/CardRider";
import Header from "../components/Header";
import Wrapper, { ContentWrapper } from "../components/helpers/Wrapper";
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
    <InfoWrapper>
      <ContentWrapper>
        <Header title="Info" />
        <CardRider
          id={id}
          {...rider}
          info={false}
          removeButton={true}
          settings={true}
        />
      </ContentWrapper>
    </InfoWrapper>
  );
}

const InfoWrapper = styled(Wrapper)`
  background-color: var(--text-secondary);
`;
