import React from "react";
import styled from "styled-components/macro";
import MirrorBall from "../assets/mirrorBall.svg";
import Backward from "../assets/back.svg";

const HeaderElement = styled.header`
  top: 0;
  padding: 0.1rem 1.5rem;
  min-height: 65px;
  width: 100%;
  position: fixed;
  z-index: 10;
  background-color: var(--text-secondary);
  color: var(--text-primary);
  text-align: center;
  display: grid;
  align-content: center;
  grid-template-columns: 10% auto auto auto;
  grid-template-areas: "back title logo date";
`;

const Title = styled.h1`
  grid-area: title;
  font-size: 2rem;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 1rem;
`;
const Date = styled(Title)`
  grid-area: date;
  padding-right: 1rem;
  padding-left: 0;
`;

const Back = styled.img`
  grid-area: back;
  align-self: center;
`;

const Logo = styled.img`
  height: 56px;
  margin-top: -0.7em;
  filter: drop-shadow(0px 3px 6px var(--text-secondary));
`;

export const HeaderMini = () => (
  <HeaderElement>
    <Back src={Backward} alt={"backward"} />
    <Title>Tour</Title>
    <Date>27.11.2</Date>
    <Logo src={MirrorBall} alt={"Logo"} />
  </HeaderElement>
);
