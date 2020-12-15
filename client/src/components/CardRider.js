import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CardButton from "./CardButton";
import { useHistory } from "react-router-dom";
import SettingsImg from "../assets/settingsIcon.svg";
import { deleteData } from "../utils/api";
import CardContainer from "./helpers/CardContainer";
import { useQuery } from "react-query";

const CardRider = ({
  name,
  alias,
  dateOfBirth,
  phone,
  onChange,
  color,
  id,
  info = true,
  settings = false,
  removeButton = false,
}) => {
  CardRider.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
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
  const dateOfBirthOrdered = new Date(dateOfBirth).toLocaleDateString("de-DE");

  const history = useHistory();

  const { data, error, isLoading, isError, refetch } = useQuery(
    "avatar",
    () => {
      const url = roboFullUrl();
      return <img src={url} alt="Avatar" onClick={refetch} />;
    }
  );
  return (
    <RidersWrapper onChange={onChange} color={color}>
      <div>
        <h3>{alias}</h3>
        <p>{name}</p>
      </div>
      {console.log({ isLoading, isError, data })}
      {isLoading && <p>Loading...</p>}
      {isError && <span>Error: {error.message}</span>}
      {!isError && !isLoading && data}

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
              history.push(`/riders/${id}/edit`);
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
    </RidersWrapper>
  );
};

export default CardRider;
const roboRoot = `https://robohash.org/`;
const roboParams = `?set=set5&size=100x100`;
const avatarSize = `size=100x100`;
const avatarFile = `.png`;
const hash = () => Math.floor(Math.random() * 1000000).toString();
const roboFullUrl = () =>
  `${roboRoot}${hash()}${avatarFile}${avatarSize}${roboParams}`;

const RidersWrapper = styled(CardContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

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
