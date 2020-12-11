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

const HeaderMain = (handleDateChange) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePicker, setDatePicker] = useState(<></>);
  const [date, setDate] = useState("");

  useEffect(() => {
    if (showDatePicker) {
      setDatePicker(
        <input
          type="date"
          onChange={(event) => {
            setDate(event.target.value);
            handleDateChange(date);
          }}
        />
      );
      localStorage.setItem("currentDate", date);
    } else {
      setDatePicker(<></>);
      localStorage.clear();
    }
  }, [showDatePicker, date]);

  return (
    <Header>
      <Infobox>Next Stop 1:30h</Infobox>
      <IconContainer>
        {datePicker}
        <img
          src={CalendarIcon}
          alt="Calendar"
          onClick={() =>
            showDatePicker === false
              ? setShowDatePicker(true)
              : setShowDatePicker(false)
          }
        />
        <img src={FilterIcon} alt="Filter" />
      </IconContainer>
    </Header>
  );
};

export default HeaderMain;
