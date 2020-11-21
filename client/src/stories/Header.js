import React from "react";
import styled from "styled-components/macro";
import MirrorBall from "./assets/mirrorBall.svg";
import FrontCasset from "./assets/frontCassett.svg";
import Backward from "./assets/backward.svg";

const HeaderElement = styled.header`
  width: 100vw;
  height: ${(props) => (props.main ? "111px" : "200px")};
  background-color: ${(props) =>
    props.main ? "var(--black)" : "var(--header-red)"};
  color: var(--white);

  text-align: center;
  display: grid;
  place-content: center;
  /* grid-template-columns: 1fr 1fr; */
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    /* ". . "
    "title .";
     */ "back tour logo date";
  /* & > h1 {
     margin-top: 5rem;
  } */
`;
const Titel = styled.h1`
  font-size: ${(props) => (props.main ? "2rem" : "3.3rem")};
  font-weight: ${(props) => (props.main ? "400" : "700")};
  /* grid-area: title; */
  grid-area: tour;
  line-height: 1;

  & > :nth-child(1) {
    position: relative;
    margin-left: 1rem;
  }
  & > :nth-child(2) {
    margin-left: 80px;
  }
`;

const O = styled.img`
  position: absolute;
  height: 30px;
  bottom: 6px;
`;

export const Header = () => (
  <HeaderElement>
    <Back src={Backward} alt={"backward"} />
    <Titel>
      <Logo src={MirrorBall} alt={"Logo"} />
      <p>
        Disp
        <O src={FrontCasset} alt={"o"} />
      </p>
      <p>Disco</p>
    </Titel>
  </HeaderElement>
);
const Back = styled.img`
  grid-area: back;
`;
const Date = styled(Titel)`
  grid-area: date;
`;
const Logo = styled.img`
  /* position: absolute; */
  /* left: 40%; */
  width: 100%;
  /* margin-top: -2.2srem; */
  grid-area: logo;
  height: ${(props) => (props.main ? "55px" : " 160px")};
  margin-top: ${(props) => (props.main ? "2.2rem" : "-20px")};

  filter: drop-shadow(0px 3px 6px var(--black));
`;

export const HeaderMenu = () => (
  <HeaderElement main>
    <Back src={Backward} alt={"backward"} />
    <Titel main>Fahrt</Titel>
    <Logo main src={MirrorBall} alt={"Logo"} />
    <Date>27.11.20</Date>
  </HeaderElement>
);
