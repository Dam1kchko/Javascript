import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          // error coming back from server
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        const rarityOrder = { Epic: 0, Legendary: 1, Relic: 2 };
        const filteredData = data.sort(
          (a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity]
        );
        setIsPending(false);
        setData(filteredData);
        setError(null);
      })
      .catch((err) => {
        // auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
