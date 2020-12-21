import styled from "styled-components/macro";

const CardContainer = styled.div`
  position: relative;

  width: 100%;
  width: clamp(320px, 20vw, 336px);
  margin: auto 0.5rem;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  color: var(--text-primary);
  background: var(--gradient-normal);

  border-radius: var(--border-radius);
`;

export default CardContainer;
