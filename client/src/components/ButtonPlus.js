import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
/**
 * Primary UI component for user interaction
 */

const ButtonElement = styled.button`
  position: fixed;
  bottom: 2px;
  left: calc(50% - 25px);
  display: grid;
  align-items: center;
  border-radius: 6px;
  background: var(--text-secondary);
  width: 50px;
  height: 50px;
  border: none;

  div {
    display: grid;
    color: var(--text-primary);
    font-size: 1.5rem;
    font-family: "Goldman";
    align-items: center;
    border: 2px solid white;
    height: 38px;
    width: 38px;
    margin: auto;
    border-radius: inherit;
  }
`;

const ButtonPlus = ({ onClick }) => {
  return (
    <ButtonElement onClick={onClick}>
      <div>+</div>
    </ButtonElement>
  );
};

ButtonPlus.propTypes = {
  onClick: PropTypes.func,
};
export default ButtonPlus;
