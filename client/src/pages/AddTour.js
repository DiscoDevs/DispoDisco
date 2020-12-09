import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { addData, getDataByID, updateData } from "../utils/api";

import Badge from "../components/Badge";
import Card from "../components/Card";
import HeaderMain from "../components/HeaderMain";
import Input from "../components/Input";
import Button from "../components/Button";
import InfoInput from "../components/InfoInput";
import WeekDaysSelector from "../components/WeekDaysSelector";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function AddTour() {
  const { id } = useParams();
  const query = useQuery();
  const concurrentTour = query.get("type") === "concurrent";
  const priSwitch = concurrentTour ? "concurrentRide" : "normal";
  const [task, setTask] = useState({
    priority: priSwitch,
    cargo: null,
    carriage: false,
    assignment: "",
    checkboxes: [],
    name: "",
  });
  const history = useHistory();
  const [weekDays, setWeekDays] = useState([]);

  useEffect(() => {
    if (id) {
      const doFetch = async () => {
        try {
          const data = await getDataByID({
            collectionName: "tasks",
            id: id,
          });
          setTask(data);
        } catch (e) {
          console.error(e);
        }
      };
      doFetch();
    }
  }, [id]);

  const handlePriorityClick = (badgeName) => () => {
    setTask({
      ...task,
      priority: task.priority !== badgeName ? badgeName : "normal",
    });
  };
  const handleCargoClick = (badgeName) => () => {
    setTask({
      ...task,
      cargo: task.cargo !== badgeName ? badgeName : null,
    });
  };
  const handleCarriageClick = () => {
    setTask({
      ...task,
      carriage: !task.carriage,
    });
  };

  const onWeekDayChange = (day) => setWeekDays(day);

  const Badges = [
    { name: "direct", func: handlePriorityClick("direct") },
    { name: "onTimeRide", func: handlePriorityClick("onTimeRide") },
    { name: "cargoS", func: handleCargoClick("cargoS") },
    { name: "cargoM", func: handleCargoClick("cargoM") },
    { name: "cargoL", func: handleCargoClick("cargoL") },
    { name: "carriage", func: handleCarriageClick },
  ];
  const todayArray = [
    {
      name: "Start",
      type: "text",
      value: task.start,
      required: true,
      func: (event) => setTask({ ...task, start: event.target.value }),
    },
    {
      name: "Ziel",
      type: "text",
      value: task.dest,
      required: true,
      func: (event) => setTask({ ...task, dest: event.target.value }),
    },
    {
      name: "Datum",
      type: "datetime-local",
      value: task.date,
      func: (event) => setTask({ ...task, date: event.target.value }),
    },
    {
      name: "Fahrer",
      type: "text",
      value: task.assignment,
      func: (event) => setTask({ ...task, assignment: event.target.value }),
    },
  ];
  const concurrentArray = [
    {
      name: "Titel",
      type: "text",
      value: task.name,
      func: (event) => setTask({ ...task, name: event.target.value }),
    },
    ...todayArray,
  ];
  const arrayToMap = concurrentTour ? concurrentArray : todayArray;

  return (
    <PageWrapper>
      <HeaderMain />
      <Wrapper>
        <Card
          type={task.priority}
          start={task.start}
          dest={task.dest}
          rider={task.assignment}
          name={task.name}
          labels={
            <>
              {task.cargo && <Badge type={task.cargo} active />}
              {task.priority !== "normal" &&
              task.priority !== "concurrentRide" ? (
                <Badge type={task.priority} active />
              ) : (
                ""
              )}
              {task.carriage && <Badge type="carriage" active />}
            </>
          }
        />
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            if (!task.date) {
              task.date = new Date();
            }
            if (id) {
              updateData(
                {
                  collectionName: "tasks",
                  id,
                },
                task
              );
            } else {
              addData({ collectionName: "tasks", data: task });
            }
            if (concurrentTour) {
              history.goBack();
              return;
            }
            history.goBack();
          }}
        >
          {arrayToMap.map((inputObj) => (
            <Input
              key={inputObj.name}
              type={inputObj.type}
              placeholder={inputObj.name}
              value={inputObj.value}
              onChange={inputObj.func}
            />
          ))}

          {concurrentTour && (
            <WeekDaysSelector
              weekDays={weekDays}
              onWeekDayChange={onWeekDayChange}
            />
          )}

          <InfoInput
            info={task.info}
            checkboxes={task.checkboxes}
            task={task}
            onCheckboxesChange={setTask}
            onInfoChange={(event) =>
              setTask({ ...task, info: event.target.value })
            }
          />

          <BadgeContainer>
            {Badges.map((BadgeObj) => {
              return (
                <Badge
                  key={BadgeObj.name}
                  type={BadgeObj.name}
                  onClick={BadgeObj.func}
                />
              );
            })}
          </BadgeContainer>
          <Button
            type="submit"
            design="addRide"
            label={id ? "Fahrt ändern" : "Fahrt hinzufügen"}
          />
        </Form>
      </Wrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: auto;
  padding: 8rem 0;

  background: var(--text-secondary);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  padding: 0 1rem;
  max-width: 400px;
  > :first-child {
    margin-bottom: 2rem;
  }
`;
const Form = styled.form`
  > * {
    margin-top: 0.7rem;
  }
  > :first-child {
    margin-top: 0;
  }
`;

const BadgeContainer = styled.div`
  margin: 1rem auto;

  display: flex;
  > * {
    margin-right: 0.5rem;
  }
  > :last-child {
    margin-right: 0;
  }
`;
