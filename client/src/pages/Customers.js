import React from "react";
import styled from "styled-components/macro";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";

import { getSortedData } from "../utils/api";

import ButtonPlus from "../components/ButtonPlus";
import CardCustomer from "../components/CardCustomer";
import Header from "../components/Header";
import ToursGrid from "../components/helpers/ToursGrid";

const Customers = () => {
  const history = useHistory();

  const { isLoading, isError, data, error } = useQuery("customers", () =>
    getSortedData({
      collectionName: "customers",
      dataName: "name",
    })
  );

  return (
    <PageWrapper>
      <Header title="Kunden" />
      <ToursGrid>
        {" "}
        {isLoading && <span>Loading...</span>}
        {isError && <span>Error: {error.message}</span>}
        {!isError &&
          data?.map((customer) => (
            <CardCustomer key={customer._id} id={customer._id} {...customer} />
          ))}
      </ToursGrid>
      <ButtonPlus
        onClick={() => {
          history.push("/customers/new");
        }}
      />
    </PageWrapper>
  );
};

export default Customers;

const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: auto;
  & > :nth-child(2) {
    margin-top: clamp(9rem, 25vw, 200px);
  }
`;
