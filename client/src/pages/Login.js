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
import { Link } from "react-router-dom";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [riderImage, setRiderImage] = useState(null);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [falseLogin, setFalseLogin] = useState(false);
  const [companyName, setCompanyName] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      if (loginData.username !== "") {
        const loginstate = await validateUser(loginData);
        console.log(loginstate);
        if (loginstate === true) {
          setLoggedIn(true);
          setFalseLogin(false);
          setCompanyName(
            await getCompanyName({ username: loginData.username })
          );
          console.log(await getCompanyName({ username: loginData.username }));
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
        setRiderImage(await getRiderImage({ alias: user }));
      };
      doFetch();
    }
  }, [user]);

  useEffect(() => {
    console.log(companyName);
    localStorage.setItem("company", companyName);
  }, [companyName]);

  const onRiderChange = (rider) => {
    setUser(rider);
  };

  return (
    <div>
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
                  <RiderSelect onRiderChange={onRiderChange} />
                </>
              )}
              {loggedIn && user !== "" && (
                <>
                  <img src={riderImage} alt={user} />
                  <p>{user}</p>
                  <Link to="/menu">Zum Hauptmenü</Link>
                </>
              )}

              <IllustrationTop loggedIn={loggedIn}>
                <img src={SexyBike} alt="sexy Bike" />
              </IllustrationTop>
              <Illustrations loggedIn={loggedIn}>
                <img src={SexyBikeRider} alt="sexy Bike Rider" />
                <img src={SexyBikeRider2} alt="sexy Bike Rider" />
                <img src={Micha} alt="Micha" />
              </Illustrations>
            </Form>
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
  position: absolute;
  pointer-events: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  bottom: -5rem;
  left: 20%;
  > * {
    animation-duration: ${(props) => (props.loggedIn ? "5s" : "3s")};
    animation-name: ${(props) =>
      props.loggedIn ? "slideOutRight" : " slideInLeft"};
    transition: ease-out;
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

const IllustrationTop = styled(Illustrations)`
  left: 40%;
  bottom: 15rem;
`;
const Subtitle = styled.h2`
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

export default Login;
