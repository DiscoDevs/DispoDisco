import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { addRide } from "../utils/api";

import Badge from "../components/Badge";
import Card from "../components/Card";
import HeaderMain from "../components/HeaderMain";
import Input from "../components/Input";
import Button from "../components/Button";
import InfoInput from "../components/InfoInput";

export default function AddRide() {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [dest, setDest] = useState("");
  const [date, setDate] = useState("");
  const [assignment, setAssignment] = useState("");
  const [priority, setPriority] = useState("normal");
  const [cargo, setCargo] = useState(null);
  const [carriage, setCarriage] = useState(false);
  const [info, setInfo] = useState("");
  const [checkboxes, setCheckboxes] = useState([]);
  const history = useHistory();

  const direktClick = () => {
    priority !== "direct" ? setPriority("direct") : setPriority("normal");
  };
  const onTimeClick = () => {
    priority !== "onTime" ? setPriority("onTime") : setPriority("normal");
  };
  const cargoSClick = () => {
    cargo !== "S" ? setCargo("S") : setCargo(null);
  };
  const cargoMClick = () => {
    cargo !== "M" ? setCargo("M") : setCargo(null);
  };
  const cargoLClick = () => {
    cargo !== "L" ? setCargo("L") : setCargo(null);
  };
  const carriageClick = () => {
    carriage !== true ? setCarriage(true) : setCarriage(false);
  };

  const Badges = [
    { name: "direct", func: direktClick },
    { name: "onTimeRide", func: onTimeClick },
    { name: "cargoS", func: cargoSClick },
    { name: "cargoM", func: cargoMClick },
    { name: "cargoL", func: cargoLClick },
    { name: "carriage", func: carriageClick },
  ];
  const inputArray = [
    {
      name: "Titel",
      type: "text",
      value: title,
      func: (event) => setTitle(event.target.value),
    },
    {
      name: "Start",
      type: "text",
      value: start,
      func: (event) => setStart(event.target.value),
    },
    {
      name: "Ziel",
      type: "text",
      value: dest,
      func: (event) => setDest(event.target.value),
    },
    {
      name: "Datum",
      type: "datetime-local",
      value: date,
      func: (event) => setDate(event.target.value),
    },
    {
      name: "Fahrer",
      type: "text",
      value: assignment,
      func: (event) => setAssignment(event.target.value),
    },
  ];

  return (
    <PageWrapper>
      <HeaderMain />
      <Wrapper>
        <Card
          type="dayRide"
          labels={
            <>
              <Badge type="cargoS" />
              <Badge type="direct" />
              <Badge type="carriage" />
            </>
          }
        />
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            addRide({
              title,
              start,
              dest,
              date,
              assignment,
              priority,
              cargo,
              info,
              checkboxes,
            });
            history.push("/rides");
          }}
        >
          {inputArray.map((inputObj) => (
            <Input
              key={inputObj.name}
              type={inputObj.type}
              placeholder={inputObj.name}
              value={inputObj.value}
              onChange={inputObj.func}
            />
          ))}

          <InfoInput
            info={info}
            checkboxes={checkboxes}
            onCheckboxesChange={setCheckboxes}
            onInfoChange={(event) => setInfo(event.target.value)}
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
          <Button type="submit" design="addRide" label="Fahrt hinzufügen" />
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
