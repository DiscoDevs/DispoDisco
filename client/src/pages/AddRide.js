import React, { useState } from "react";
import styled from "styled-components/macro";
import { Badge } from "../components/Badge";
import { Card } from "../components/Card";
import { HeaderMini } from "../components/HeaderMini";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { addRide } from "../utils/api";

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: var(--text-secondary);
`;

const ContentWrapper = styled.div`
  margin-top: 6rem;
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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rider, setRider] = useState("");

  return (
    <PageWrapper>
      <HeaderMini />
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
              startDate: startDate,
              endDate: endDate,
              weight: "light",
              priority: 0,
              type: "normal",
              assignment: rider,
            });
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
            placeholder="Von"
            value={start}
            onChange={(event) => setStart(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Zu"
            value={dest}
            onChange={(event) => setDest(event.target.value)}
          />
          <Input
            type="datetime-local"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
          <Input
            type="text"
            placeholder="Fahrer"
            value={rider}
            onChange={(event) => setRider(event.target.value)}
          />
          <div>
            <Badge type="direct" />
            <Badge type="carriage" />
            <Badge type="cargo" />
            <Badge type="onTime" />
          </div>
          <Button type="submit" design="addRide" label="Fahrt hinzufügen" />
        </Form>
      </ContentWrapper>
    </PageWrapper>
  );
}
