import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { addData, getDataByID, updateData } from "../utils/api";

import Badge from "../components/Badge";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import InfoInput from "../components/InfoInput";
import WeekDaysSelector from "../components/WeekDaysSelector";
import { add30Minutes, add90Minutes } from "../utils/time";
import Header from "../components/Header";
import Wrapper, { ContentWrapper } from "../components/helpers/Wrapper";
import RiderSelect from "../components/helpers/RiderSelect";
import { useQuery } from "react-query";

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

export default function AddTour() {
  const { id } = useParams();
  const query = useQueryParams();
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
  const [arrayToMap, setArrayToMap] = useState([]);
  const company = localStorage.getItem("company");

  const { data } = useQuery(
    ["ride", id],
    () =>
      getDataByID({
        collectionName: "tours",
        id,
      }),
    { enabled: !!id }
  );

  useEffect(() => {
    if (id && data) {
      setTask(data);
    }
  }, [id, data]);

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
        value: task.start || "",
        required: true,
        func: (event) => setTask({ ...task, start: event.target.value }),
      },
      {
        name: "Ziel",
        type: "text",
        value: task.dest || "",
        required: true,
        func: (event) => setTask({ ...task, dest: event.target.value }),
      },
      {
        name: "Datum",
        type: "datetime-local",
        value: task.date || "",
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
        value: task.name || "",
        required: false,
        func: (event) => setTask({ ...task, name: event.target.value }),
      },
      ...todayArray,
      {
        name: "Abgabe",
        type: "datetime-local",
        value: task.finish || "",
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
        value: task.finish || "",
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

  const onRiderChange = (rider) => {
    setTask({ ...task, assignment: rider.alias });
  };

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
            if (!task.association) {
              task.association = company;
            }
            if (id) {
              updateData(
                {
                  collectionName: "tours",
                  id,
                },
                task
              );
            } else {
              addData({ collectionName: "tours", data: task });
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
          <RiderSelect onRiderChange={onRiderChange} task={task} filtered />
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
