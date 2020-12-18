import { useEffect, useState } from "react";

const useBroadcastUpdate = (endpoint) => {
  const [latestUpdate, setLatestUpdate] = useState(null);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      console.warn("Service workers are not supported");
      return;
    }

    const handleMessage = async (event) => {
      if (event.data.meta === "workbox-broadcast-update") {
        const { cacheName, updatedURL } = event.data.payload;
        if (!updatedURL.endsWith(endpoint)) {
          return;
        }
        const cache = await caches.open(cacheName);
        const updatedResponse = await cache.match(updatedURL);
        if (updatedResponse) {
          const latestShorties = await updatedResponse.json();
          setLatestUpdate(latestShorties);
        }
      }
    };

    navigator.serviceWorker.addEventListener("message", handleMessage);

    return () => {
      navigator.serviceWorker.removeEventListener("message", handleMessage);
    };
  }, [endpoint]);
  console.log({ latestUpdate });
  return latestUpdate;
};

export default useBroadcastUpdate;
