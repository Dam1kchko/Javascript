async function patchItem(item, itemId) {
  fetch("http://localhost:8000/items/" + itemId, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
}

async function getItem(itemId) {
  return fetch("http://localhost:8000/items/" + itemId)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}

export { patchItem, getItem };
