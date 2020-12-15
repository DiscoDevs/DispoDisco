import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { addData, getDataByID, getEntryList, updateData } from "../utils/api";

import Badge from "../components/Badge";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import InfoInput from "../components/InfoInput";
import WeekDaysSelector from "../components/WeekDaysSelector";
import { add30Minutes, add90Minutes } from "../utils/time";
import Header from "../components/Header";
import Wrapper, { ContentWrapper } from "../components/helpers/Wrapper";

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
  const [riders, setRiders] = useState([]);
  const [arrayToMap, setArrayToMap] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const list = await getEntryList({
        collectionName: "riders",
        key: "alias",
      });
      setRiders(list);
    };
    fetchList();
    if (id) {
      const doFetch = async () => {
        try {
          const data = await getDataByID({
            collectionName: "tours",
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

  const ConcurrentBadges = [
    { name: "cargoS", func: handleCargoClick("cargoS") },
    { name: "cargoM", func: handleCargoClick("cargoM") },
    { name: "cargoL", func: handleCargoClick("cargoL") },
    { name: "carriage", func: handleCarriageClick },
  ];
  const Badges = [
    ...ConcurrentBadges,
    { name: "direct", func: handlePriorityClick("direct") },
    { name: "onTimeRide", func: handlePriorityClick("onTimeRide") },
    { name: "dayRide", func: handlePriorityClick("dayRide") },
  ];

  const BadgesToMap = concurrentTour ? ConcurrentBadges : Badges;

  useEffect(() => {
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
        required: false,
        func: (event) =>
          setTask({
            ...task,
            date: event.target.value,
          }),
      },
    ];
    const concurrentArray = [
      {
        name: "Titel",
        type: "text",
        value: task.name,
        required: false,
        func: (event) => setTask({ ...task, name: event.target.value }),
      },
      ...todayArray,
      {
        name: "Abgabe",
        type: "datetime-local",
        value: task.finish,
        func: (event) =>
          setTask({
            ...task,
            finish: event.target.value,
          }),
      },
    ];
    const onTimeArray = [
      ...todayArray,
      {
        name: "Abgabe",
        type: "datetime-local",
        value: task.finish,
        required: false,
        func: (event) =>
          setTask({
            ...task,
            finish: event.target.value,
          }),
      },
    ];
    if (concurrentTour) {
      setArrayToMap(concurrentArray);
    } else if (task.priority === "onTimeRide") {
      setArrayToMap(onTimeArray);
    } else {
      setArrayToMap(todayArray);
    }
  }, [task.priority, concurrentTour, task]);

  return (
    <PageWrapper>
      <ContentWrapper>
        <Header title="Fahrt" />

        <Card
          type={task.priority}
          rider={task.assignment}
          {...task}
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
            } else {
              task.date = new Date(task.date);
            }
            if (!task.status) {
              task.status = "open";
            }
            if (!task.finish) {
              if (task.priority === "normal") {
                task.finish = add90Minutes(task.date);
              } else if (task.priority === "direct") {
                task.finish = add30Minutes(task.date);
              } else {
                task.finish = task.date;
              }
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
              required={inputObj.required}
            />
          ))}

          <select
            onChange={(event) =>
              setTask({ ...task, assignment: event.target.value })
            }
          >
            <option value={null}>Offen</option>
            {riders.map((rider) => (
              <option key={rider._id} value={rider.alias}>
                {rider.alias}
              </option>
            ))}
          </select>

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
            {BadgesToMap.map((BadgeObj) => {
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
      </ContentWrapper>
    </PageWrapper>
  );
}

const PageWrapper = styled(Wrapper)`
  background: var(--text-secondary);
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
