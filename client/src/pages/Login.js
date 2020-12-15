import React from "react";

import Wrapper, { ContentWrapper } from "../components/helpers/Wrapper";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import styled from "styled-components/macro";
import { CenterContent } from "../components/helpers/CenterContent";
import SexyBike from "../assets/sexyBike.svg";
import SexyBikeRider from "../assets/sexyBikeRider.svg";
import SexyBikeRider2 from "../assets/sexyBikeRider2.svg";
import Micha from "../assets/micha.svg";

const Login = () => {
  return (
    <div>
      <Wrapper>
        <Header />
        <CenterContent>
          <ContentWrapper>
            <Title>Login</Title>
            <Illustrations>
              <img src={SexyBike} alt="sexy Bike" />
            </Illustrations>
            <Subtitle>You are about to get on your bike...</Subtitle>
            <Form>
              <label htmlFor="userName">userName</label>
              <Input id="userName" placeholder="userName" />
              <label htmlFor="password">Password</label>
              <Input id="password" placeholder="password" />
              <Button design="menu">Login</Button>
            </Form>
            <Illustrations>
              <img src={SexyBikeRider} alt="sexy Bike Rider" />
              <img src={SexyBikeRider2} alt="sexy Bike Rider" />
              <img src={Micha} alt="Micha" />
            </Illustrations>
          </ContentWrapper>
        </CenterContent>
      </Wrapper>
    </div>
  );
};

const Title = styled.h1`
  color: var(--text-primary);
  font-size: clamp(2rem, 10vw, 3rem);
`;
const Illustrations = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 2rem auto 1rem;
  > * {
    animation-duration: 3s;
    animation-name: slideOutRight;
    transition: ease-out;
    height: clamp(30px, 5vw, 70px);
    margin: auto 1fr;
    padding: 0 1rem;
  }

  @keyframes slideInLeft {
    from {
      margin-right: 200%;
      /* transform: rotate(720deg); */
    }

    to {
      margin-right: 0;
      /* transform: rotate(0deg); */
    }
  }
  @keyframes slideOutRight {
    from {
      padding-left: 1;
      /* transform: rotate(720deg); */
    }

    to {
      padding-left: 70%;
      /* transform: rotate(0deg); */
    }
  }
`;
const Subtitle = styled.h2`
  text-align: center;
  font-family: "Open Sans";
  color: var(--text-primary);
  font-size: clamp(0.75rem, 3vw, 1.25rem);
`;
const Form = styled.form`
  margin-top: 2rem;
  Input {
    margin: 0.3rem auto;
  }
  Button {
    margin-top: 1rem;
  }
`;

export default Login;
