import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import CalendarIcon from "../assets/calendar.svg";
import FilterIcon from "../assets/filter.svg";
import Header from "./Header";
import PropTypes from "prop-types";
import { getCurrentDateString } from "../utils/date";
import { useUser } from "../context/user";
import { useSpring, animated } from "react-spring";

const HeaderMain = ({ handleChange, isLoading }) => {
  HeaderMain.propTypes = {
    handleChange: PropTypes.func,
    isLoading: PropTypes.string,
  };

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePicker, setDatePicker] = useState(<></>);
  const [date, setDate] = useState("");
  const user = useUser();
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

  const smoothColorChange = useSpring({
    backgroundColor: isLoading ? "red" : "green",
    tension: 350,
    friction: 250,
  });

  return (
    <Header>
      <Avatar src={user.picture} alt={"avatar"} />
      <Infobox>Next Stop 1:30h</Infobox>
      <IconContainer>
        {datePicker}
        <img
          src={CalendarIcon}
          alt="Calendar"
          onClick={() => showDatePicker === setShowDatePicker(!showDatePicker)}
        />
        <img src={FilterIcon} alt="Filter" />
        <QueryStatusIcon style={smoothColorChange} />
      </IconContainer>
    </Header>
  );
};

export default HeaderMain;
const QueryStatusIcon = styled(animated.div)`
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;
const Avatar = styled.img`
  height: clamp(35px, 7vw, 60px);
  border-radius: 50%;
  border: 1px solid gold;
`;
const Infobox = styled.p`
  display: flex;
  align-items: flex-end;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 1rem;
  }
`;
