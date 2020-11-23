import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

/**
 * Primary UI component for user interaction
 */
const types = {
  default: {
    color: "var(--black)",
    background: "var(--kutsche)",
    label: "Standard",
  },
  cargo: {
    color: "var(--cargo)",
    label: "Cargo",
  },
  kutsche: {
    color: "var(--black)",
    label: "Kutsche",
  },
  direkt: {
    color: "var(--direct)",
    label: "Direkt",
  },
  termin: {
    color: "var(--onPoint)",
    label: "Termin",
  },
  rider: {
    color: "var(--white)",
    background: "var(--primary-color)",
  },
  timer: {
    color: "var(--black)",
    background: "var(--white)",
  },
  info: {
    color: "var(--black)",
    background: "var(--white)",
    label: "Info",
  },
};

const BadgeElement = styled.div`
  padding: ${(props) =>
      props.type === "rider" || props.type === "timer" || props.type === "info"
        ? "0.2rem"
        : "0.7rem"}
    1rem;
  height: ${(props) =>
    props.type === "info" || props.type === "rider" || props.type === "timer"
      ? "30px"
      : "auto"};
  text-align: center;
  line-height: 1.5;
  font-weight: ${(props) => props.type !== "timer" && " bold"};
  border-radius: var(--border-radius);
  box-shadow: ${(props) =>
    props.type === "timer" ? "var(--insetShadow)" : "var(--shadow)"};

  color: ${(props) => types[props.type].color || types.default.color};

  background-color: ${(props) =>
    types[props.type].background || types.default.background};
`;

export const Badge = ({ type, label }) => {
  label = types[type].label || label;

  return <BadgeElement type={type}>{label}</BadgeElement>;
};

Badge.propTypes = {
  type: PropTypes.oneOf(["direct", "kutsche", "cargo", "cta"]),

  label: PropTypes.string,

  onClick: PropTypes.func,
};

Badge.defaultProps = {
  type: "default",
};
