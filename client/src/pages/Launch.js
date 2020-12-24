import React from "react";
import logoDark from "../assets/ddLogoDark.svg";
import Login from "../assets/login.svg";
import Register from "../assets/register.svg";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import LinkButton from "../components/LinkButton";

const Launch = () => {
  const history = useHistory();

  return (
    <Wrapper>
      <Title>DispoDisco</Title>
      <LogoContainer>
        <Logo
          src={logoDark}
          alt="Logo Dark"
          onClick={() => history.push("/menu")}
        />
      </LogoContainer>
      <EnterContainer>
        <LinkButton to="/login">
          <img src={Login} alt="Login" />
          login
        </LinkButton>
        <LinkButton to="/register">
          <img src={Register} alt="Register" />
          register
        </LinkButton>
      </EnterContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  min-height: 100vh;
  grid-template-areas:
    "title"
    "logo"
    "enter";
`;

const EnterContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 0;
  right: 0;
  grid-area: enter;
  > * {
    width: 200px;
    margin: 1rem auto;
    min-width: 250px;
    font-size: 1.5rem;
    display: flex;
    img {
      height: 30px;
    }
  }
`;

const Title = styled.h1`
  grid-area: title;
  place-self: end center;
  padding-bottom: 2rem;
  font-size: 3rem;
  color: var(--text-primary);

  animation-duration: 3s;
  animation-name: slideleft;
  transition: ease-out;

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
  transition: ease-out;

  @keyframes slidein {
    from {
      margin-top: 100%;
      transform: rotate(720deg);
    }

    to {
      margin-top: 0;
      transform: rotate(0deg);
    }
  }
`;

export default Launch;
