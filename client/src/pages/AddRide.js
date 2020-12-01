import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { addRide } from "../utils/api";

import Badge from "../components/Badge";
import Card from "../components/Card";
import HeaderMain from "../components/HeaderMain";
import Input from "../components/Input";
import Button from "../components/Button";
import Todo from "../components/Todo";

const PageWrapper = styled.div`
  min-height: 100%;
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
const StyledDetails = styled.details`
  color: var(--text-primary);
  text-align: left;
  margin: 1rem 0;
  width: 100%;
  textarea {
    width: 100%;
  }
  h3 {
    margin-top: 1rem;
  }
`;

const OutputContainer = styled.div`
  margin-top: 0.25rem;
  margin-left: 0;
`;
const CheckboxEntry = styled.div`
  display: flex;
  button {
    margin-left: 1rem;
    padding: 0 1rem;
  }
`;
const InputContainer = styled.form`
  color: var(--text-primary);
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-right: 1rem;
  }
  input[type="text"] {
    height: 2rem;
    width: 100%;
  }
  button {
    height: 2rem;
    margin: auto 1rem;
    padding: 0 1rem;
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
export default function AddRide() {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [dest, setDest] = useState("");
  const [date, setDate] = useState("");
  const [rider, setRider] = useState("");
  const [priority, setPriority] = useState("normal");
  const [cargo, setCargo] = useState("s");
  // const [info, setInfo] = useState("");
  const [checkbox, setCheckbox] = useState("");
  const [checkboxes, setCheckboxes] = useState([]);
  const history = useHistory();

  const handleRemove = (entry) => {
    const filteredCheckboxes = checkboxes.filter((cb) => cb !== entry);
    setCheckboxes(filteredCheckboxes);
  };

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
              title: title,
              start: start,
              dest: dest,
              date: date,
              assignment: rider,
              priority: priority,
              cargo: cargo,
            });
            history.push("/rides");
          }}
        >
          <Input
            type="text"
            placeholder="Titel"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Start"
            value={start}
            onChange={(event) => setStart(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Ziel"
            value={dest}
            onChange={(event) => setDest(event.target.value)}
          />
          <Input
            type="datetime-local"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Fahrer"
            value={rider}
            onChange={(event) => setRider(event.target.value)}
          />
        </Form>
        <StyledDetails open={true}>
          <summary>Info & Todo-Liste</summary>

          <h3>Infos</h3>
          <textarea name="InfoInput" cols="30" rows="10" />

          <h3>Todo-Liste</h3>
          {checkboxes && (
            <OutputContainer>
              {checkboxes.map((entry, index) => (
                <CheckboxEntry key={index}>
                  <Todo>{entry} </Todo>
                  <button onClick={() => handleRemove(entry)}>X</button>
                </CheckboxEntry>
              ))}
            </OutputContainer>
          )}

          <InputContainer
            onSubmit={(event) => {
              event.preventDefault();
              setCheckboxes([...checkboxes, checkbox]);
              setCheckbox("");
            }}
          >
            <input type="checkbox" />
            <input
              type="text"
              value={checkbox}
              onChange={(event) => setCheckbox(event.target.value)}
            />
            <button type="submit">Yes!</button>
          </InputContainer>
        </StyledDetails>
        <BadgeContainer>
          <Badge type="direct" onClick={() => setPriority("direct")} />
          <Badge type="onTime" onClick={() => setPriority("onTime")} />
          <Badge type="cargoS" label="s" onClick={() => setCargo("s")} />
          <Badge type="cargoM" label="m" onClick={() => setCargo("m")} />
          <Badge type="cargoL" label="l" onClick={() => setCargo("l")} />
          <Badge type="carriage" onClick={() => setCargo("carriage")} />
        </BadgeContainer>
        <Button type="submit" design="addRide" label="Fahrt hinzufügen" />
      </Wrapper>
    </PageWrapper>
  );
}
