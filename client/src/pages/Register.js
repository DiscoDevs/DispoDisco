import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import Button from "../components/Button";
import Header from "../components/Header";
import { CenterContent } from "../components/helpers/CenterContent";
import Wrapper, { ContentWrapper } from "../components/helpers/Wrapper";
import Input from "../components/Input";
import { registerNewUser } from "../utils/api";

const Register = () => {
  const history = useHistory();

  const [userdata, setUserdata] = useState({});

  return (
    <div>
      <Wrapper>
        <Header />
        <CenterContent>
          <ContentWrapper>
            <Title>Register</Title>
            <Subtitle>Register your company for free</Subtitle>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                localStorage.setItem("company", userdata.company);
                if (!userdata.hash) {
                  userdata.hash = "tree";
                }
                registerNewUser({ ...userdata });
                history.push("/riders/new?type=register");
              }}
            >
              <Input
                required
                id="username"
                placeholder="Username"
                value={userdata.username}
                onChange={(event) => {
                  setUserdata({ ...userdata, username: event.target.value });
                }}
              />
              <Input
                required
                id="password"
                placeholder="Password"
                type="password"
                value={userdata.password}
                onChange={(event) => {
                  setUserdata({ ...userdata, password: event.target.value });
                }}
              />
              <Input
                required
                id="company"
                placeholder="Firmenname"
                value={userdata.company}
                onChange={(event) => {
                  setUserdata({ ...userdata, company: event.target.value });
                }}
              />
              <Button design="menu" label="Register" type="submit" />
            </Form>
          </ContentWrapper>
        </CenterContent>
      </Wrapper>
    </div>
  );
};

const Title = styled.h2`
  color: var(--text-primary);
  font-size: clamp(2rem, 10vw, 3rem);
`;

const Subtitle = styled.h3`
  text-align: center;
  font-family: "Open Sans";
  color: var(--text-primary);
  font-size: clamp(0.75rem, 3vw, 1.25rem);
`;

const Form = styled.form`
  margin-top: 10rem;
  Input {
    margin: 0.3rem auto;
  }
  Button {
    margin-top: 1rem;
  }
`;

export default Register;
