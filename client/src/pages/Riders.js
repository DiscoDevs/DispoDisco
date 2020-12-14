import React from "react";
import { useQuery } from "react-query";

import { getSortedData } from "../utils/api";
import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import CardGrid from "../components/helpers/ToursGrid";
import CardRider from "../components/CardRider";
import ButtonPlus from "../components/ButtonPlus";
import Wrapper from "../components/helpers/Wrapper";

const Riders = () => {
  const history = useHistory();

  const { isLoading, isError, data, error } = useQuery("riders", () =>
    getSortedData({
      collectionName: "riders",
      dataName: "alias",
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
