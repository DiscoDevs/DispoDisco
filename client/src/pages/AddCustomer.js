import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory, useParams } from "react-router-dom";
import { addData, getDataByID, updateData } from "../utils/api";

import Input from "../components/Input";
import Button from "../components/Button";
import CardCustomer from "../components/CardCustomer";
import Header from "../components/Header";
import Wrapper, { ContentWrapper } from "../components/helpers/Wrapper";
import { useQuery } from "react-query";

export default function AddCustomer() {
  const { id } = useParams();

  const [customer, setCustomer] = useState({ counter: 0 });

  const history = useHistory();
  const { data, error, isError, isLoading } = useQuery(["customer", id], () =>
    getDataByID({
      collectionName: "customers",
      id,
    })
  );
  useEffect(() => {
    async function doFetch() {
      if (id) {
        setCustomer(data);
      }
      isError && console.log(error);
    }
    doFetch();
  }, [id, data, error, isError]);

  const inputArray = [
    {
      name: "Firma",
      type: "text",
      value: customer?.company || "",
      required: true,
      func: (event) =>
        setCustomer({ ...customer, company: event.target.value }),
    },
    {
      name: "Name",
      type: "text",
      value: customer?.name || "",
      required: true,
      func: (event) => setCustomer({ ...customer, name: event.target.value }),
    },
    {
      name: "alias",
      type: "text",
      value: customer?.alias || "",
      required: true,
      func: (event) => setCustomer({ ...customer, alias: event.target.value }),
    },
    {
      name: "Straße Hausnummer, PLZ Stadt",
      type: "text",
      value: customer?.address || "",
      func: (event) =>
        setCustomer({ ...customer, address: event.target.value }),
    },
    {
      name: "Phone",
      type: "tel",
      value: customer?.phone || "",
      func: (event) => setCustomer({ ...customer, phone: event.target.value }),
    },
  ];

  return (
    <PageWrapper>
      <ContentWrapper>
        <Header title={id ? "Kunde ändern" : "Kunde hinzufügen"} />
        <CardCustomer {...customer} />
        {isLoading && <p>Loading...</p>}
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            if (id) {
              updateData({
                collectionName: "customers",
                id,
              });
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
