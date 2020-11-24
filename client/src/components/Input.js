import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";

export function Input({ placeholder, type }) {
  const Component = styled.input`
    padding: 0.5rem 1rem;
    ::placeholder {
      font-style: italic;
    }
  `;

  return (
    <form>
      <Component type={type} placeholder={placeholder} />
    </form>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
};
