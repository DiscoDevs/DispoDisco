import React from "react";
import { useHistory } from "react-router-dom";

import { useQuery } from "react-query";
import GlobalStyle from "../GlobalStyles";

import { getSortedDataByQuery } from "../utils/api";

import Badge from "../components/Badge";
import Card from "../components/Card";
import ButtonPlus from "../components/ButtonPlus";
import Header from "../components/Header";
import CardGrid from "../components/helpers/CardGrid";
import Wrapper from "../components/helpers/Wrapper";
import { useUsers } from "../context/user";

const Tours = () => {
  const history = useHistory();

  const { company } = useUsers();

  const { isLoading, isError, data, error, refetch } = useQuery(
    "concurrenctTours",
    () =>
      getSortedDataByQuery({
        collectionName: "tours",
        type: "type",
        query: "concurrentRide",
        company: company.name,
      })
  );

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header title="Geplante Touren" />
        <CardGrid>
          {isLoading && <span>Loading...</span>}
          {isError && <span>Error: {error.message}</span>}
          {!isError &&
            !isLoading &&
            data.map((ride) => {
              return (
                <Card
                  onChange={refetch}
                  key={ride._id}
                  rideID={ride._id}
                  rider={ride.assignment}
                  type={ride.priority}
                  {...ride}
                  info={true}
                  labels={
                    <>
                      {ride.cargo && <Badge type={ride.cargo} active />}
                      {ride.priority !== "normal" &&
                        ride.priority !== "concurrentRide" && (
                          <Badge type={ride.priority} active />
                        )}
                      {ride.carriage && <Badge type="carriage" active />}
                    </>
                  }
                />
              );
            })}
        </CardGrid>
        <ButtonPlus
          onClick={() => history.push("/tours/new?type=concurrent")}
        />
      </Wrapper>
    </>
  );
};

export default Tours;
