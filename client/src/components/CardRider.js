import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CardButton from "./CardButton";

const CardRider = ({ name, alias, dateOfBirth, phone, picture, color }) => {
  return (
    <CardContainer color={color}>
      <div>
        <h3>{alias}</h3>
        <p>{name}</p>
      </div>
      <img src={picture} alt="Profilbild" />
      <div>
        <p>{dateOfBirth}</p>
        <b>📞{phone}</b>
      </div>
      <CardButton label="ändern" />
    </CardContainer>
  );
};

CardRider.propTypes = {
  name: PropTypes.string,
  alias: PropTypes.string,
  dateOfBirth: PropTypes.string,
  phone: PropTypes.string,
  picture: PropTypes.string,
  color: PropTypes.string,
};

export default CardRider;

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
  background: ${(props) => props.color};
  border-radius: var(--border-radius);
  img {
    height: 75px;
    width: 75px;
  }
`;
