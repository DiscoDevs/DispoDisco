import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory, useLocation, useParams } from "react-router-dom";
import {
  addData,
  addTour,
  getDataByID,
  getSortedData,
  updateData,
} from "../utils/api";
import DefaultAvatar from "../assets/defaultAvatar.svg";

import Badge from "../components/Badge";
import Card from "../components/Card";
import HeaderMain from "../components/HeaderMain";
import Input from "../components/Input";
import Button from "../components/Button";
import InfoInput from "../components/InfoInput";
import CardRider from "../components/CardRider";

export default function AddRider() {
  const { id } = useParams();

  const [rider, setRider] = useState({
    picture: DefaultAvatar,
    color: "var(--gradient-direct)",
  });

  const history = useHistory();

  useEffect(() => {
    if (id) {
      const doFetch = async () => {
        try {
          const data = await getDataByID({
            collectionName: "riders",
            id,
          });
          setRider(data);
          console.log(data);
        } catch (e) {
          console.error(e);
        }
      };
      doFetch();
    }
  }, [id]);

  const inputArray = [
    {
      name: "Name",
      type: "text",
      value: rider.name,
      required: true,
      func: (event) => setRider({ ...rider, name: event.target.value }),
    },
    {
      name: "alias",
      type: "text",
      value: rider.alias,
      required: true,
      func: (event) => setRider({ ...rider, alias: event.target.value }),
    },
    {
      name: "Geburtsdatum",
      type: "date",
      value: rider.dateOfBirth,
      func: (event) => setRider({ ...rider, dateOfBirth: event.target.value }),
    },
    {
      name: "Phone",
      type: "tel",
      value: rider.phone,
      func: (event) => setRider({ ...rider, phone: event.target.value }),
    },
  ];

  return (
    <PageWrapper>
      <HeaderMain />
      <Wrapper>
        <CardRider {...rider} />
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            if (id) {
              updateData(
                {
                  collectionName: "riders",
                  id,
                },
                rider
              );
            } else {
              addData({
                collectionName: "riders",
                data: rider,
              });
            }
            history.goBack();
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
          <Button
            type="submit"
            design="addRide"
            label={id ? "Rider ändern" : "Rider hinzufügen"}
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
