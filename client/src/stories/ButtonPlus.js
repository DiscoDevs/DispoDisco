import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import ButtonPlusImg from "./assets/buttonPlus.svg";
/**
 * Primary UI component for user interaction
 */

const ButtonElement = styled.button`
  border-radius: 50%;
  background: none;
  border: none;
  & > img {
    height: 50px;
  }
`;

export const ButtonPlus = ({ label }) => {
  return (
    <ButtonElement>
      <img src={ButtonPlusImg} alt="Add Button" />
      {label}
    </ButtonElement>
  );
};

ButtonPlus.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
