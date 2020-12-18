import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import { getRiderImage } from "../utils/api";
import stillLoading from "../assets/fastBiker.gif";

const types = {
  rider: {
    color: "var(--text-primary)",
    background: "transparent",
    padding: "0.2rem 0",
  },
  timer: {
    color: "var(--text-secondary)",
    background: "var(--text-primary)",
    padding: "0.2rem 0.8rem",
  },
  info: {
    color: "var(--text-secondary)",
    background: "var(--text-primary)",
    padding: "0.7rem 0.8rem",
  },
  remove: {
    color: "var(--text-secondary)",
    background: "var(--text-primary)",
    padding: "0.7rem 0.8rem",
  },
};

const CardButton = ({ type, label = "", status, onClick }) => {
  CardButton.propTypes = {
    type: PropTypes.oneOf(["timer", "info", "rider", "remove"]),

    label: PropTypes.node,
    status: PropTypes.string,

    onClick: PropTypes.func,
  };

  CardButton.defaultProps = {
    type: "info",
  };
  const [picture, setPicture] = useState(null);
  const [imgIsLoading, setImgIsLoading] = useState(+true);

  useEffect(() => {
    if (type === "rider" && label !== "") {
      const doFetch = async () => {
        const pic = await getRiderImage({ alias: label });
        setPicture(pic);
      };

      doFetch();
    }
  }, [label, type]);

  return (
    <ButtonElement type={type} status={status} onClick={onClick}>
      {type === "rider" && imgIsLoading === 1 && (
        <img src={stillLoading} alt="loading.." />
      )}
      {type === "rider" && label !== "" && (
        <img
          className="avatar"
          loaded={imgIsLoading}
          src={picture}
          alt={label}
          onLoad={() => setImgIsLoading(+false)}
        />
      )}
      {label}
    </ButtonElement>
  );
};

const statusColor = { open: "green", fetched: "orange", delivered: "grey" };

const ButtonElement = styled.div`
  padding: ${(props) => types[props.type].padding};

  height: ${(props) =>
    props.type === "rider" || props.type === "timer" ? "30px" : "40px"};
  width: ${(props) => (props.type === "rider" ? "100px" : "auto")};

  overflow: hidden;
  line-break: anywhere;
  line-height: ${(props) =>
    props.type === "rider" || props.type === "timer" ? "1.5" : "1.3"};
  font-size: clamp(0.1rem, 100%, 1rem);
  font-family: ${(props) => (props.type === "info" ? "Goldman" : "inherit")};
  font-weight: ${(props) =>
    props.type === "timer" || props.type === "rider" ? "normal" : "bold"};

  color: ${(props) => types[props.type].color || types.default.color};

  background-color: ${(props) =>
    statusColor[props.status] ||
    types[props.type].background ||
    types.default.background};

  ${(props) => props.type === "timer" && "justify-self: center;"}

  border-radius: var(--border-radius);
  box-shadow: ${(props) =>
    props.type === "timer"
      ? "var(--insetShadow)"
      : props.type === "info"
      ? "var(--shadow)"
      : "none"};

  > img {
    height: 25px;
    width: 25px;
  }
  > img.avatar {
    display: ${(props) => (props.loaded === 1 ? "none" : "inline")};
  }
`;

export default CardButton;
