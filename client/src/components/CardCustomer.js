import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import CardButton from "./CardButton";
import { useHistory } from "react-router-dom";

const CardCustomer = ({
  id,
  name,
  company,
  address,
  alias,
  counter,
  phone,
}) => {
  const history = useHistory();
  const addressSplitted = address?.split(",");
  return (
    <CardContainer>
      <div>
        <h3>{company}</h3>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
      <div>
        <p>{alias}</p>
        <p>Aufträge: {counter}</p>
      </div>
      <div>
        {addressSplitted && <p>{addressSplitted[0]}</p>}
        {addressSplitted && <p>{addressSplitted[1]}</p>}
      </div>
      <CardButton
        label="ändern"
        onClick={() => history.push(`/customers/${id}/edit`)}
      />
    </CardContainer>
  );
};

export default CardCustomer;

CardCustomer.propTypes = {
  name: PropTypes.string,
  company: PropTypes.string,
  address: PropTypes.string,
  alias: PropTypes.string,
  counter: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 2fr 1fr;
  position: relative;
  min-width: 300px;
  margin: auto;
  padding: 1rem;
  text-align: left;
  font-weight: bold;
  color: var(--text-primary);
  background: var(--gradient-direct);
  border-radius: var(--border-radius);
`;
