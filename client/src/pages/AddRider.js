import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory, useParams } from "react-router-dom";
import { addData, getDataByID, updateData } from "../utils/api";

import Input from "../components/Input";
import Button from "../components/Button";
import CardRider from "../components/CardRider";
import Header from "../components/Header";
import generateNewAvatarUrl from "../components/helpers/SeedGenerator";
import Wrapper, { ContentWrapper } from "../components/helpers/Wrapper";

export default function AddRider() {
  const { id } = useParams();

  const [rider, setRider] = useState({
    picture: generateNewAvatarUrl("ACAB"),
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
      value: rider.name || "",
      required: true,
      func: (event) => setRider({ ...rider, name: event.target.value }),
    },
    {
      name: "alias",
      type: "text",
      value: rider.alias || "",
      required: true,
      func: (event) => setRider({ ...rider, alias: event.target.value }),
    },
    {
      name: "Geburtsdatum",
      type: "date",
      value: rider.dateOfBirth || "",
      func: (event) => setRider({ ...rider, dateOfBirth: event.target.value }),
    },
    {
      name: "Phone",
      type: "tel",
      value: rider.phone || "",
      func: (event) => setRider({ ...rider, phone: event.target.value }),
    },
  ];
  const handleClick = () => {
    setRider({ ...rider, picture: generateNewAvatarUrl("ACAB") });
  };
  return (
    <PageWrapper>
      <ContentWrapper>
        <Header title={id ? "Rider ändern" : "Rider hinzufügen"} />
        <CardRider handleClick={handleClick} addRider info={false} {...rider} />
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
