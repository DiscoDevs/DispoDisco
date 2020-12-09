import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import ArrowImg from "../assets/arrow.svg";
import SettingsImg from "../assets/settingsIcon.svg";
import CardButton from "./CardButton";
import { useHistory } from "react-router-dom";
import { deleteData } from "../utils/api";

const types = {
  normal: "var(--gradient-normal)",
  dayRide: "var(--gradient-dayRide)",
  concurrentRide: "var(--gradient-concurrent)",
  onTimeRide: "var(--gradient-onTime)",
  direct: "var(--gradient-direct)",
};

const Card = ({
  type,
  name,
  labels,
  info = true,
  removeButton = false,
  settings = false,
  start,
  dest,
  rider,
  rideID,
}) => {
  const history = useHistory();
  return (
    <CardContainer type={type}>
      <Header>
        <Start type={type}>
          <p>{type !== "concurrentRide" ? start : name}</p>
        </Start>
        {type !== "concurrentRide" && (
          <>
            <img src={ArrowImg} alt="Arrow" />
            <Destination>
              <p>{dest}</p>
            </Destination>
          </>
        )}
      </Header>
      {labels && <LabelContainer>{labels}</LabelContainer>}

      <InfoContainer>
        {settings ? (
          <SettingsIcon
            src={SettingsImg}
            alt="Change Ride"
            onClick={() => {
              history.push(`/tours/${settings}/edit?type=concurrent`);
            }}
          />
        ) : (
          <CardButton type="rider" label={`🚴‍♀️ ${rider}`} />
        )}
        <CardButton type="timer" label="1:30h" />
        {info && (
          <CardButton
            type="info"
            label="Info"
            onClick={() => {
              console.log(rideID);
              history.push(`/tours/${rideID}`);
            }}
          />
        )}
        {info && <CardButton type="info" label="Abgabe" />}
        {removeButton && (
          <CardButton
            type="remove"
            label="X"
            onClick={() => {
              deleteData({
                collectionName: "tasks",
                id: rideID,
              });
              history.goBack();
            }}
          />
        )}
      </InfoContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf([
    "normal",
    "dayRide",
    "direct",
    "concurrentRide",
    "onTimeRide",
    "removeButton",
  ]),
  labels: PropTypes.object,
  info: PropTypes.bool,
  removeButton: PropTypes.bool,
  settings: PropTypes.string,
  rideID: PropTypes.string,
  name: PropTypes.string,
  rider: PropTypes.string,
  onClick: PropTypes.func,
  start: PropTypes.string,
  dest: PropTypes.string,
};
export default Card;

const CardContainer = styled.div`
  position: relative;
  min-width: 300px;
  margin: auto;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  color: var(--text-primary);
  background: ${(props) => types[props.type]};

  border-radius: var(--border-radius);
`;

const Start = styled.div`
  overflow: hidden;
  position: relative;
  color: var(--text-primary);
  border-radius: var(-border-radius);
  font-family: ${(props) => props.type === "concurrentRide" && "Goldman"};
  width: ${(props) => (props.type === "concurrentRide" ? "60%" : "40%")};
  min-width: 90px;
  height: 2.5rem;
  padding: 0.25rem 0;
  border-radius: 3px;
  box-shadow: ${(props) => {
    return props.type === "concurrentRide" ? "var(--shadow)" : "none";
  }};
  background-color: ${(props) =>
    props.type === "concurrentRide" ? "var(--cargo)" : "transparent"};
  & p {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    line-height: 2;
    text-align: center;
    -moz-transform: translateX(50%);
    -webkit-transform: translateX(50%);
    transform: translateX(50%);
    -moz-animation: bouncing-text 5s linear infinite alternate;
    -webkit-animation: bouncing-text 5s linear infinite alternate;
    animation: bouncing-text 10s linear infinite alternate;
  }
  @-moz-keyframes bouncing-text {
    0% {
      -moz-transform: translateX(50%);
    }
    100% {
      -moz-transform: translateX(-50%);
    }
  }
  @-webkit-keyframes bouncing-text {
    0% {
      -webkit-transform: translateX(50%);
    }
    100% {
      -webkit-transform: translateX(-50%);
    }
  }
  @keyframes bouncing-text {
    0% {
      -moz-transform: translateX(50%);
      -webkit-transform: translateX(50%);
      transform: translateX(50%);
    }
    100% {
      -moz-transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
  }
`;

const SettingsIcon = styled.img`
  height: 30px;
`;
const Destination = styled(Start)``;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const InfoContainer = styled.div`
  width: 100%;
  /* display: flex; */
  /* justify-content: space-between; */
  /* align-items: flex-end; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 0.5rem;
  bottom: 1rem;
  left: 0;
  padding: 0rem 0 0.2rem;
`;

const LabelContainer = styled.div`
  pointer-events: none;
  display: flex;
  margin: 0.75rem 0;
  & > :not(:first-child) {
    margin-left: 0.5rem;
  }
  & > * {
    font-size: 0.8rem;
  }
`;
