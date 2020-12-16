import styled from "styled-components/macro";

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  padding: 0 1rem;
  > div {
    margin-bottom: 2rem;
  }
`;
const Wrapper = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  height: 1px;
  width: 100%;
  margin: auto;
  padding-top: clamp(11rem, 25vw, 230px);
`;
export default Wrapper;
