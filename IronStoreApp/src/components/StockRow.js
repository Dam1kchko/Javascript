import { React, ReactDOM } from "../utils/reactUtils";
import { Table } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

const StockRow = ({ stock }) => {
  let navigate = useNavigate();
  const redirectPage = () => {
    navigate("/" + stock.id);
  };
  return (
    <Table.Row className="hoverable-row" key={stock.id} onClick={redirectPage}>
      <Table.Cell>{stock.name}</Table.Cell>
      <Table.Cell>{stock.price}</Table.Cell>
    </Table.Row>
  );
};

export default StockRow;
