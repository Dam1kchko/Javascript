import { React, ReactDOM } from "../utils/reactUtils";
import { Header, Segment } from "semantic-ui-react";

const StockCard = ({ stock }) => {
  return (
    <Segment textAlign="center">
      <Header>Name: {stock.name} </Header>
      <Header>ID: {stock.id} </Header>
      <Header>Category: {stock.category} </Header>
      <Header>Price: {stock.price} </Header>
      <Header>Availability: {"" + stock.inStock} </Header>
    </Segment>
  );
};

export default StockCard;
