import React from "react";
import styled from "styled-components/macro";
import MirrorBallSrc from "../assets/discoBall.gif";
import LogoImg from "../assets/ddLogoDark.svg";

const HeaderHome = () => (
  <>
    <HeaderElement>
      <First>Disp</First>
      <MirrorBall src={MirrorBallSrc} alt={"MirrorBall"} />
      <Second>Disco</Second>
    </HeaderElement>
    <Logo src={LogoImg} alt={"Logo"} />
  </>
);

const HeaderElement = styled.header`
  margin: 1rem auto;
  display: flex;
  padding: 1rem auto;
  color: var(--text-primary);
`;

const First = styled.h2`
  font-size: clamp(2rem, 10vw, 4rem);
`;

const Second = styled(First)``;

const MirrorBall = styled.img`
  height: clamp(70px, 30vw, 100px);
  padding: 0 1rem;
  margin-top: -1.5rem;
  filter: drop-shadow(0px 3px 6px var(--text-secondary));
`;
const Logo = styled(MirrorBall)`
  margin-top: 1rem;
  height: clamp(100px, 30vw, 150px);
`;
export default HeaderHome;
