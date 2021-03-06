import React from "react";
import styled from "styled-components/macro";
import useOnline from "../hooks/useOnlineStatus";
import { useSpring, animated } from "react-spring";

const StatusBar = () => {
  let online = useOnline();

  const floatIn = useSpring({
    backgroundColor: online ? "green" : "red",
    fontSize: online ? "0px" : "14px",
    marginTop: online ? "3px" : "10px",
    height: online ? "0px" : "26px",
  });

  return (
    <ContentWrapper style={floatIn}>
      {online ? <span>Du bist online</span> : <span>Du bist offline</span>}
    </ContentWrapper>
  );
};
const ContentWrapper = styled(animated.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 0px;
  border-radius: 6px;
  span {
    text-align: center;
    padding-bottom: 0.5rem;
  }
`;

export default StatusBar;
