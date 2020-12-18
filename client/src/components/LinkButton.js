import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled(Link)`
  background: var(--gradient-menu);
  margin: auto;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-family: "Goldman";
  font-size: 2rem;
  color: var(--text-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  > :first-child {
    min-width: 35px;
    margin-right: 10px;
  }
`;
export default LinkButton;
