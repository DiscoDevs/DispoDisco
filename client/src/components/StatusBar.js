import React from "react";
import styled from "styled-components/macro";
import useOnline from "../hooks/useOnlineStatus";
import { useSpring, animated } from "react-spring";

const StatusBar = () => {
  let online = useOnline();

  const floatIn = useSpring({
    backgroundColor: `rgba(230, 0, 0, ${online ? "0" : "1"})`,
    fontSize: online ? "0px" : "14px",
  });

  return (
    <ContentWrapper online={online} style={floatIn}>
      {online ? (
        <span>🟢 Du bist online</span>
      ) : (
        <span>🔴 Du bist offline</span>
      )}
    </ContentWrapper>
  );
};
const ContentWrapper = styled(animated.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1rem auto 0.5rem;
  padding: 1;
  span {
    text-align: center;
    padding-bottom: 0.5rem;
  }
`;

export default StatusBar;
