import React from "react";
import styled from "styled-components/macro";
import MirrorBall from "./assets/mirrorBall.svg";
import Backward from "./assets/backward.svg";
import CalendarIcon from "./assets/calendar.svg";
import FilterIcon from "./assets/filter.svg";

const HeaderElement = styled.header`
  width: 100vw;
  padding: 1rem;
  height: 111px;
  background-color: var(--black);
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
  font-size: 2rem;
  font-weight: 400;
  display: flex;
  flex-grow: auto;
  align-items: center;
  justify-content: space-around;
`;

const Back = styled.img`
  grid-area: back;
  align-self: center;
`;

const Logo = styled.img`
  grid-area: logo;
  height: 55px;
  margin-top: 0.7em;
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
  <HeaderElement>
    <Back src={Backward} alt={"backward"} />
    <Titel>
      Fahrt
      <Logo src={MirrorBall} alt={"Logo"} />
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
