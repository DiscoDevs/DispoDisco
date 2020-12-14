import styled from "styled-components/macro";

const CardContainer = styled.div`
  position: relative;

  width: clamp(300px, 10vw, 350px);
  margin: auto;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  color: var(--text-primary);
  background: var(--gradient-normal);

  border-radius: var(--border-radius);
`;

export default CardContainer;
