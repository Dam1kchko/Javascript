import { isEmptyString } from "../utils/utils";
import { React, ReactDOM } from "../utils/reactUtils";
import { Table } from "semantic-ui-react";
import { useSelector } from "react-redux";
import renderStockList from "../utils/stockUtils";

const IronStorelist = () => {
  const isStockOnly = useSelector((state) => state.inStocks.isInStocksOn);
  const searchText = useSelector((state) => state.searchText.searchValue);

  return (
    <Table
      textAlign="center"
      celled
      style={{ width: "50%", margin: "20px auto" }}
    >
      <Table.Header>
        <Table.Row color="grey">
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {isEmptyString(searchText)
          ? isStockOnly
            ? renderStockList("available")
            : renderStockList()
          : renderStockList("filtered")}
      </Table.Body>
    </Table>
  );
};

export default IronStorelist;
