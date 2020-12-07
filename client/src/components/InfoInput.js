import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TodoList from "./TodoList";

const InfoInput = ({
  checkboxes,
  info,
  onCheckboxesChange,
  onInfoChange,
  task,
}) => {
  return (
    <Details>
      <summary>Info & Todo-Liste</summary>

      <h3>Infos</h3>
      <textarea
        name="InfoInput"
        cols="30"
        rows="10"
        value={info}
        onChange={onInfoChange}
      />

      <h3>Todo-Liste</h3>

      <TodoList
        task={task}
        checkboxes={checkboxes}
        onCheckboxesChange={onCheckboxesChange}
      />
    </Details>
  );
};

const Details = styled.details`
  color: var(--text-primary);
  text-align: left;
  margin: 1rem 0;
  width: 100%;
  textarea {
    width: 100%;
  }
  h3 {
    margin-top: 1rem;
  }
`;

InfoInput.propTypes = {
  checkboxes: PropTypes.array,
  info: PropTypes.string,
  task: PropTypes.object,
  onCheckboxesChange: PropTypes.func,
  onInfoChange: PropTypes.func,
};

export default InfoInput;
