import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import ButtonPlus from "../components/ButtonPlus";
import CardCustomer from "../components/CardCustomer";
import Header from "../components/Header";
import ToursGrid from "../components/helpers/ToursGrid";
import { getSortedData } from "../utils/api";

const Customers = () => {
  const history = useHistory();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const data = await getSortedData({
        collectionName: "customers",
        dataName: "name",
      });
      setCustomers(data);
    };
    doFetch();
  }, []);
  return (
    <PageWrapper>
      <Header title="Kunden" />
      <ToursGrid>
        {customers?.map((customer) => (
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
  padding: 8rem 0;
`;
