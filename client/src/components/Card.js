import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import ArrowImg from "../assets/arrow.svg";
import CardButton from "./CardButton";

/**
 * Primary UI component for user interaction
 */

const types = {
  normal: "var(--gradient-normal)",
  dayRide: "var(--gradient-dayRide)",
  concurrentRide: "var(--gradient-concurrent)",
  onTimeRide: "var(--gradient-onTime)",
  direct: "var(--gradient-direct)",
};

const CardContainer = styled.div`
  position: relative;
  min-width: 300px;
  max-width: 350px;
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
const Arrow = styled.img``;
const Destination = styled(Start)``;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const LabelContainer = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  margin: 0.75rem auto;
  & > :not(:first-child) {
    margin-left: 0.5rem;
  }
  & > * {
    font-size: 0.8rem;
  }
`;
const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  bottom: 1rem;
  left: 0;
  padding: 0rem 0 0.2rem;
`;

const Card = ({ labels, type, ...props }) => {
  return (
    <CardContainer type={type} {...props}>
      <Header>
        <Start type={type}>
          <p>Alex-Dental</p>
        </Start>
        {type !== "concurrentRide" && (
          <>
            <Arrow src={ArrowImg} />
            <Destination>
              <p>Anzag</p>
            </Destination>
          </>
        )}
      </Header>
      <LabelContainer>{labels && labels}</LabelContainer>
      <InfoContainer>
        <CardButton type="rider" label="🚴‍♀️ Elena" />
        <CardButton type="timer" label="1:30h" />
        <CardButton type="info" label="Info" />
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
  ]),
  labels: PropTypes.object,
  rider: PropTypes.string,
  onClick: PropTypes.func,
};
export default Card;
