import React from "react";
import styled from "styled-components/macro";
import MirrorBall from "../assets/mirrorBall.svg";
import Backward from "../assets/back.svg";

const HeaderElement = styled.header`
  top: 0;
  padding: 0.5rem 1.5rem;
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
  grid-template-rows: 40% 60%;
  grid-template-areas:
    "back tour logo date"
    "back tour title date";
`;

const Back = styled.img`
  grid-area: back;
  align-self: center;
`;
const Tour = styled.h1`
  grid-area: tour;
  font-size: 2rem;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* margin-top: 1rem; */
  padding-left: 1rem;
`;
const Logo = styled.img`
  height: 56px;
  margin-top: -0.7em;
  place-self: center;
  filter: drop-shadow(0px 3px 6px var(--text-secondary));
`;
const Date = styled(Tour)`
  grid-area: date;
  padding-right: 1rem;
  padding-left: 0;
`;

const Title = styled.h2`
  grid-area: title;
  place-self: end;
`;
export const HeaderMini = () => (
  <HeaderElement>
    <Back src={Backward} alt={"backward"} />
    <Tour>Tour</Tour>
    <Date>27.11.20</Date>
    <Logo src={MirrorBall} alt={"Logo"} />
    <Title>Überschrift</Title>
  </HeaderElement>
);
