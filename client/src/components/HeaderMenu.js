import React from "react";
import styled from "styled-components/macro";
import MirrorBall from "../assets/mirrorBall.svg";
import FrontCasset from "../assets/frontCassett.svg";

const HeaderElement = styled.header`
  position: fixed;
  z-index: 10;
  display: flex;
  width: 100%;
  padding: 1rem;
  color: var(--text-primary);
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
  left: 50%;
  height: 160px;
  margin-top: -50px;
  filter: drop-shadow(0px 3px 6px var(--text-secondary));
`;
export const HeaderMenu = () => (
  <HeaderElement>
    <Titel>
      <p>
        Disp
        <O src={FrontCasset} alt={"o"} />
      </p>
      <p>Disco</p>
    </Titel>
    <Logo src={MirrorBall} alt={"Logo"} />
  </HeaderElement>
);
