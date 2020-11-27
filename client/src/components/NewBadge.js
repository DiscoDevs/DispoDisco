import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import CargoImg from "../assets/cargoBox.svg";
import CarriageImg from "../assets/carriage.svg";
import DirectImg from "../assets/shuttle.svg";
import OnTimeImg from "../assets/stopwatch.svg";
/**
 * Primary UI component for user interaction
 */
const types = {
  cargo: {
    img: CargoImg,
  },
  carriage: {
    img: CarriageImg,
  },
  direct: {
    img: DirectImg,
  },
  onTime: {
    img: OnTimeImg,
  },
};

const BadgeElement = styled.div`
  display: grid;
  align-content: center;
  height: 40px;
  width: 40px;

  background-color: var(--text-secondary30);
  border-radius: 3px;
  img {
    width: 28px;
    margin: auto;
  }
`;

export const NewBadge = ({ type, onClick }) => {
  return (
    <BadgeElement type={type} onClick={onClick}>
      <img src={types[type].img} alt="Button" />
    </BadgeElement>
  );
};

NewBadge.propTypes = {
  type: PropTypes.oneOf([
    "direct",
    "carriage",
    "cargo",
    "onTime",
    "timer",
    "info",
    "rider",
  ]),

  label: PropTypes.string,

  onClick: PropTypes.func,
};

NewBadge.defaultProps = {
  type: "default",
};
