import React from "react";
import logoDark from "../assets/ddLogoDark.svg";
import styled from "styled-components/macro";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.img`
  animation-duration: 3s;
  animation-name: slidein;
  animation-transition: ease-out;

  @keyframes slidein {
    from {
      margin-top: 60%;
      transform: rotate(720deg);
    }

    to {
      margin-top: 0;
      transform: rotate(0deg);
    }
  }
`;

export default function Launch() {
  return (
    <LogoContainer>
      <Logo src={logoDark} alt="Logo Dark" />
    </LogoContainer>
  );
}
