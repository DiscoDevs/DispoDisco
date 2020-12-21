import { getEntryList, getSortedData, getSortedDataByQuery } from "./api";
import { getCurrentDateString } from "./date";
const today = getCurrentDateString();

const prefetchData = async ({ queryClient, companyName }) => {
  await queryClient.prefetchQuery(["tours", today], () =>
    getSortedDataByQuery({
      collectionName: "tours",
      type: "date",
      query: today,
      company: companyName,
    })
  );
  await queryClient.prefetchQuery("riders", () =>
    getEntryList({
      collectionName: "riders",
      key: "alias",
      company: companyName,
    })
  );
  await queryClient.prefetchQuery("customers", () =>
    getSortedData({
      collectionName: "customers",
      company: companyName,
    })
  );
};

export default prefetchData;
