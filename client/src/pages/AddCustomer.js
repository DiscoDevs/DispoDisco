import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory, useParams } from "react-router-dom";
import { addData, getDataByID, updateData } from "../utils/api";

import Input from "../components/Input";
import Button from "../components/Button";
import CardCustomer from "../components/CardCustomer";
import Header from "../components/Header";
import Wrapper, { ContentWrapper } from "../components/helpers/Wrapper";

export default function AddCustomer() {
  const { id } = useParams();

  const [customer, setCustomer] = useState({
    counter: 0,
  });

  const history = useHistory();

  const company = localStorage.getItem("company");

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
      value: customer.company || "",
      required: true,
      func: (event) =>
        setCustomer({ ...customer, company: event.target.value }),
    },
    {
      name: "Name",
      type: "text",
      value: customer.name || "",
      required: true,
      func: (event) => setCustomer({ ...customer, name: event.target.value }),
    },
    {
      name: "alias",
      type: "text",
      value: customer.alias || "",
      required: true,
      func: (event) => setCustomer({ ...customer, alias: event.target.value }),
    },
    {
      name: "Straße Hausnummer, PLZ Stadt",
      type: "text",
      value: customer.address || "",
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
      <ContentWrapper>
        <Header title={id ? "Kunde ändern" : "Kunde hinzufügen"} />
        <CardCustomer {...customer} />
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            if (!customer.association) {
              customer.association = company;
            }
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
