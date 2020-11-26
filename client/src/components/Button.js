import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

const designes = {
  menu: {
    background: "var(--text-secondary)",
    border: "none",
  },
  addRide: {
    background: "none",
    border: "1px solid var(--text-primary)",
  },
  cta: {
    background: "red",
    border: "none",
  },
};

const StyledButton = styled.button`
  background: ${(props) => designes[props.design].background};
  padding: 0.5rem 1rem;
  border: ${(props) => designes[props.design].border};
  border-radius: 6px;
  font-family: "Goldman";
  color: var(--text-primary);
`;

export const Button = ({ primary, type, design, label, ...props }) => {
  return (
    <StyledButton type={type} design={design} {...props}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  design: PropTypes.string,
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
