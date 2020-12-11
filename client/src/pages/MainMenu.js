import React from "react";
import styled from "styled-components/macro";

import GlobalStyle from "../GlobalStyles";
import HeaderHome from "../components/HeaderHome";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

const MainMenu = () => {
  const history = useHistory();
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

const PageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: var(--gradient-dark);
`;

const MenuWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 2rem;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  Button {
    margin-top: 1rem;
  }
  > :last-child {
    margin-top: 1.5rem;
  }
`;

export default MainMenu;
