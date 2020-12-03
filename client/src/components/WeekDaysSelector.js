import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WeekDaysSelector = ({ weekDays }) => {
  function setWeekday(dayNumber) {
    weekDays.includes(dayNumber)
      ? (weekDays = weekDays.filter((day) => day !== dayNumber))
      : weekDays.push(dayNumber);
  }

  const daysArray = [
    {
      name: "Mon",
      id: 1,
    },
    {
      name: "Tue",
      id: 2,
    },
    {
      name: "Wed",
      id: 3,
    },
    {
      name: "Thu",
      id: 4,
    },
    {
      name: "Fri",
      id: 5,
    },
    {
      name: "Sat",
      id: 6,
    },
  ];
  return (
    <ConcurrencyContainer>
      <h4>Wiederholung?</h4>
      <div>
        {daysArray.map((day) => {
          return (
            <Day key={day.name}>
              <label htmlFor={day.name}>{day.name}</label>
              <input
                type="checkbox"
                name={day.name}
                id={day.name}
                onChange={(event) => {
                  setWeekday(day.id);
                }}
              />
            </Day>
          );
        })}
      </div>
    </ConcurrencyContainer>
  );
};

const ConcurrencyContainer = styled.div`
  color: var(--text-primary);

  div {
    display: flex;
  }
`;

const Day = styled.div`
  margin: auto 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    height: 30px;
    width: 30px;
  }
`;

WeekDaysSelector.propTypes = {
  weekDays: PropTypes.array,
};

export default WeekDaysSelector;
