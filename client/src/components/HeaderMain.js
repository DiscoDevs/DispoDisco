import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import CalendarIcon from "../assets/calendar.svg";
import FilterIcon from "../assets/filter.svg";
import Header from "./Header";
import PropTypes from "prop-types";
import { getCurrentDateString } from "../utils/date";

const Infobox = styled.p`
  display: flex;
  align-items: flex-end;
`;

const IconContainer = styled.div`
  > :not(:last-child) {
    margin-right: 1rem;
  }
`;

const HeaderMain = ({ handleChange }) => {
  HeaderMain.propTypes = {
    handleChange: PropTypes.func,
  };

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePicker, setDatePicker] = useState(<></>);
  const [date, setDate] = useState("");

  const today = getCurrentDateString();

  useEffect(() => {
    if (showDatePicker) {
      setDatePicker(
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleChange(date);
          }}
        >
          <input
            type="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
          <button type="submit">Go!</button>
        </form>
      );
    } else {
      setDatePicker(<></>);
      handleChange(today);
    }
  }, [showDatePicker, date, handleChange, today]);

  return (
    <Header>
      <img
        src={"https://robohash.org/353091.pngsize=75x75?set=set5&size=100x100"}
        alt={"avatar"}
      />
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
