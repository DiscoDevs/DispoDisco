import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import ArrowImg from "./assets/arrow.svg";
import { Cargo } from "./Badge.stories";

/**
 * Primary UI component for user interaction
 */

const CardContainer = styled.div`
  width: 320px;
  height: 186px;
  padding: 1rem;
  color: ${(props) => (props.color ? props.color : "var(--white)")};

  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "var(--black)"};

  text-align: center;
  font-weight: bold;

  border-radius: var(--border-radius);
`;

const Start = styled.div`
  overflow: hidden;
  position: relative;
  color: var(--white);
  width: 30%;
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
export const Card = ({
  primary,
  backgroundColor,
  color,
  size,
  label,
  ...props
}) => {
  const mode = primary ? "badge--primary" : "badge--secondary";
  return (
    <CardContainer
      color={color}
      className={[`badge--${size}`, mode].join(" ")}
      backgroundColor={backgroundColor}
      {...props}
    >
      <Header>
        <Start>
          <p>Alex-Dental</p>
        </Start>
        <Arrow src={ArrowImg} />
        <Destination>
          <p>Anzag</p>
        </Destination>
      </Header>
      <Cargo type="cargo" label="5-25kg" />
      {/* {label} */}
    </CardContainer>
  );
};

Card.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Button contents
   */
  color: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
