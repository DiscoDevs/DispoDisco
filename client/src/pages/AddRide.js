import React, { useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import Badge from "../components/Badge";
import Card from "../components/Card";
import HeaderMain from "../components/HeaderMain";
import Input from "../components/Input";
import Button from "../components/Button";
import addRide from "../utils/api";

const PageWrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: var(--text-secondary);
  overflow: auto;
`;

const ContentWrapper = styled.div`
  padding-top: 12rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  width: 80vw;
  > * {
    margin-top: 0.7rem;
  }
  > :first-child {
    margin-top: 0;
  }
  > :last-child {
    margin-top: 1.5rem;
  }
  > div {
    display: flex;
    > * {
      margin-right: 0.5rem;
    }
    > :last-child {
      margin-right: 0;
    }
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
  const history = useHistory();

  return (
    <PageWrapper>
      <HeaderMain />
      <ContentWrapper>
        <Card
          type="dayRide"
          labels={
            <>
              <Badge type="cargo" />
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
          <div>
            <Badge type="direct" onClick={() => setPriority("direct")} />
            <Badge type="onTime" onClick={() => setPriority("onTime")} />
            <Badge type="carriage" onClick={() => setCargo("carriage")} />
            <Badge type="cargo" label="m" onClick={() => setCargo("m")} />
            <Badge type="cargo" label="l" onClick={() => setCargo("l")} />
          </div>
          <Button type="submit" design="addRide" label="Fahrt hinzufügen" />
        </Form>
      </ContentWrapper>
    </PageWrapper>
  );
}
