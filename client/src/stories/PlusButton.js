import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import ButtonPlus from "./assets/buttonPlus.svg";
/**
 * Primary UI component for user interaction
 */

const ButtonElement = styled.button`
  border-radius: 50%;
  background: none;
  border: none;
`;

export const PlusButton = ({ label }) => {
  return (
    <ButtonElement>
      <img src={ButtonPlus} alt="Add Button" />
      {label}
    </ButtonElement>
  );
};

PlusButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};
