import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Todo from "./Todo";

const TodoList = ({ checkboxes, onCheckboxesChange }) => {
  const [checkbox, setCheckbox] = useState("");

  const handleRemove = (entry) => {
    const filteredCheckboxes = checkboxes.filter((cb) => cb !== entry);
    onCheckboxesChange(filteredCheckboxes);
  };

  return (
    <div>
      {checkboxes && (
        <OutputContainer>
          {checkboxes.map((entry) => (
            <CheckboxEntry key={entry}>
              <Todo>{entry} </Todo>
              <button onClick={() => handleRemove(entry)}>X</button>
            </CheckboxEntry>
          ))}
        </OutputContainer>
      )}

      <InputContainer>
        <input type="checkbox" />
        <input
          type="text"
          value={checkbox}
          onChange={(event) => setCheckbox(event.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            onCheckboxesChange([...checkboxes, checkbox]);
            setCheckbox("");
          }}
        >
          Yes!
        </button>
      </InputContainer>
    </div>
  );
};

const OutputContainer = styled.div`
  margin-top: 0.25rem;
  margin-left: 0;
`;

const CheckboxEntry = styled.div`
  display: flex;
  button {
    margin-left: 1rem;
    padding: 0 1rem;
  }
`;

const InputContainer = styled.div`
  color: var(--text-primary);
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-right: 1rem;
  }
  input[type="text"] {
    height: 2rem;
    width: 100%;
  }
  button {
    height: 2rem;
    margin: auto 1rem;
    padding: 0 1rem;
  }
`;

TodoList.propTypes = {
  checkboxes: PropTypes.array,
  onCheckboxesChange: PropTypes.func,
};

export default TodoList;
