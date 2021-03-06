import React from "react";
import styled from "styled-components/macro";

import GlobalStyle from "../GlobalStyles";
import HeaderHome from "../components/HeaderHome";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import { useUsers } from "../context/user";
import Logout from "../assets/exit.png";

const MainMenu = () => {
  const history = useHistory();
  const { user, company, logout } = useUsers();
  const buttons = [
    {
      category: "settings",
      design: "menu",
      label: "Einstellungen",
      route: "/settings",
    },
    {
      category: "tours",
      design: "menu",
      label: "Touren",
      route: "/tours",
    },
    {
      category: "riders",
      design: "menu",
      label: "Riders",
      route: "/riders",
    },
    {
      category: "customers",
      design: "menu",
      label: "Kunden",
      route: "/customers",
    },
    {
      category: "go",
      design: "cta",
      label: "Lets Fetz",
      route: "/tours/today",
    },
  ];
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <HeaderHome />
        <MenuWrapper>
          <h2>{company.name}</h2>
          <h5>Selected Player:</h5>
          <AvatarBox>
            <div>
              <img src={user?.picture} alt={"Avatar"} />
              <p>{user?.alias}</p>
            </div>
            <LogoutButton src={Logout} onClick={logout} />
          </AvatarBox>
          {buttons.map((button) => (
            <Button
              key={button.label}
              onClick={() => history.push(button.route)}
              {...button}
            />
          ))}
        </MenuWrapper>
      </PageWrapper>
    </>
  );
};
const LogoutButton = styled.img`
  height: 50px;
`;
const PageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-around;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: var(--gradient-dark);
`;
const AvatarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  div {
    margin-right: 1rem;
    h5 {
      margin-bottom: 0.5rem;
    }
    img {
      height: 35px;
      height: clamp(35px, 10vw, 75px);
      margin: 0 auto;
    }
  }
`;

const MenuWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  > :first-child {
    margin-bottom: 1rem;
  }
  Button {
    margin-top: 0.5rem;
    margin-top: clamp(0.5rem, 1vw, 1rem);
    width: 100%;
    font-size: 1.2rem;
    font-size: clamp(1.2rem, 5vw, 1.7rem);
    justify-content: flex-start;
  }
  > :last-child {
    margin-top: 1.5rem;
  }
`;

export default MainMenu;
