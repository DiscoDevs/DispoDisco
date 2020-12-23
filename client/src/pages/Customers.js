import React from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { useUsers } from "../context/user";

import { getSortedData } from "../utils/api";

import ButtonPlus from "../components/ButtonPlus";
import CardCustomer from "../components/CardCustomer";
import Header from "../components/Header";
import CardGrid from "../components/helpers/CardGrid";
import Wrapper from "../components/helpers/Wrapper";

const Customers = () => {
  const history = useHistory();

  const { company } = useUsers();

  const { isLoading, isError, data, error } = useQuery("customers", () =>
    getSortedData({
      collectionName: "customers",
      company: company.name,
    })
  );

  return (
    <Wrapper>
      <Header title="Kunden" />
      <CardGrid>
        {" "}
        {isLoading && <span>Loading...</span>}
        {isError && <span>Error: {error.message}</span>}
        {!isError &&
          data?.map((customer) => (
            <CardCustomer key={customer._id} id={customer._id} {...customer} />
          ))}
      </CardGrid>
      <ButtonPlus
        onClick={() => {
          history.push("/customers/new");
        }}
      />
    </Wrapper>
  );
};

export default Customers;
