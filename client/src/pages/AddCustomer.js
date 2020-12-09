import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory, useParams } from "react-router-dom";
import { addData, getDataByID, updateData } from "../utils/api";

import Input from "../components/Input";
import Button from "../components/Button";
import CardCustomer from "../components/CardCustomer";
import Header from "../components/Header";

export default function AddCustomer() {
  const { id } = useParams();

  const [customer, setCustomer] = useState({
    counter: 0,
  });

  const history = useHistory();

  useEffect(() => {
    if (id) {
      const doFetch = async () => {
        try {
          const data = await getDataByID({
            collectionName: "customers",
            id,
          });
          setCustomer(data);
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
      name: "Firma",
      type: "text",
      value: customer.company,
      required: true,
      func: (event) =>
        setCustomer({ ...customer, company: event.target.value }),
    },
    {
      name: "Name",
      type: "text",
      value: customer.name,
      required: true,
      func: (event) => setCustomer({ ...customer, name: event.target.value }),
    },
    {
      name: "alias",
      type: "text",
      value: customer.alias,
      required: true,
      func: (event) => setCustomer({ ...customer, alias: event.target.value }),
    },
    {
      name: "Straße Hausnummer, PLZ Stadt",
      type: "text",
      value: customer.address,
      func: (event) =>
        setCustomer({ ...customer, address: event.target.value }),
    },
    {
      name: "Phone",
      type: "tel",
      value: customer.phone,
      func: (event) => setCustomer({ ...customer, phone: event.target.value }),
    },
  ];

  return (
    <PageWrapper>
      <Header title={id ? "Kunde ändern" : "Kunde hinzufügen"} />
      <Wrapper>
        <CardCustomer {...customer} />
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            if (id) {
              updateData(
                {
                  collectionName: "customers",
                  id,
                },
                customer
              );
            } else {
              addData({
                collectionName: "customers",
                data: customer,
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
            label={id ? "Kunde ändern" : "Kunde hinzufügen"}
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
