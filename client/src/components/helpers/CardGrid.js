const { default: styled } = require("styled-components");

const CardGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(317px, 1fr));
  align-items: center;
  justify-items: center;
  max-width: 1400px;
  margin: auto;
  padding: 0 0.5rem;
`;

export default CardGrid;
