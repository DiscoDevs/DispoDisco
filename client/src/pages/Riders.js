import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";

import { getSortedData } from "../utils/api";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import ToursGrid from "../components/helpers/ToursGrid";
import CardRider from "../components/CardRider";
import ButtonPlus from "../components/ButtonPlus";

const Riders = () => {
  const history = useHistory();

  const { isLoading, isError, data, error } = useQuery("riders", () =>
    getSortedData({
      collectionName: "riders",
      dataName: "alias",
    })
  );

  return (
    <PageWrapper>
      <Header title="🚴‍♀️ Riders 🚴‍♀️" />
      <ToursGrid>
        {isLoading && <span>Loading...</span>}
        {isError && <span>Error: {error.message}</span>}
        {!isError &&
          data?.map((rider) => (
            <CardRider key={rider._id} id={rider._id} {...rider} />
          ))}
      </ToursGrid>
      <ButtonPlus onClick={() => history.push("/riders/new")} />
    </PageWrapper>
  );
};

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

export default Riders;
