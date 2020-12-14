import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CardButton from "./CardButton";
import { useHistory } from "react-router-dom";
import SettingsImg from "../assets/settingsIcon.svg";
import { deleteData } from "../utils/api";

const CardRider = ({
  name,
  alias,
  dateOfBirth,
  phone,
  picture,
  color,
  id,
  info = true,
  settings = false,
  removeButton = false,
}) => {
  const history = useHistory();
  const dateOfBirthOrdered = new Date(dateOfBirth).toLocaleDateString("de-DE");
  return (
    <CardContainer color={color}>
      <div>
        <h3>{alias}</h3>
        <p>{name}</p>
      </div>
      <img src={picture} alt="Profilbild" />
      <InfoContainer>
        <div>
          {dateOfBirth && <p>{dateOfBirthOrdered}</p>}
          <b>📞{phone}</b>
        </div>
        {settings && (
          <SettingsIcon
            src={SettingsImg}
            alt="Fahrer ändern"
            onClick={() => {
              history.push(`/riders/${id}`);
            }}
          />
        )}
        {info && (
          <CardButton
            type="info"
            label="Info"
            onClick={() => {
              history.push(`/riders/${id}`);
            }}
          />
        )}
        {removeButton && (
          <CardButton
            type="remove"
            label="X"
            onClick={() => {
              deleteData({
                collectionName: "riders",
                id,
              });
              history.goBack();
            }}
          />
        )}
      </InfoContainer>
    </CardContainer>
  );
};

// !Verkürzbar ??
CardRider.propTypes = {
  name: PropTypes.string,
  alias: PropTypes.string,
  id: PropTypes.string,
  dateOfBirth: PropTypes.string,
  phone: PropTypes.string,
  picture: PropTypes.string,
  color: PropTypes.string,
  info: PropTypes.string,
  settings: PropTypes.string,
  removeButton: PropTypes.string,
};

export default CardRider;

const CardContainer = styled.div`
  position: relative;
  min-width: 300px;
  max-width: 350px;
  margin: auto;
  padding: 1rem;
  text-align: center;
  font-weight: bold;
  color: var(--text-primary);
  background: var(--gradient-normal);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  border-radius: var(--border-radius);

  > img {
    height: 75px;
    width: 75px;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  bottom: 1rem;
  left: 0;
  padding: 1rem 0 0.2rem;
`;

const SettingsIcon = styled.img`
  height: 30px;
  margin: auto;
`;
