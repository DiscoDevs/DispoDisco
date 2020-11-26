import React from "react";
import styled from "styled-components/macro";
import CalendarIcon from "../assets/calendar.svg";
import FilterIcon from "../assets/filter.svg";
import { Header } from "./Header";

const Infobox = styled.p`
  display: flex;
  align-items: flex-end;
`;

const IconContainer = styled.div`
  > :not(:last-child) {
    margin-right: 1rem;
  }
`;

export const HeaderMain = () => (
  <Header>
    <Infobox>Next Stop 1:30h</Infobox>
    <IconContainer>
      <img src={CalendarIcon} alt="Calendar" />
      <img src={FilterIcon} alt="Filter" />
    </IconContainer>
  </Header>
);
