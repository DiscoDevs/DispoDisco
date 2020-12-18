import { useQuery } from "react-query";
import { getSortedDataByQuery } from "../utils/api";
import useBroadcastUpdate from "./useBroadcastUpdate";

const useBroadcastOrQuery = ({ endpoint, today, option = "today" }) => {
  const broadcastedTours = useBroadcastUpdate(`/api/${endpoint}`);

  const { isLoading, isError, data, error, refetch } = useQuery(
    [endpoint, option],
    () =>
      getSortedDataByQuery({
        collectionName: endpoint,
        type: "date",
        query: today,
      })
  );
  console.log({ data }, { broadcastedTours });
  if (data?.length <= broadcastedTours?.length) {
    return { data, isLoading, isError, error, refetch };
  }
  return data;
};

export default useBroadcastOrQuery;
