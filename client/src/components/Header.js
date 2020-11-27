import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import MirrorBall from "../assets/mirrorBall.svg";
import Backward from "../assets/back.svg";
import { useHistory } from "react-router-dom";

const HeaderElement = styled.header`
  top: 0;
  padding: 1rem 1rem 0.5rem;
  min-height: 65px;
  width: 100%;
  position: fixed;
  z-index: 10;
  background-color: var(--text-secondary);
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  > :not(:first-child) {
    padding-top: 1rem;
    display: flex;
    justify-content: ${(props) => (props.title ? "center" : "space-between")};
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderText = styled.h2`
  font-size: clamp(1.7rem, 8vw, 5rem);
  font-weight: 400;
`;
const Logo = styled.img`
  height: clamp(56px, 10vw, 100px);
  margin-top: -1.5rem;
  filter: drop-shadow(0px 3px 6px var(--text-secondary));
`;
const Title = styled.h2`
  text-align: center;
  font-size: clamp(1.7rem, 5vw, 5rem);
`;
const Children = styled.div`
  display: flex;
  justify-content: center;
`;
export const Header = ({ title, children }) => {
  const history = useHistory();
  return (
    <HeaderElement title={title}>
      <Top>
        <img
          src={Backward}
          alt={"backward"}
          onClick={() => history.push("/menu")}
        />
        <HeaderText>Tour</HeaderText>
        <Logo src={MirrorBall} alt={"Logo"} />
        <HeaderText>27.11.20</HeaderText>
      </Top>
      {title && <Title>{title}</Title>}
      {children && <Children>{children}</Children>}
    </HeaderElement>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
