import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { getEntryList } from "../../utils/api";
import CardGrid from "./CardGrid";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import { useUsers } from "../../context/user";

const RiderSelect = ({
  onRiderChange,
  filtered = false,
  handleRefetch = () => {},
  task,
}) => {
  RiderSelect.propTypes = {
    task: PropTypes.object,
    filtered: PropTypes.bool,
    onRiderChange: PropTypes.func,
    handleRefetch: PropTypes.func,
  };

  const { company } = useUsers();
  const { isLoading, isError, data, error, refetch } = useQuery("riders", () =>
    getEntryList({
      collectionName: "riders",
      key: "alias",
      company: company.name,
    })
  );
  const [activeAlias, setActiveAlias] = useState(data?.assignment || null);
  useEffect(() => {
    handleRefetch(refetch);
  }, [refetch, handleRefetch]);

  useEffect(() => {
    if (task) {
      setActiveAlias(task.assignment);
    }
  }, [task]);
  return (
    <>
      {filtered && <h3>Fahrer</h3>}
      <RiderGrid>
        {isLoading && <p>loading...</p>}
        {isError && <p>{error}</p>}
        {data &&
          !filtered &&
          data.map((item) => (
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
          ))}
        {data &&
          filtered &&
          data
            .filter((item) => item.active)
            .map((item) => (
              <Rider
                key={item._id}
                selected={activeAlias === item.alias}
                onClick={() => {
                  if (activeAlias === item.alias) {
                    setActiveAlias("frei");
                    onRiderChange("frei");
                  } else {
                    setActiveAlias(item.alias);
                    onRiderChange(item.alias);
                  }
                }}
              >
                <img src={item.picture} alt={item.alias} />
                <span>{item.alias}</span>
              </Rider>
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
