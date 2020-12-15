import React from "react";
import styled from "styled-components/macro";
import PropTypes from "prop-types";
import MirrorBall from "../assets/ddLogoDark.svg";
import Backward from "../assets/back.svg";
import { useHistory } from "react-router-dom";
import { getCurrentDateShort } from "../utils/date";

const date = getCurrentDateShort();
const Header = ({ title, children }) => {
  const history = useHistory();
  return (
    <HeaderElement title={title}>
      <Top>
        <img src={Backward} alt={"backward"} onClick={() => history.goBack()} />
        <HeaderText>Tour</HeaderText>
        <Logo
          src={MirrorBall}
          alt={"Logo"}
          onClick={() => history.push("/menu")}
        />
        <HeaderText>{date}</HeaderText>
      </Top>
      {title && <Title>{title}</Title>}
      {children && <Children>{children}</Children>}
    </HeaderElement>
  );
};

const HeaderElement = styled.header`
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  position: fixed;
  top: 0;
  padding: 1rem 1rem 0.5rem;
  min-height: 65px;
  background-color: var(--text-secondary);
  color: var(--text-primary);
  box-shadow: 0 3px 6px var(--cargo);
  border-radius: 0 0 10px 10px;
  > :not(:first-child) {
    padding-top: 1rem;
    display: flex;
    justify-content: ${(props) => (props.title ? "center" : "space-between")};
  }
`;
const Top = styled.div`
  max-width: 100vw;
  overflow: hidden;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const HeaderText = styled.h2`
  font-size: clamp(1.7rem, 8vw, 3.5rem);
  font-weight: 400;
`;
const Logo = styled.img`
  height: clamp(56px, 10vw, 100px);
  margin-bottom: 1rem;
  filter: drop-shadow(0px 3px 6px var(--cargo));
`;
const Title = styled.h1`
  text-align: center;
  font-size: clamp(1.7rem, 5vw, 3rem);
`;
const Children = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
`;
Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Header;
