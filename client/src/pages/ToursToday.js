import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useQuery } from "react-query";
import GlobalStyle from "../GlobalStyles";

import { getCurrentDateString } from "../utils/date";
import { getSortedDataByQuery } from "../utils/api";

import Badge from "../components/Badge";
import Card from "../components/Card";
import HeaderMain from "../components/HeaderMain";
import ButtonPlus from "../components/ButtonPlus";
import CardGrid from "../components/helpers/CardGrid";
import LoadingData from "../components/LoadingData";
import Wrapper from "../components/helpers/Wrapper";
import useBroadcastOrQuery from "../hooks/useBroadcastOrQuery";

const ToursToday = () => {
  const [today, setToday] = useState(getCurrentDateString());
  const tours = useBroadcastOrQuery({ endpoint: "tours", today });

  const history = useHistory();

  const handleDateChange = (date) => {
    setToday(date !== "" ? date : getCurrentDateString());
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <HeaderMain handleChange={handleDateChange} />
        <CardGrid>
          {tours?.sort(sortByPriority).map((ride) => {
            return (
              <Card
                rideID={ride._id}
                key={ride._id}
                type={ride.priority}
                rider={ride.assignment}
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
        <ButtonPlus onClick={() => history.push("/tours/new")} />
      </Wrapper>
    </>
  );
};

const statusPriorities = ["open", "fetched", "delivered"];

const sortByPriority = (a, b) =>
  statusPriorities.indexOf(a.status) - statusPriorities.indexOf(b.status);

export default ToursToday;
