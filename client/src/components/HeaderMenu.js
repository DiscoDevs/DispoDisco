import React from "react";
import styled from "styled-components/macro";
import MirrorBall from "../assets/mirrorBall.svg";

const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  justify-content: center
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
// const Titel = styled.h1`
//   font-size: 3.3rem;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-end;
//   line-height: 1;
//   & > :nth-child(1) {
//     position: relative;
//   }
//   & > :nth-child(2) {
//     padding-left: 5rem;
//   }
// `;

const Logo = styled.img`
  margin-top: -50px;
  filter: drop-shadow(0px 3px 6px var(--text-secondary));
`;
export const HeaderMenu = () => (
  <HeaderElement>
    <First>Disp</First>
    <Logo src={MirrorBall} alt={"Logo"} />
    <Second>Disco</Second>
  </HeaderElement>
);
