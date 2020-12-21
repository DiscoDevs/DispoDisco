import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import ArrowImg from "../assets/arrow.svg";
import SettingsImg from "../assets/settingsIcon.svg";
import CardButton from "./CardButton";
import { useHistory } from "react-router-dom";
import { deleteData, updateData } from "../utils/api";
import Countdown from "./Countdown";
import CardContainer from "./helpers/CardContainer";
import RiderLabel from "./RiderLabel";

const types = {
  normal: "var(--gradient-normal)",
  dayRide: "var(--gradient-dayRide)",
  concurrentRide: "var(--gradient-concurrent)",
  onTimeRide: "var(--gradient-onTime)",
  direct: "var(--gradient-direct)",
  delivered: "var(--gradient-direct)",
};

const Card = ({
  status = false,
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
  finish,
  date,
  onChange,
}) => {
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
    status: PropTypes.string,
    removeButton: PropTypes.bool,
    settings: PropTypes.string,
    rideID: PropTypes.string,
    name: PropTypes.string,
    rider: PropTypes.string,
    onClick: PropTypes.func,
    start: PropTypes.string,
    onChange: PropTypes.func,
    dest: PropTypes.string,
    finish: PropTypes.string,
    date: PropTypes.string,
  };

  const progressBar = ["fetched", "delivered", "open"];
  const initalCount = status !== "open" ? progressBar.indexOf(status) + 1 : 0;
  const history = useHistory();
  const [progress, setProgress] = useState(status || "open");
  const [counter, setCounter] = useState(initalCount);

  const changeTourStatus = async () => {
    const newProgress = progressBar[counter];
    setProgress(newProgress);
    setCounter(counter + 1);
    await updateData(
      { collectionName: "tours", id: rideID },
      { status: newProgress }
    );
    if (counter >= progressBar.length - 1) {
      setCounter(0);
    }
    onChange();
  };
  const handleLabel = () => {
    switch (progress) {
      case progressBar[2]:
        return "offen";
      case progressBar[1]:
        return "abgegeben";
      case progressBar[0]:
        return "abgeholt";
      default:
        return "offen";
    }
  };
  return (
    <CardWrapper progress={progress} type={type}>
      <Header>
        <Start type={type}>{type !== "concurrentRide" ? start : name}</Start>
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

      {!info && (
        <InfoContainer>
          <CardButton
            type="timer"
            label={new Date(date).toLocaleTimeString("de-DE", {
              hour: "numeric",
              minute: "numeric",
            })}
          />
          <CardButton type="timer" label={<Countdown finish={finish} />} />
          <CardButton
            type="timer"
            label={new Date(finish).toLocaleTimeString("de-DE", {
              hour: "numeric",
              minute: "numeric",
            })}
          />
        </InfoContainer>
      )}

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
          <RiderLabel riderName={rider} />
        )}
        {info ? (
          <CardButton type="timer" label={<Countdown finish={finish} />} />
        ) : (
          <SettingsIcon
            src={SettingsImg}
            alt="Change Ride"
            onClick={() => history.push(`/tours/${rideID}/edit`)}
          />
        )}
        {info && (
          <CardButton
            type="info"
            label="Info"
            onClick={() => {
              history.push(`/tours/${rideID}`);
            }}
          />
        )}
        {info && (
          <CardButton
            status={progress}
            type="info"
            label={handleLabel()}
            onClick={() => {
              changeTourStatus();
            }}
          />
        )}
        {removeButton && (
          <CardButton
            type="remove"
            label="X"
            onClick={() => {
              deleteData({
                collectionName: "tours",
                id: rideID,
              });
              history.goBack();
            }}
          />
        )}
      </InfoContainer>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled(CardContainer)`
  position: relative;
  margin: auto;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  color: var(--text-primary);
  border-radius: var(--border-radius);
  background: ${(props) => types[props.type]};
  filter: ${(props) => props.progress === "delivered" && "grayscale(1)"};
`;

const Start = styled.div`
  text-align: center;
  color: var(--text-primary);
  border-radius: var(-border-radius);
  font-family: ${(props) => props.type === "concurrentRide" && "Goldman"};
  width: ${(props) => (props.type === "concurrentRide" ? "60%" : "40%")};
  line-height: 2;
  min-width: 90px;
  height: 2.5rem;
  padding: 0.25rem 0;
  border-radius: 3px;
  box-shadow: ${(props) => {
    return props.type === "concurrentRide" ? "var(--shadow)" : "none";
  }};
  background-color: ${(props) =>
    props.type === "concurrentRide" ? "var(--cargo)" : "transparent"};
`;

const Destination = styled(Start)``;

const SettingsIcon = styled.img`
  height: 30px;
  margin: auto;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const InfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 0.5rem;
  bottom: 1rem;
  left: 0;
  padding: 0rem 0 0.2rem;
`;

const LabelContainer = styled.div`
  pointer-events: none;
  height: 40px;
  display: flex;
  margin: 0.75rem 0;
  & > :not(:first-child) {
    margin-left: 0.5rem;
  }
  & > * {
    font-size: 0.8rem;
  }
`;
