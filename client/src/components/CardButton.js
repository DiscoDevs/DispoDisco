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
    padding: "0.2rem 0",
  },
  timer: {
    color: "var(--text-secondary)",
    background: "var(--text-primary)",
    padding: "0.2rem 0.8rem",
  },
  info: {
    color: "var(--text-secondary)",
    background: "var(--text-primary)",
    padding: "0.7rem 0.8rem",
  },
  remove: {
    color: "var(--text-secondary)",
    background: "var(--text-primary)",
    padding: "0.7rem 0.8rem",
  },
};

const CardButton = ({ type, label, status, onClick }) => {
  return (
    <ButtonElement type={type} status={status} onClick={onClick}>
      {label}
    </ButtonElement>
  );
};

const statusColor = { open: "green", fetched: "orange", delivered: "grey" };

const ButtonElement = styled.div`
  padding: ${(props) => types[props.type].padding};

  height: ${(props) =>
    props.type === "rider" || props.type === "timer" ? "30px" : "40px"};
  width: ${(props) => (props.type === "rider" ? "100px" : "auto")};

  overflow: hidden;
  line-break: anywhere;
  line-height: ${(props) =>
    props.type === "rider" || props.type === "timer" ? "1.5" : "1.3"};
  font-size: clamp(0.1rem, 100%, 1rem);
  font-family: ${(props) => (props.type === "info" ? "Goldman" : "inherit")};
  font-weight: ${(props) =>
    props.type === "timer" || props.type === "rider" ? "normal" : "bold"};

  color: ${(props) => types[props.type].color || types.default.color};

  background-color: ${(props) =>
    statusColor[props.status] ||
    types[props.type].background ||
    types.default.background};

  ${(props) => props.type === "timer" && "justify-self: center;"}

  border-radius: var(--border-radius);
  box-shadow: ${(props) =>
    props.type === "timer"
      ? "var(--insetShadow)"
      : props.type === "info"
      ? "var(--shadow)"
      : "none"};
`;

CardButton.propTypes = {
  type: PropTypes.oneOf(["timer", "info", "rider", "remove"]),

  label: PropTypes.node,
  status: PropTypes.string,

  onClick: PropTypes.func,
};

CardButton.defaultProps = {
  type: "info",
};
export default CardButton;
