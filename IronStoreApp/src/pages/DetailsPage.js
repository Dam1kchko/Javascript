import { React, ReactDOM } from "../utils/reactUtils";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import StockCard from "../components/StockCard";

const DetailsPage = () => {
  const { id } = useParams();
  const stocksList = useSelector((state) => state.stockList);

  return (
    <>{<StockCard stock={stocksList.find((stock) => stock.id === id)} />}</>
  );
};

export default DetailsPage;
