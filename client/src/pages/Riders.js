import React from "react";
import { useQuery } from "react-query";

import { getSortedData } from "../utils/api";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import CardGrid from "../components/helpers/CardGrid";
import CardRider from "../components/CardRider";
import ButtonPlus from "../components/ButtonPlus";
import Wrapper from "../components/helpers/Wrapper";

const Riders = () => {
  const history = useHistory();

  const company = localStorage.getItem("company");

  const { isLoading, isError, data, error } = useQuery("riders", () =>
    getSortedData({
      collectionName: "riders",
      company,
    })
  );

  return (
    <Wrapper>
      <Header title="🚴‍♀️ Riders 🚴‍♀️" />
      <CardGrid>
        {isLoading && <span>Loading...</span>}
        {isError && <span>Error: {error.message}</span>}
        {!isError &&
          data?.map((rider) => (
            <CardRider key={rider._id} id={rider._id} {...rider} />
          ))}
      </CardGrid>
      <ButtonPlus onClick={() => history.push("/riders/new")} />
    </Wrapper>
  );
};

export default Riders;
