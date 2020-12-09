import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import CargoS from "../assets/cargoBox.svg";
import CargoM from "../assets/packages.svg";
import CargoL from "../assets/container.svg";
import CarriageImg from "../assets/carriage.svg";
import DirectImg from "../assets/shuttle.svg";
import OnTimeImg from "../assets/stopwatch.svg";
import DayRideImg from "../assets/dayRide.svg";
/**
 * Primary UI component for user interaction
 */
const types = {
  cargoS: {
    img: CargoS,
  },
  cargoM: {
    img: CargoM,
  },
  cargoL: {
    img: CargoL,
  },
  carriage: {
    img: CarriageImg,
  },
  direct: {
    img: DirectImg,
  },
  onTimeRide: {
    img: OnTimeImg,
  },
  dayRide: {
    img: DayRideImg,
  },
};

const BadgeElement = styled.div`
  display: grid;
  align-content: center;
  height: 40px;
  width: 40px;

  background-color: var(--text-secondary30);
  border-radius: 3px;
  box-shadow: var(--shadow), 3px 0 6px rgba(100, 100, 100, 0.5);
  img {
    width: 28px;
    margin: auto;
    filter: grayscale(${(props) => (props.isActive === true ? "0" : "1")});
  }
`;

const Badge = ({ type, active, onClick = false }) => {
  const [isActive, setIsActive] = useState(active);

  function changeStatus() {
    setIsActive(!isActive);
  }
  return (
    <BadgeElement
      isActive={isActive}
      type={type}
      onClick={() => {
        onClick();
        changeStatus();
      }}
    >
      <img src={types[type].img} alt="Button" />
    </BadgeElement>
  );
};

Badge.propTypes = {
  type: PropTypes.oneOf([
    "direct",
    "carriage",
    "cargoS",
    "cargoM",
    "cargoL",
    "onTimeRide",
    "dayRide",
    "timer",
    "info",
    "rider",
  ]),

  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Badge.defaultProps = {
  type: "default",
  active: false,
};

export default Badge;
