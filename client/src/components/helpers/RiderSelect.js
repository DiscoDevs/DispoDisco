import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { getEntryList } from "../../utils/api";
import CardGrid from "./CardGrid";
import PropTypes from "prop-types";

const RiderSelect = ({ task, onRiderChange }) => {
  RiderSelect.propTypes = {
    task: PropTypes.object,
    onRiderChange: PropTypes.func,
  };
  const [riders, setRiders] = useState([]);
  const [activeAlias, setActiveAlias] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      const list = await getEntryList({
        collectionName: "riders",
        key: "alias",
      });
      setRiders(list);
    };
    fetchList();
  }, []);

  return (
    <RiderGrid>
      {riders.map((item) => (
        <Rider
          key={item._id}
          selected={activeAlias === item.alias}
          onClick={() => {
            setActiveAlias(item.alias);
            onRiderChange({ ...task, assignment: item.alias });
          }}
        >
          <img src={item.picture} alt={item.alias} />
          <span>{item.alias}</span>
        </Rider>
      ))}
    </RiderGrid>
  );
};

export default RiderSelect;
const RiderGrid = styled(CardGrid)`
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  max-width: 500px;
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