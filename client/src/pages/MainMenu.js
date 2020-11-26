import React from "react";
import styled from "styled-components";

import GlobalStyle from "../GlobalStyles";
import { HeaderMenu } from "../components/HeaderMenu";
import { Button } from "../components/Button";
import { useHistory } from "react-router-dom";

const PageWrapper = styled.div`
  display: flex;
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

export const MainMenu = () => {
  const history = useHistory();

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <HeaderMenu />
        <MenuWrapper>
          <Button
            label="settings"
            type="menu"
            onCLick={() => history.push("/settings")}
          />
          <Button
            label="tours"
            type="menu"
            onClick={() => history.push("/tours")}
          />
          <Button
            label="riders"
            type="menu"
            onClick={() => history.push("/riders")}
          />
          <Button
            label="go"
            type="cta"
            onClick={() => history.push("/rides")}
          />
        </MenuWrapper>
      </PageWrapper>
    </>
  );
};
