import { React, ReactDOM } from "../utils/reactUtils";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Input } from "semantic-ui-react";
import { inStockActions } from "../store/InStocks";
import { searchActions } from "../store/searchText";

const SearchSection = () => {
  const dispatch = useDispatch();
  const inStockOn = useSelector((state) => state.inStocks.isInStocksOn);

  const toggleInStocks = () => {
    dispatch(inStockActions.toggle());
  };

  return (
    <div>
      <h4>Search</h4>
      <Input
        onChange={(e) => {
          dispatch(searchActions.adjust(e.target.value));
        }}
        type="text"
        style={{ display: "block", marginBottom: "15px" }}
      />
      <Checkbox
        checked={inStockOn}
        onChange={toggleInStocks}
        label="Only show those in stock"
      ></Checkbox>
    </div>
  );
};

export default SearchSection;
