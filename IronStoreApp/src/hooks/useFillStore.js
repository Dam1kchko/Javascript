import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useFetch from "./useFetch";
import { stocksActions } from "../store/stocks";

const useFillStore = () => {
  const dispatch = useDispatch();
  const { data: stocksList, error } = useFetch(
    "https://raw.githubusercontent.com/ironhack-labs/lab-thinking-in-react/master/src/data.json"
  );
  useEffect(() => {
    if (stocksList) {
      dispatch(stocksActions.fillStockList(stocksList));
    }
  }, [stocksList, dispatch]);

  return stocksList;
};

export default useFillStore;
