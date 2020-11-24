import React from "react";
import logoDark from "../assets/ddLogoDark.svg";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 40% 60%;
  grid-template-areas:
    "title"
    "logo";
`;

const Title = styled.h1`
  grid-area: title;
  place-self: end center;
  padding-bottom: 2rem;
  font-size: 3rem;
  color: var(--white);

  animation-duration: 3s;
  animation-name: slideleft;
  animation-transition: ease-out;

  @keyframes slideleft {
    from {
      margin-right: 150%;
    }

    to {
      margin-right: 0;
    }
  }
`;

const LogoContainer = styled.div`
  grid-area: logo;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
    <Wrapper>
      <Title>DispoDisco</Title>
      <LogoContainer>
        <Logo src={logoDark} alt="Logo Dark" />
      </LogoContainer>
    </Wrapper>
  );
}
