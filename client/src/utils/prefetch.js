import { getEntryList, getSortedDataByQuery } from "./api";
import { getCurrentDateString } from "./date";
const today = getCurrentDateString();

const prefetchData = async (queryClient) => {
  await queryClient.prefetchQuery(
    ["tours", today],
    getSortedDataByQuery({
      collectionName: "tours",
      type: "date",
      query: today,
    })
  );
  await queryClient.prefetchQuery(["riders"], () =>
    getEntryList({
      collectionName: "riders",
      key: "alias",
    })
  );
};

export default prefetchData;
