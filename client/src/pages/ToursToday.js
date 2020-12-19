import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useQuery } from "react-query";
import GlobalStyle from "../GlobalStyles";

import { getCurrentDateString } from "../utils/date";
import { getSortedDataByQuery } from "../utils/api";
import { useTransition, animated, config } from "react-spring";
import Badge from "../components/Badge";
import Card from "../components/Card";
import HeaderMain from "../components/HeaderMain";
import ButtonPlus from "../components/ButtonPlus";
import CardGrid from "../components/helpers/CardGrid";
import LoadingData from "../components/LoadingData";
import Wrapper from "../components/helpers/Wrapper";

const ToursToday = () => {
  const [today, setToday] = useState(getCurrentDateString());

  const history = useHistory();

  const handleDateChange = (date) => {
    setToday(date !== "" ? date : getCurrentDateString());
  };

  const { isLoading, isError, data, error, refetch } = useQuery(
    ["tours", today],
    () =>
      getSortedDataByQuery({
        collectionName: "tours",
        type: "date",
        query: today,
      })
  );
  const rides = data || [];
  const transition = useTransition(rides, (item) => item?._id, {
    from: { opacity: 0, marginRight: 100 },
    enter: { opacity: 1, marginRight: 0 },
  });
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <HeaderMain handleChange={handleDateChange} />
        <CardGrid>
          {isLoading && <LoadingData>Loading...</LoadingData>}
          {isError && <span>Error: {error.message}</span>}
          {!isError &&
            !isLoading &&
            transition.sort(sortByPriority).map(({ item, key, props }) => {
              return (
                <animated.div key={key} style={props}>
                  <Card
                    onChange={refetch}
                    rideID={item._id}
                    key={item._id}
                    type={item.priority}
                    rider={item.assignment}
                    {...item}
                    info={true}
                    labels={
                      <>
                        {item.cargo && <Badge type={item.cargo} active />}
                        {item.priority !== "normal" &&
                          item.priority !== "concurrentRide" && (
                            <Badge type={item.priority} active />
                          )}
                        {item.carriage && <Badge type="carriage" active />}
                      </>
                    }
                  />
                </animated.div>
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
