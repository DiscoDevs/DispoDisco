import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import ButtonPlus from "./assets/buttonPlus.svg";
/**
 * Primary UI component for user interaction
 */

const ButtonElement = styled.div`
  border-radius: 50%;
`;

const ButtonImage = styled.img``;

export const Button = ({ label }) => {
  return (
    <ButtonElement>
      <ButtonImage src={ButtonPlus} />
      {label}
    </ButtonElement>
  );
};

Button.propTypes = {
  // type: PropTypes.oneOf(["round"]),

  label: PropTypes.string,

  onClick: PropTypes.func,
};

Button.defaultProps = {};
