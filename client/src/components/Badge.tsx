import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";

/**
 * Primary UI component for user interaction
 */

type BadgeTypes = {
  [key: string]: BadgeType;
};

type BadgeType = {
  color: string;
  background?: string;
  label?: string;
};

const types: BadgeTypes = {
  default: {
    color: "var(--text-secondary)",
    background: "var(--carriage)",
    label: "Standard",
  },
  cargo: {
    color: "var(--cargo)",
    label: "Cargo",
  },
  carriage: {
    color: "var(--text-secondary)",
    label: "Kutsche",
  },
  direct: {
    color: "var(--direct)",
    label: "Direkt",
  },
  termin: {
    color: "var(--onTime)",
    label: "Termin",
  },
  rider: {
    color: "var(--text-primary)",
    background: "var(--primary)",
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

const BadgeElement = styled.div<BadgeProps>`
  padding: ${(props) =>
      props.type === "rider" || props.type === "timer" ? "0.2rem" : "0.7rem"}
    0.8rem;
  height: ${(props) =>
    props.type === "rider" || props.type === "timer" ? "30px" : "40px"};

  line-height: ${(props) =>
    props.type === "rider" || props.type === "timer" ? "1.5" : "1"};

  color: ${(props) => types[props.type].color || types.default.color};
  background-color: ${(props) =>
    types[props.type].background || types.default.background};
  font-weight: ${(props) => (props.type === "timer" ? "normal" : "bold")};

  border-radius: var(--border-radius);
  box-shadow: ${(props) =>
    props.type === "timer" ? "var(--insetShadow)" : "var(--shadow)"};
`;

type BadgeProps = {
  type:
    | "info"
    | "timer"
    | "rider"
    | "termin"
    | "direct"
    | "carriage"
    | "cargo"
    | "default";
  label?: string;
};

export const Badge = ({ type, label }: BadgeProps) => {
  label = types[type].label || label;

  return <BadgeElement type={type}>{label}</BadgeElement>;
};

// Badge.propTypes = {
//   type: PropTypes.oneOf([
//     "direct",
//     "carriage",
//     "cargo",
//     "onTime",
//     "timer",
//     "info",
//     "rider",
//   ]),

//   label: PropTypes.string,

//   onClick: PropTypes.func,
// };

// Badge.defaultProps = {

//   type: "default",
// };
