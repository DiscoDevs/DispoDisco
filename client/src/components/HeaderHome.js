import React from "react";
import styled from "styled-components/macro";
import MirrorBall from "../assets/mirrorBall.svg";

const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  color: var(--text-primary);
`;

const First = styled.h2`
  grid-area: first;
  font-size: 2.5rem;
`;

const Second = styled(First)`
  grid-area: second;
`;

const Logo = styled.img`
  margin-top: -50px;
  filter: drop-shadow(0px 3px 6px var(--text-secondary));
`;
const HeaderHome = () => (
  <HeaderElement>
    <First>Disp</First>
    <Logo src={MirrorBall} alt={"Logo"} />
    <Second>Disco</Second>
  </HeaderElement>
);

export default HeaderHome;
