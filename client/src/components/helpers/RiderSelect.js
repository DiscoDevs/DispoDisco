import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { getEntryList } from "../../utils/api";
import CardGrid from "./CardGrid";

const RiderSelect = () => {
  const [riders, setRiders] = useState([]);

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
        <Rider key={item._id} onClick={() => setRiders(item)}>
          <img
            src="https://robohash.org/35adfadfadsf3091.pngsize=75x75?set=set5&size=100x100"
            alt={item.alias}
          />
          <span>{item.alias}</span>
        </Rider>
      ))}
    </RiderGrid>
  );
};

export default RiderSelect;
const RiderGrid = styled(CardGrid)`
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  max-width: 400px;
`;

const Rider = styled.span`
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 30px;
  }
`;
