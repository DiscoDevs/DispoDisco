import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import settingsIcon from "../assets/settingsIcon.svg";
import jockey from "../assets/jockey.svg";
import packages from "../assets/packages.svg";
import shuttle from "../assets/shuttle.svg";
import customer from "../assets/customers.svg";

const categories = {
  settings: {
    src: settingsIcon,
    alt: "settings",
  },
  tours: {
    src: packages,
    alt: "tours",
  },
  riders: {
    src: jockey,
    alt: "riders",
  },
  customers: {
    src: customer,
    alt: "customers",
  },
  go: {
    src: shuttle,
    alt: "go",
  },
};

const designs = {
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

const Button = ({ primary, type, design, category, label, ...props }) => {
  return (
    <StyledButton type={type} design={design} {...props}>
      {categories[category] && (
        <Icons src={categories[category].src} alt={categories[category].alt} />
      )}
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: ${(props) => designs[props.design].background};
  margin: auto;
  padding: 0.5rem 1rem;
  border: ${(props) => designs[props.design].border};
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

Button.propTypes = {
  category: PropTypes.string,
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
export default Button;
