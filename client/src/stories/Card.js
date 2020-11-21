import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import ArrowImg from "./assets/arrow.svg";
import { Cargo } from "./Badge.stories";
import { Badge } from "./Badge";

/**
 * Primary UI component for user interaction
 */

const CardContainer = styled.div`
  position: relative;
  /* width: 320px; */
  height: 186px;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "var(--white)")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--black)"};
  border-radius: var(--border-radius);
`;

const Start = styled.div`
  overflow: hidden;
  position: relative;
  color: var(--white);
  width: 40%;
  height: 2rem;
  line-height: 1;
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
  margin-top: 1rem;
  & > :not(:first-child) {
    margin-left: 1rem;
  }
  & > * {
    font-size: 0.8rem;
    padding: 0.9rem;
  }
`;
const InfoContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  bottom: 1rem;
  left: 0;
  padding: 0 1rem;
`;
const Rider = styled.p``;
const Timer = styled.p``;
const Info = styled(Badge)``;
export const Card = ({ ...props }) => {
  return (
    <CardContainer {...props}>
      <Header>
        <Start>
          <p>Alex-Dental</p>
        </Start>
        <Arrow src={ArrowImg} />
        <Destination>
          <p>Anzag</p>
        </Destination>
      </Header>
      <LabelContainer>
        <Cargo type="cargo" label="5-25kg" />
        <Cargo type="direct" label="Direct" />
        <Cargo type="kutsche" label="Kutsche" />
      </LabelContainer>
      <InfoContainer>
        <Rider>🚴‍♀️ Elena</Rider>
        <Timer>11:30</Timer>
        <Info type="cta" label="Info" />
      </InfoContainer>
    </CardContainer>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(["normal", "daily", "direct", "recurrently"]),
  /**
   * Button contents
   */
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};
