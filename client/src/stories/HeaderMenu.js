import React from "react";
import styled from "styled-components/macro";
import MirrorBall from "./assets/mirrorBall.svg";
import FrontCasset from "./assets/frontCassett.svg";

const HeaderElement = styled.header`
  width: 100vw;
  padding: 1rem;
  height: 200px;
  background-color: var(--header-red);
  color: var(--white);

  text-align: center;
  display: flex;
`;

const Titel = styled.h1`
  font-size: 3.3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  line-height: 1;

  & > :nth-child(1) {
    position: relative;
  }
  & > :nth-child(2) {
    padding-left: 5rem;
  }
`;

const O = styled.img`
  position: absolute;
  height: 35px;
  bottom: 4px;
  right: -37px;
`;
const Logo = styled.img`
  position: absolute;
  z-index: 10;
  left: 40vw;
  height: 160px;
  margin-top: -50px;
  filter: drop-shadow(0px 3px 6px var(--black));
`;
export const HeaderMenu = () => (
  <HeaderElement>
    <Logo src={MirrorBall} alt={"Logo"} />
    <Titel>
      <p>
        Disp
        <O src={FrontCasset} alt={"o"} />
      </p>
      <p>Disco</p>
    </Titel>
  </HeaderElement>
);
