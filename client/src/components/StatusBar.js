import React from "react";
import styled from "styled-components/macro";
import useOnline from "../hooks/useOnlineStatus";
import { useSpring, animated } from "react-spring";

const StatusBar = () => {
  const floatIn = useSpring({ y: 100, from: { y: 0 } });
  let online = useOnline();
  return (
    <ContentWrapper isOnline={online} style={floatIn}>
      <span>🔴 Du bist offline</span>
    </ContentWrapper>
  );
};
const ContentWrapper = styled(animated.div)`
  display: ${(props) => (props.isOnline ? "none" : "flex")};
  justify-content: center;
  width: 100%;
  margin: 0.5rem auto;
  padding: 0 !important;
  background: ${(props) =>
    props.isOnline ? "green" : "var(--gradient-direct)"};
  span {
    width: 100%;
    text-align: center;
    padding-bottom: 0.5rem;
  }
`;

export default StatusBar;
