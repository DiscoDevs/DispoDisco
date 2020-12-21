import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import CardCustomer from "../components/CardCustomer";
import Header from "../components/Header";
import Wrapper, { ContentWrapper } from "../components/helpers/Wrapper";
import { getDataByID } from "../utils/api";

export default function CustomerInfo() {
  const { id } = useParams();
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const data = await getDataByID({
        collectionName: "customers",
        id,
      });
      setCustomer(data);
    };

    doFetch();
  }, [id]);
  return (
    <CustomerWrapper>
      <Header title="Info" />
      <ContentWrapper>
        <CardCustomer
          id={id}
          {...customer}
          info={false}
          removeButton={true}
          settings={true}
        />
      </ContentWrapper>
    </CustomerWrapper>
  );
}

const CustomerWrapper = styled(Wrapper)`
  background-color: var(--text-secondary);
`;
