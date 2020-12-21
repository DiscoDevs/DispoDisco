import React, { useEffect, useState } from "react";

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
import { getCompanyName, getRiderImage, validateUser } from "../utils/api";
import RiderSelect from "../components/helpers/RiderSelect";
import { useChangeUser } from "../context/user";
import LinkButton from "../components/LinkButton";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [riderImage, setRiderImage] = useState(null);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [falseLogin, setFalseLogin] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const changeUser = useChangeUser();

  useEffect(() => {
    const doFetch = async () => {
      if (loginData.username !== "") {
        const loginstate = await validateUser(loginData);
        if (loginstate === true) {
          setLoggedIn(true);
          setFalseLogin(false);
          setCompanyName(
            await getCompanyName({ username: loginData.username })
          );
        } else {
          setFalseLogin(true);
        }
      }
    };
    doFetch();
  }, [loginData, loggedIn]);

  useEffect(() => {
    if (user !== "") {
      const doFetch = async () => {
        setRiderImage(
          await getRiderImage({ alias: user, company: companyName })
        );
      };
      doFetch();
    }
  }, [user, companyName]);

  useEffect(() => {
    localStorage.setItem("company", companyName);
  }, [companyName]);

  const onRiderChange = (rider) => {
    setUser(rider.alias);
    changeUser(rider);
    localStorage.setItem("user", JSON.stringify(rider));
  };

  const handleRiderRefetch = (refetch) => {
    refetch();
  };

  return (
    <Wrapper>
      <Header />
      <CenterContent>
        <ContentWrapper>
          <Title>Login</Title>
          <Subtitle>You are about to get on your bike...</Subtitle>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              setLoginData({
                username,
                password,
              });
            }}
          >
            {!loggedIn && (
              <>
                <label htmlFor="username">Username</label>
                <Input
                  required
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
                <label htmlFor="password">Password</label>
                <Input
                  required
                  id="password"
                  placeholder="password"
                  value={password}
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                {falseLogin && <p>Benutzername oder Passwort falsch</p>}
                <Button design="menu" label="Login" type="submit" />
              </>
            )}
            {loggedIn && user === "" && (
              <>
                <Subtitle>Select Player:</Subtitle>
                <RiderSelect
                  onRiderChange={onRiderChange}
                  company={companyName}
                  handleRefetch={handleRiderRefetch}
                />
              </>
            )}
            {loggedIn && user !== "" && (
              <UserSelector>
                <img src={riderImage} alt={user} />
                <p>{user}</p>
                <LinkButton to="/menu">Zum Hauptmenü</LinkButton>
              </UserSelector>
            )}
          </Form>
          <Illustrations loggedIn={loggedIn}>
            <img src={Micha} alt="Micha" />
            <img src={SexyBikeRider} alt="sexy Bike Rider" />
            <img src={SexyBike} alt="sexy Bike" />
            <img src={SexyBikeRider2} alt="sexy Bike Rider" />
          </Illustrations>
        </ContentWrapper>
      </CenterContent>
    </Wrapper>
  );
};
const Subtitle = styled.h2`
  text-align: center;
  font-family: "Open Sans";
  color: var(--text-primary);
  font-size: 0.75rem;
  font-size: clamp(0.75rem, 3vw, 1.25rem);
`;
const Form = styled.form`
  margin: 2rem auto 3rem;
  Input {
    margin: 0.3rem auto;
  }
  Button {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

const Title = styled.h1`
  color: var(--text-primary);
  font-size: 2rem;
  font-size: clamp(2rem, 10vw, 3rem);
`;
const UserSelector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    font-size: 1rem;
  }
  img {
    width: 80px;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;
const Illustrations = styled.div`
  pointer-events: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > * {
    animation-duration: ${(props) => (props.loggedIn ? "5s" : "3s")};
    animation-name: ${(props) =>
      props.loggedIn ? "slideOutRight" : " slideInLeft"};
    transition: ease-out;
    height: 50px;
    height: clamp(50px, 5vw, 70px);
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
      margin-right: 0;
    }

    to {
      margin-right: -200%;
    }
  }
`;

export default Login;
