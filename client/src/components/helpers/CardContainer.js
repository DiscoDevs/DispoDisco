import styled from "styled-components/macro";

const CardContainer = styled.div`
  position: relative;

  width: clamp(320px, 20vw, 400px);
  margin: auto;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  color: var(--text-primary);
  background: var(--gradient-normal);

  border-radius: var(--border-radius);
`;

export default CardContainer;
