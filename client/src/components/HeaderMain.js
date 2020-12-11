import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import CalendarIcon from "../assets/calendar.svg";
import FilterIcon from "../assets/filter.svg";
import Header from "./Header";

const Infobox = styled.p`
  display: flex;
  align-items: flex-end;
`;

const IconContainer = styled.div`
  > :not(:last-child) {
    margin-right: 1rem;
  }
`;

const HeaderMain = () => {
  const [date, setDate] = useState(false);
  const [datePicker, setDatePicker] = useState(<></>);

  useEffect(() => {
    if (date) {
      setDatePicker(<input type="date" />);
    } else {
      setDatePicker(<></>);
    }
  }, [date]);

  return (
    <Header>
      <Infobox>Next Stop 1:30h</Infobox>
      <IconContainer>
        {datePicker}
        <img
          src={CalendarIcon}
          alt="Calendar"
          onClick={() => (date === false ? setDate(true) : setDate(false))}
        />
        <img src={FilterIcon} alt="Filter" />
      </IconContainer>
    </Header>
  );
};

export default HeaderMain;
