import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import settingsIcon from "../assets/settingsIcon.svg";
import jockey from "../assets/jockey.svg";
import packages from "../assets/packages.svg";
import shuttle from "../assets/shuttle.svg";

const labels = {
  settings: {
    src: settingsIcon,
    alt: "settings",
    title: "Einstellungen",
  },
  tours: {
    src: packages,
    alt: "tours",
    title: "Touren",
  },
  riders: {
    src: jockey,
    alt: "riders",
    title: "Fahrer",
  },
  go: {
    src: shuttle,
    alt: "go",
    title: "Lets Fetz",
  },
};

const types = {
  menu: {
    background: "var(--gradient-menu)",
    border: "none",
  },
  addRide: {
    background: "none",
    border: "1px solid var(--text-primary)",
  },
  cta: {
    background: "var(--gradient-direct)",
    border: "none",
  },
};

const StyledButton = styled.button`
  background: ${(props) => types[props.type].background};
  padding: 0.5rem 1rem;
  border: ${(props) => types[props.type].border};
  border-radius: 6px;
  font-family: "Goldman";
  font-size: 2rem;
  color: var(--text-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  > :first-child {
    margin-right: 10px;
  }
`;

const Icons = styled.img`
  height: 25px;
`;

export const Button = ({ primary, type, label, ...props }) => {
  return (
    <StyledButton type={type} {...props}>
      <Icons src={labels[label].src} alt={labels[label].alt} />
      {labels[label].title}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
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
