/* eslint-disable no-undef */
import Epic from "./images/Epic.png";
import Legendary from "./images/Legendary.png";
import Relic from "./images/Relic.png";
import { patchItem, getItem } from "./asyncFunction";

const ItemList = ({ items }) => {
  let currItemImage;
  return (
    <div className="container">
      {items.map((item) => {
        if (item.rarity === "Epic") currItemImage = Epic;
        else if (item.rarity === "Legendary") currItemImage = Legendary;
        else if (item.rarity === "Relic") currItemImage = Relic;
        return (
          <div className="card" key={item.id} data-id={item.id}>
            <img src={currItemImage} alt="Fail" />
            <h3>{item.name}</h3>
            <h4>
              Current Quantity: <span>{item.quantity} </span>
            </h4>
            <br />
            <span>{item.favorite_NPC}</span>
            <div className="buttons">
              <button
                className="button"
                onClick={async (event) => {
                  const parentDiv = event.target.parentNode.parentNode;
                  const itemId = parentDiv.getAttribute("data-id");
                  let item = await getItem(itemId);
                  item.quantity++;
                  parentDiv.getElementsByTagName("span")[0].innerHTML =
                    item.quantity;
                  await patchItem(item, itemId);
                  console.log(item.quantity);
                }}
              >
                Add 1
              </button>
              <button
                className="button"
                onClick={async (event) => {
                  const parentDiv = event.target.parentNode.parentNode;
                  const itemId = parentDiv.getAttribute("data-id");
                  let item = await getItem(itemId);
                  if (item.quantity-- <= 0) item.quantity = 0;
                  else {
                    parentDiv.getElementsByTagName("span")[0].innerHTML =
                      item.quantity;
                    await patchItem(item, itemId);
                    console.log(item.quantity);
                  }
                }}
              >
                Use 1
              </button>
              <button
                className="button"
                onClick={async (event) => {
                  const parentDiv = event.target.parentNode.parentNode;
                  const itemId = parentDiv.getAttribute("data-id");
                  let item = await getItem(itemId);
                  item.quantity = 0;
                  parentDiv.getElementsByTagName("span")[0].innerHTML =
                    item.quantity;
                  await patchItem(item, itemId);
                  console.log(item.quantity);
                }}
              >
                All
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
/*
    {
      "id": 2,
      "name": "Prideholme Potato",
      "merchant": "Ben",
      "rarity": "Epic",
      "region": "Rethmaris",
      "favorite_NPC": "Prideholme Neria",
      "quantity": 0
    }
*/

/* 
<div class="card">
  <img src="image.jpg" alt="Image">
  <h2>Card Title</h2>
  <p>Card description goes here.</p>
  <div class="buttons">
    <button class="button">Button 1</button>
    <button class="button">Button 2</button>
    <button class="button">Button 3</button>
  </div>
</div>
*/
