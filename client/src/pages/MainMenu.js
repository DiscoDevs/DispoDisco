import React from "react";
import styled from "styled-components/macro";

import GlobalStyle from "../GlobalStyles";
import HeaderHome from "../components/HeaderHome";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

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

const MainMenu = () => {
  const history = useHistory();
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <HeaderHome />
        <MenuWrapper>
          <Button
            category="settings"
            design="menu"
            label="Einstellungen"
            onClick={() => history.push("/settings")}
          />
          <Button
            category="tours"
            design="menu"
            label="Touren"
            onClick={() => history.push("/tours")}
          />
          <Button
            category="riders"
            design="menu"
            label="Riders"
            onClick={() => history.push("/riders")}
          />
          <Button
            category="go"
            design="cta"
            label="Lets Fetz"
            onClick={() => history.push("/rides")}
          />
        </MenuWrapper>
      </PageWrapper>
    </>
  );
};

export default MainMenu;
