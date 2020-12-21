import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import CardButton from "./CardButton";
import { useHistory } from "react-router-dom";
import { deleteData } from "../utils/api";
import SettingsImg from "../assets/settingsIcon.svg";
import CardContainer from "./helpers/CardContainer";

const CardCustomer = ({
  id,
  name,
  company,
  address,
  alias,
  counter,
  phone,
  info = true,
  removeButton = false,
  settings = false,
}) => {
  CardCustomer.propTypes = {
    name: PropTypes.string,
    company: PropTypes.string,
    address: PropTypes.string,
    alias: PropTypes.string,
    counter: PropTypes.number,
    phone: PropTypes.string,
    id: PropTypes.string,
    info: PropTypes.bool,
    settings: PropTypes.bool,
    removeButton: PropTypes.bool,
  };

  const history = useHistory();
  const addressSplitted = address?.split(",");
  return (
    <CustomerCard>
      <div>
        <h3>{company}</h3>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
      <div>
        <p>{alias}</p>
        <p>Aufträge: {counter}</p>
      </div>
      <InfoContainer>
        <div>
          {addressSplitted && <p>{addressSplitted[0]}</p>}
          {addressSplitted && <p>{addressSplitted[1]}</p>}
        </div>
        {settings && (
          <SettingsIcon
            src={SettingsImg}
            alt="Kunde ändern"
            onClick={() => {
              history.push(`/customers/${id}/edit`);
            }}
          />
        )}
        {info && (
          <CardButton
            type="info"
            label="Info"
            onClick={() => {
              history.push(`/customers/${id}`);
            }}
          />
        )}
        {removeButton && (
          <CardButton
            type="remove"
            label="X"
            onClick={() => {
              deleteData({
                collectionName: "customers",
                id,
              });
              history.goBack();
            }}
          />
        )}
      </InfoContainer>
    </CustomerCard>
  );
};

export default CardCustomer;

const CustomerCard = styled(CardContainer)`
  display: flex;
  flex-wrap: wrap;
  max-width: 336px;
  justify-content: space-between;
`;
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  bottom: 1rem;
  left: 0;
  padding: 1rem 0 0.2rem;
`;

const SettingsIcon = styled.img`
  height: 30px;
  margin: auto;
`;
