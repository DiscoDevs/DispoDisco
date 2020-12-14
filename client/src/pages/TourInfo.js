import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import Badge from "../components/Badge";
import Card from "../components/Card";
import Header from "../components/Header";
import Wrapper, { ContentWrapper } from "../components/helpers/Wrapper";
import Todo from "../components/Todo";
import { getDataByID } from "../utils/api";

export default function TourInfo() {
  const { id } = useParams();
  const [task, setTask] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const data = await getDataByID({
        collectionName: "tasks",
        id,
      });
      setTask(data);
    };

    doFetch();
  }, [id]);
  return (
    <MainWrapper>
      <TourInfoWrapper>
        <Header title="Info" />
        <Card
          type={task.priority}
          rider={task.assignment}
          rideID={id}
          {...task}
          info={false}
          removeButton
          labels={
            <>
              {task.priority !== "normal" &&
                task.priority !== "concurrentRide" && (
                  <Badge type="carriage" active />
                )}
              {task.cargo && <Badge type={task.cargo} active />}
              {task.carriage && <Badge type="carriage" active />}
            </>
          }
        />
        <InfoContainer>
          <h2>Checkliste</h2>
          {task.checkboxes &&
            task.checkboxes.map((checkbox) => (
              <Todo key={checkbox}>{checkbox} </Todo>
            ))}
          <h2>Infos</h2>
          <p>{task.info}</p>
        </InfoContainer>
      </TourInfoWrapper>
    </MainWrapper>
  );
}
const MainWrapper = styled(Wrapper)`
  background-color: var(--text-secondary);
`;
const TourInfoWrapper = styled(ContentWrapper)`
  h2 {
    margin-top: 1.5rem;
    text-align: center;
  }
`;

const InfoContainer = styled.div`
  color: var(--text-primary);
  text-align: left;
`;
