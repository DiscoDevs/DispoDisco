import React from "react";
import styled from "styled-components";

import GlobalStyle from "../GlobalStyles";
import { HeaderMenu } from "./HeaderMenu";

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: var(--gradient-dark);
`;

export const MainMenu = () => {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <HeaderMenu />
      </PageWrapper>
    </>
  );
};
