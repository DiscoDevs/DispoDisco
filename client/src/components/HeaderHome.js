import React from "react";
import styled from "styled-components/macro";
import MirrorBallSrc from "../assets/discoBall.gif";

const HeaderHome = () => (
  <>
    <HeaderElement>
      <First>
        Disp
        <MirrorBall src={MirrorBallSrc} alt={"MirrorBall"} />
      </First>
      <Second>Disco</Second>
    </HeaderElement>
  </>
);

const HeaderElement = styled.header`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  padding: 1rem auto;
  color: var(--text-primary);
`;

const First = styled.h2`
  align-self: flex-end;
  font-size: clamp(2rem, 10vw, 4rem);
`;

const Second = styled(First)``;

const MirrorBall = styled.img`
  height: clamp(70px, 30vw, 100px);
  padding: 0 1rem;
  margin-top: -1.5rem;
  filter: drop-shadow(0px 3px 6px var(--text-secondary));
`;
export default HeaderHome;
