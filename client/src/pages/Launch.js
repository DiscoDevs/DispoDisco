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

  @keyframes slidein {
    from {
      margin-top: 60%;
    }

    to {
      margin-top: 0;
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
