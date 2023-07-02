import StockRow from "../components/StockRow";
import { useSelector } from "react-redux";
import { React, ReactDOM } from "./reactUtils";
import { isEmptyString } from "./utils";

const filterSetter = () => {
  const searchText = useSelector((state) => state.searchText.searchValue);
  const isStockOnly = useSelector((state) => state.inStocks.isInStocksOn);

  const emptySearch = !isEmptyString(searchText);
  if (isStockOnly) {
    if (emptySearch) {
      return "by stocks and search value";
    } else {
      return "by in stocks only";
    }
  } else if (emptySearch) {
    if (!isStockOnly) {
      return "by search value";
    }
  }
};

const stockFilter = () => {
  const condition = filterSetter();
  const stocksList = useSelector((state) => state.stockList);
  const searchText = useSelector((state) => state.searchText.searchValue);
  switch (condition) {
    case "by stocks and search value":
      return stocksList.filter(
        (stock) =>
          stock.name.toLowerCase().includes(searchText.toLowerCase()) &&
          stock.inStock === true
      );
    case "by search value":
      return stocksList.filter((stock) =>
        stock.name.toLowerCase().includes(searchText.toLowerCase())
      );
    case "by in stocks only":
      return stocksList.filter((stock) => stock.inStock === true);
    default:
      return stocksList;
  }
};

const renderStockList = (condition) => {
  let displayStockList = stockFilter(condition);
  return displayStockList.map((stock) => {
    return <StockRow stock={stock} />;
  });
};

export default renderStockList;
