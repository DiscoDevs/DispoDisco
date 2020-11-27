import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

/**
 * Primary UI component for user interaction
 */
const types = {
  rider: {
    color: "var(--text-primary)",
    background: "transparent",
  },
  timer: {
    color: "var(--text-secondary)",
    background: "var(--text-primary)",
  },
  info: {
    color: "var(--text-secondary)",
    background: "var(--text-primary)",
    label: "Info",
  },
};

const ButtonElement = styled.div`
  padding: ${(props) =>
      props.type === "rider" || props.type === "timer" ? "0.2rem" : "0.7rem"}
    0.8rem;
  height: ${(props) =>
    props.type === "rider" || props.type === "timer" ? "30px" : "40px"};

  line-height: ${(props) =>
    props.type === "rider" || props.type === "timer" ? "1.5" : "1.3"};

  font-family: ${(props) => (props.type === "info" ? "Goldman" : "inherit")};
  font-weight: ${(props) =>
    props.type === "timer" || props.type === "rider" ? "normal" : "bold"};

  color: ${(props) => types[props.type].color || types.default.color};
  background-color: ${(props) =>
    types[props.type].background || types.default.background};

  border-radius: var(--border-radius);
  box-shadow: ${(props) =>
    props.type === "timer" ? "var(--insetShadow)" : "var(--shadow)"};
`;

const CardButton = ({ type, label, onClick }) => {
  const buttonLabel = types[type].label || label;
  return (
    <ButtonElement type={type} onClick={onClick}>
      {buttonLabel}
    </ButtonElement>
  );
};

CardButton.propTypes = {
  type: PropTypes.oneOf(["timer", "info", "rider"]),

  label: PropTypes.string,

  onClick: PropTypes.func,
};

CardButton.defaultProps = {
  type: "info",
};
export default CardButton;
