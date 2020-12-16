import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CardButton from "./CardButton";
import { useHistory } from "react-router-dom";
import SettingsImg from "../assets/settingsIcon.svg";
import stillLoading from "../assets/fastBiker.gif";
import { deleteData } from "../utils/api";
import CardContainer from "./helpers/CardContainer";

const CardRider = ({
  name,
  alias,
  dateOfBirth,
  phone,
  picture,
  color,
  handleClick,
  addRider = false,
  id,
  info = true,
  settings = false,
  removeButton = false,
}) => {
  CardRider.propTypes = {
    handleClick: PropTypes.func,
    removeButton: PropTypes.bool,
    addRider: PropTypes.bool,
    info: PropTypes.bool,
    settings: PropTypes.bool,
    name: PropTypes.string,
    alias: PropTypes.string,
    id: PropTypes.string,
    dateOfBirth: PropTypes.string,
    phone: PropTypes.string,
    picture: PropTypes.string,
    color: PropTypes.string,
  };

  const history = useHistory();
  const dateOfBirthOrdered = new Date(dateOfBirth).toLocaleDateString("de-DE");
  const [imgIsLoading, setImgIsLoading] = useState(+true);

  return (
    <RidersWrapper color={color}>
      <div>
        <h3>{alias}</h3>
        <p>{name}</p>
      </div>
      <AvatarContainer loaded={+imgIsLoading}>
        {imgIsLoading === 1 && <img src={stillLoading} alt="loading.." />}
        <img
          className="avatar"
          loaded={imgIsLoading}
          src={picture}
          alt="Profilbild"
          onLoad={() => setImgIsLoading(+false)}
        />
      </AvatarContainer>

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
        {addRider && (
          <CardButton
            type="info"
            label="change Avatar"
            onClick={() => {
              setImgIsLoading(+true);
              handleClick();
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
const AvatarContainer = styled.div`
  height: 90px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    border-radius: 50%;
    height: 75px;
    width: 75px;
  }
  > img.avatar {
    display: ${(props) => (props.loaded === 1 ? "none" : "block")};
  }
`;
const RidersWrapper = styled(CardContainer)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
