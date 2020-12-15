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
              <label htmlFor="userName">Login</label>
              <Input id="userName" placeholder="userName" />
              <label htmlFor="password">Login</label>
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
  justify-content: center;
  margin: 2rem auto 1rem;
  > * {
    height: clamp(30px, 5vw, 70px);
    margin: auto 1rem;
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
