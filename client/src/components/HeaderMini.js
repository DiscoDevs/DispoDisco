import React from "react";
import styled from "styled-components/macro";
import MirrorBall from "../assets/mirrorBall.svg";
import Backward from "../assets/back.svg";

const HeaderElement = styled.header`
  top: 0;
  padding: 1rem;
  min-height: 65px;
  width: 100%;
  position: fixed;
  z-index: 10;
  background-color: var(--text-secondary);
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Back = styled.img``;
const Tour = styled.h1`
  font-size: clamp(1.7rem, 5vw, 5rem);
  font-weight: 400;
`;
const Date = styled(Tour)``;
const Logo = styled.img`
  height: clamp(56px, 10vw, 100px);
  margin-top: -1.5rem;
  filter: drop-shadow(0px 3px 6px var(--text-secondary));
`;
const Bottom = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  padding-top: 1rem;
  font-size: clamp(1.7rem, 5vw, 5rem);
`;
export const HeaderMini = () => (
  <HeaderElement>
    <Top>
      <Back src={Backward} alt={"backward"} />
      <Tour>Tour</Tour>
      <Logo src={MirrorBall} alt={"Logo"} />
      <Date>27.11.20</Date>
    </Top>
    <Bottom>
      <Title>Überschrift</Title>
    </Bottom>
  </HeaderElement>
);
