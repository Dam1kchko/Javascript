import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error("Problem with fetching...");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [url]);

  return { data, error };
};

export default useFetch;
