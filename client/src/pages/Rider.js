import React, { useEffect, useState } from "react";
import CardRider from "../components/CardRider";
import { getSortedData } from "../utils/api";
import Header from "../components/Header";
import styled from "styled-components";
import ToursGrid from "../components/helpers/ToursGrid";
import { useHistory } from "react-router-dom";
import ButtonPlus from "../components/ButtonPlus";

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
    margin-top: clamp(9rem, 25vw, 200px);
  }
`;

const Rider = () => {
  const [riders, setRiders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const doFetch = async () => {
      const data = await getSortedData({
        collectionName: "riders",
        dataName: "alias",
      });
      console.log({ data });
      setRiders(data);
    };
    doFetch();
  }, []);

  console.log({ riders });
  return (
    <PageWrapper>
      <Header title="Fahrer hinzufügen" />
      <ToursGrid>
        {riders?.map((rider) => (
          <CardRider
            key={rider._id}
            name={rider.name}
            alias={rider.alias}
            dateOfBirth={rider.dateOfBirth}
            phone={rider.phone}
            picture={rider.picture}
            color={rider.color}
          />
        ))}
      </ToursGrid>
      <ButtonPlus onClick={() => history.push("/riders/new")} />
    </PageWrapper>
  );
};
export default Rider;
