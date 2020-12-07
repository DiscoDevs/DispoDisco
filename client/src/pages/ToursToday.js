import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components/macro";
import GlobalStyle from "../GlobalStyles";

import { getCurrentDateString } from "../utils/date";
import { getDataByQuery } from "../utils/api";

import Badge from "../components/Badge";
import Card from "../components/Card";
import HeaderMain from "../components/HeaderMain";
import ButtonPlus from "../components/ButtonPlus";
import ToursGrid from "../components/helpers/ToursGrid";

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
    margin-top: clamp(10rem, 25vw, 12rem);
  }
`;

const ToursToday = () => {
  const [Tours, setTours] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const doFetch = async () => {
      const today = getCurrentDateString();
      const todaysTours = await getDataByQuery({
        collectionName: "tasks",
        dataName: "date",
        query: today,
      });
      setTours(todaysTours);
    };
    doFetch();
  }, []);
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <HeaderMain />
        <ToursGrid>
          {Tours &&
            Tours.map((ride) => {
              return (
                <Card
                  key={ride._id}
                  name={ride.name}
                  type={ride.priority}
                  start={ride.start}
                  dest={ride.dest}
                  rider={ride.assignment}
                  labels={
                    <>
                      {ride.cargo && <Badge type={ride.cargo} active />}
                      {ride.priority !== "normal" &&
                      ride.priority !== "concurrentRide" ? (
                        <Badge type={ride.priority} active />
                      ) : (
                        ""
                      )}
                      {ride.carriage && <Badge type="carriage" active />}
                    </>
                  }
                />
              );
            })}
        </ToursGrid>
        <ButtonPlus onClick={() => history.push("/tours/new")} />
      </PageWrapper>
    </>
  );
};

export default ToursToday;
