import React from "react";
import styled from "styled-components/macro";
import MirrorBall from "./assets/mirrorBall.svg";
import FrontCasset from "./assets/frontCassett.svg";
import Backward from "./assets/backward.svg";
import CalendarIcon from "./assets/calendar.svg";
import FilterIcon from "./assets/filter.svg";

const HeaderElement = styled.header`
  width: 100vw;
  padding: 1rem;
  height: ${(props) => (props.main ? "111px" : "200px")};
  background-color: ${(props) =>
    props.main ? "var(--black)" : "var(--header-red)"};
  color: var(--white);

  text-align: center;
  display: grid;
  align-content: center;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    "back title title"
    "calendar info filter";
`;

const Titel = styled.h1`
  grid-area: title;
  font-size: ${(props) => (props.main ? "2rem" : "3.3rem")};
  font-weight: ${(props) => (props.main ? "400" : "700")};
  display: flex;
  flex-grow: auto;
  align-items: center;
  justify-content: space-around;
  line-height: 1;
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
  align-self: center;
`;

const Logo = styled.img`
  grid-area: logo;
  height: ${(props) => (props.main ? "55px" : " 160px")};
  margin-top: ${(props) => (props.main ? "-0.7em" : "-20px")};

  filter: drop-shadow(0px 3px 6px var(--black));
`;

const Calendar = styled(Back)`
  grid-area: calendar;
`;
const Infobox = styled.p`
  grid-area: info;
  width: 100%;
`;

const Filter = styled(Back)`
  grid-area: filter;
`;
export const HeaderMenu = () => (
  <HeaderElement main>
    <Back src={Backward} alt={"backward"} />
    <Titel main>
      Fahrt
      <Logo main src={MirrorBall} alt={"Logo"} />
      27.11.20
    </Titel>
    <Calendar src={CalendarIcon} alt={"calendar"} />
    <Infobox>
      🚀 <b>Next Stop</b> 🚀 <br />
      <b>20</b> min
    </Infobox>
    <Filter src={FilterIcon} alt={"filter"} />
  </HeaderElement>
);
