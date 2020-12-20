import React, { useState } from "react";
import styled from "styled-components/macro";
import { getEntryList } from "../../utils/api";
import CardGrid from "./CardGrid";
import PropTypes from "prop-types";
import { useQuery } from "react-query";

const RiderSelect = ({ onRiderChange }) => {
  RiderSelect.propTypes = {
    task: PropTypes.object,
    onRiderChange: PropTypes.func,
  };
  const [activeAlias, setActiveAlias] = useState(null);

  const { isLoading, isError, data, error } = useQuery(["riders"], () =>
    getEntryList({
      collectionName: "riders",
      // wurde das für was gebraucht?
      // key: "alias",
    })
  );

  return (
    <>
      <h3>Fahrer</h3>
      <RiderGrid>
        {isLoading && <p>loading...</p>}
        {isError && <p>{error}</p>}
        {data &&
          data
            .filter((item) => item.active)
            .map((item) => (
              <>
                {console.log(item)}
                <Rider
                  key={item._id}
                  selected={activeAlias === item.alias}
                  onClick={() => {
                    setActiveAlias(item.alias);
                    onRiderChange(item);
                  }}
                >
                  <img src={item.picture} alt={item.alias} />
                  <span>{item.alias}</span>
                </Rider>
              </>
            ))}
      </RiderGrid>
    </>
  );
};

export default RiderSelect;
const RiderGrid = styled(CardGrid)`
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  max-width: clamp(310px, 70vw, 500px);
  grid-gap: 0.5rem;
`;

const Rider = styled.div`
  margin: 0 1rem;
  padding: 5px;
  border: ${(props) => props.selected && "1px solid gold"};
  min-width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: grayscale(${(props) => (props.selected ? "0" : ".5")});
  transform: scale(${(props) => (props.selected ? "1.1" : "1")});
  background-color: var(--text-secondary30);
  border-radius: 3px;
  transition: all 0.3s ease-in-out;
  box-shadow: var(--shadow), 3px 0 6px rgba(100, 100, 100, 0.5);
  img {
    height: 30px;
  }
  span {
    white-space: nowrap;
  }
`;
