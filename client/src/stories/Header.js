import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import MirrorBall from "./assets/mirrorBall.svg";
import FrontCasset from "./assets/frontCassett.svg";

const HeaderElement = styled.header`
  width: 100vw;
  height: 33vh;
  max-height: 234px;
  background-color: var(--header-red);
  color: var(--white);

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". . "
    "title .";
  & > h1 {
    margin-top: 5rem;
  }
`;
const Titel = styled.h1`
  font-size: 3.3rem;
  grid-area: title;
  line-height: 1;

  & > :nth-child(1) {
    position: relative;
    margin-left: 1rem;
  }
  & > :nth-child(2) {
    margin-left: 80px;
  }
`;

const Logo = styled.img`
  position: absolute;
  left: 40%;
  height: 15vh;
  margin-top: -20px;
  filter: drop-shadow(0px 3px 6px var(--black));
`;
const O = styled.img`
  position: absolute;
  height: 30px;
  bottom: 6px;
`;

export const Header = ({ menu }) => (
  <HeaderElement>
    <Titel>
      <p>
        Disp
        <O src={FrontCasset} alt={"o"} />
      </p>
      <p>Disco</p>
    </Titel>
    <Logo src={MirrorBall} alt={"Logo"} />
  </HeaderElement>
);

Header.propTypes = {
  menu: PropTypes.shape(Boolean),
};

Header.defaultProps = {
  menu: false,
};
