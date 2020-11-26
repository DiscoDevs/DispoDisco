import React from "react";
import styled from "styled-components/macro";
import MirrorBall from "../assets/mirrorBall.svg";
import Backward from "../assets/backward.svg";
import CalendarIcon from "../assets/calendar.svg";
import FilterIcon from "../assets/filter.svg";
import { useHistory } from "react-router-dom";

const HeaderElement = styled.header`
  top: 0;
  padding: 1rem;
  min-height: 100px;
  width: 100%;
  position: fixed;
  z-index: 10;
  background-color: var(--text-secondary);
  color: var(--text-primary);
  text-align: center;
  display: grid;
  align-content: center;
  grid-template-columns: 10% 30% 20% 30% 10%;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    "back title logo date date"
    "back info info menu  menu";
`;

const Title = styled.h1`
  grid-area: title;
  font-size: 2rem;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: auto;
`;
const Date = styled(Title)`
  grid-area: date;
  display: flex;
  margin-bottom: 1.5rem;
  justify-content: flex-end; ;
`;

const Back = styled.img`
  grid-area: back;
  align-self: center;
`;
const Menu = styled.div`
  grid-area: menu;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;
const Logo = styled.img`
  height: 56px;
  margin-top: -0.7em;
  filter: drop-shadow(0px 3px 6px var(--text-secondary));
`;

const Calendar = styled(Back)`
  grid-area: menu;
`;
const Infobox = styled.p`
  grid-area: info;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;
const Filter = styled(Back)`
  grid-area: filter;
`;

export const HeaderMain = () => {
  const history = useHistory();

  return (
    <HeaderElement>
      <Back
        src={Backward}
        alt={"backward"}
        onClick={() => history.push("/menu")}
      />
      <Title>Fahrt</Title>
      <Date>27.11.2</Date>
      <Logo src={MirrorBall} alt={"Logo"} />
      <Infobox>Next: 2 min 🚀</Infobox>
      <Menu>
        <Calendar src={CalendarIcon} alt={"calendar"} />
        <Filter src={FilterIcon} alt={"filter"} />
      </Menu>
    </HeaderElement>
  );
};
