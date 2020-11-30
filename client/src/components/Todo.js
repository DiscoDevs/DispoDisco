import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TodoElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    height: 2rem;
    margin-right: 1rem;
  }
`;

export default function Todo({ children }) {
  return (
    <TodoElement>
      <input type="checkbox" />
      <p>{children}</p>
    </TodoElement>
  );
}
Todo.propTypes = {
  children: PropTypes.node,
};
