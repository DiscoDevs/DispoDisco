import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { addTour, getDataByID, updateData } from "../utils/api";

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
  const [task, setTask] = useState({
    priority: "normal",
    cargo: null,
    carriage: false,
  });
  const [checkboxes, setCheckboxes] = useState([]);
  const history = useHistory();
  const [weekDays, setWeekDays] = useState([]);

  const concurrentTour = query.get("type") === "concurrent";

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

  const direktClick = () => {
    task.priority !== "direct"
      ? setTask({ ...task, priority: "direct" })
      : setTask({ ...task, priority: "normal" });
  };
  const onTimeClick = () => {
    task.priority !== "onTimeRide"
      ? setTask({ ...task, priority: "onTimeRide" })
      : setTask({ ...task, priority: "normal" });
  };
  const cargoSClick = () => {
    task.cargo !== "cargoS"
      ? setTask({ ...task, cargo: "cargoS" })
      : setTask({ ...task, cargo: null });
  };
  const cargoMClick = () => {
    task.cargo !== "cargoM"
      ? setTask({ ...task, cargo: "cargoM" })
      : setTask({ ...task, cargo: null });
  };
  const cargoLClick = () => {
    task.cargo !== "cargoL"
      ? setTask({ ...task, cargo: "cargoL" })
      : setTask({ ...task, cargo: null });
  };
  const carriageClick = () => {
    task.carriage !== true
      ? setTask({ ...task, carriage: true })
      : setTask({ ...task, carriage: false });
  };
  const onWeekDayChange = (day) => setWeekDays(day);

  const Badges = [
    { name: "direct", func: direktClick },
    { name: "onTimeRide", func: onTimeClick },
    { name: "cargoS", func: cargoSClick },
    { name: "cargoM", func: cargoMClick },
    { name: "cargoL", func: cargoLClick },
    { name: "carriage", func: carriageClick },
  ];
  const todayArray = [
    {
      name: "Start",
      type: "text",
      value: task.start,
      func: (event) => setTask({ ...task, start: event.target.value }),
    },
    {
      name: "Ziel",
      type: "text",
      value: task.dest,
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
          labels={
            <>
              {task.cargo && <Badge type={task.cargo} status={true} />}
              {task.priority !== "normal" ? (
                <Badge type={task.priority} status={true} />
              ) : (
                ""
              )}
              {task.carriage && <Badge type="carriage" status={true} />}
            </>
          }
        />
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            if (id) {
              updateData(
                {
                  collectionName: "tasks",
                  id,
                },
                task
              );
            } else {
              addTour(task);
            }
            history.push("/Tours");
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
            checkboxes={checkboxes}
            onCheckboxesChange={setCheckboxes}
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
