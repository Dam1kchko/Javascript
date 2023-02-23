import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: items,
  } = useFetch("http://localhost:8000/items");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading...</div>}
      {items && <ItemList items={items} />}
    </div>
  );
};

export default Home;
