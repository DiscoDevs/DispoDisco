const { default: styled } = require("styled-components");

const CardGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  justify-items: center;
  padding: 0 2rem;
  max-width: 1000px;
  margin: auto;
`;

export default CardGrid;
