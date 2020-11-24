import React from "react";
import styled from "styled-components/macro";

export function Input() {
  const Component = styled.input`
    padding: 0.5rem 1rem;
    ::placeholder {
      font-style: italic;
    }
  `;

  return (
    <form>
      <Component type="text" placeholder="placeholder" />
    </form>
  );
}
