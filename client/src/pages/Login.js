import React, { useState } from "react";

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
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Wrapper>
        <Header />
        <CenterContent>
          <ContentWrapper>
            <Title>Login</Title>
            <Illustrations loggedIn={loggedIn}>
              <img src={SexyBike} alt="sexy Bike" />
            </Illustrations>
            <Subtitle>You are about to get on your bike...</Subtitle>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <label htmlFor="userName">userName</label>
              <Input
                required
                id="userName"
                placeholder="userName"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
              <label htmlFor="password">Password</label>
              <Input
                required
                id="password"
                placeholder="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {userName && (
                <p>
                  <b>UserName: </b> {userName}
                </p>
              )}
              {password && (
                <p>
                  <b>Kennwort: </b> {password}
                </p>
              )}
              <Button
                design="menu"
                onClick={() => {
                  setLoggedIn(!loggedIn);
                }}
              >
                Login
              </Button>
            </Form>
            <Illustrations loggedIn={loggedIn}>
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
    animation-duration: ${(props) => (props.loggedIn ? "5s" : "3s")};
    animation-name: ${(props) =>
      props.loggedIn ? "slideOutRight" : " slideInLeft"};
    transition: ease-out;
    height: clamp(30px, 5vw, 70px);
    margin: auto 1fr;
    padding: 0 1rem;
  }

  @keyframes slideInLeft {
    from {
      margin-right: 200%;
    }

    to {
      margin-right: 0;
    }
  }
  @keyframes slideOutRight {
    from {
      padding-left: 1;
    }

    to {
      padding-left: 100rem;
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
