const { default: styled } = require("styled-components");

const ToursGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
`;

export default ToursGrid;
