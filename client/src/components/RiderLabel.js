import React from "react";
import PropTypes from "prop-types";
import { getEntryList } from "../utils/api";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useUsers } from "../context/user";

const RiderLabel = ({ riderName }) => {
  RiderLabel.propTypes = {
    riderName: PropTypes.string,
  };
  const { company } = useUsers();
  const { isLoading, isError, data, error } = useQuery("riders", () =>
    getEntryList({
      collectionName: "riders",
      key: "alias",
      company: company.name,
    })
  );
  const riderImg = data?.filter((rider) => rider.alias === riderName)[0]
    ?.picture;
  return (
    <RiderWrapper>
      {isLoading && <p>loading...</p>}
      {isError && <p>{error}</p>}
      {data && riderImg && (
        <>
          <img className="avatar" src={riderImg} alt={riderName} />
          <span>{riderName}</span>
        </>
      )}
      {data && !riderImg && <span>frei</span>}
    </RiderWrapper>
  );
};

const RiderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  > img {
    height: 25px;
    width: 25px;
  }
  > img.avatar {
    display: "inline";
  }
  span {
    pointer-events: none;
    line-height: 1;
  }
`;
export default RiderLabel;
