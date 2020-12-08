import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import Badge from "../components/Badge";
import Card from "../components/Card";
import Header from "../components/Header";
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
    <Background>
      <Header title="Info" />
      <Wrapper>
        <Card
          type={task.priority}
          name={task.name}
          start={task.start}
          dest={task.dest}
          rider={task.assignment}
          rideID={id}
          info={false}
          removeButton
          labels={
            <>
              {task.priority !== "normal" &&
              task.priority !== "concurrentRide" ? (
                <Badge type="carriage" active />
              ) : (
                ""
              )}
              {task.cargo && <Badge type={task.cargo} active />}
              {task.carriage && <Badge type="carriage" active />}
            </>
          }
        />
        <InfoContainer>
          <h2>Checkliste</h2>
          {console.log(task.checkboxes)}
          {task.checkboxes &&
            task.checkboxes.map((checkbox) => (
              <Todo key={checkbox}>{checkbox} </Todo>
            ))}
          <h2>Infos</h2>
          <p>{task.info}</p>
        </InfoContainer>
      </Wrapper>
    </Background>
  );
}

const Background = styled.div`
  background-color: var(--text-secondary);
  min-height: 100%;
  width: 100%;
  padding-top: 200px;
`;
const Wrapper = styled.div`
  max-width: 500px;
  margin: auto;
  text-align: center;
  color: var(--text-primary);

  h2 {
    margin-top: 1.5rem;
    text-align: center;
  }
`;

const InfoContainer = styled.div`
  padding: 0.5rem;
  text-align: left;
`;
