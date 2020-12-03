import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import styled from "styled-components/macro";
import GlobalStyle from "../GlobalStyles";

import { getSortedDataByQuery } from "../utils/api";

import Badge from "../components/Badge";
import Card from "../components/Card";
import ButtonPlus from "../components/ButtonPlus";
import Header from "../components/Header";

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

const Tours = () => {
  const [tours, setTours] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const doFetch = async () => {
      const todaysTours = await getSortedDataByQuery({
        collectionName: "tasks",
        dataName: "date",
        query: {},
      });
      setTours(todaysTours);
    };
    doFetch();
  }, []);
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header title="Geplante Touren" />
        {tours &&
          tours.map((ride) => {
            return (
              <Card
                key={ride._id}
                type={ride.priority}
                start={ride.start}
                dest={ride.dest}
                rider={ride.assignment}
                settings={true}
                labels={
                  <>
                    {ride.cargo && <Badge type={ride.cargo} status={true} />}
                    {ride.priority !== "normal" ? (
                      <Badge type={ride.priority} status={true} />
                    ) : (
                      ""
                    )}
                    {ride.carriage && <Badge type="carriage" status={true} />}
                  </>
                }
              />
            );
          })}
        <ButtonPlus
          onClick={() => history.push("/tours/new?type=concurrent")}
        />
      </PageWrapper>
    </>
  );
};

export default Tours;
