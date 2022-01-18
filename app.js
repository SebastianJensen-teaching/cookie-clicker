let clicked = 50;
let clickPower = 1;
let inventory = [];

const clickerButton = document.querySelector(".clicker");
const textField = document.querySelector(".clickcount");

const inventoryList = document.querySelector(".inventory");
const broomButton = document.querySelector(".buy-broom");

clickerButton.addEventListener("click", () => {
  clicked += clickPower;
  updateInventory();
});

broomButton.addEventListener("click", () => {
  let hasBroom = false;
  inventory.forEach((item) => {
    if (item === "Broom") hasBroom = true;
  });
  if (clicked >= 50 && !hasBroom) {
    inventory.push("Broom");
    clicked -= 50;
    clickPower *= 2;
    broomButton.classList.add("out-of-stock");
    broomButton.disabled = true;
    updateInventory();
  }
});

function updateInventory() {
  textField.innerHTML = clicked;
  inventoryList.innerHTML = "";
  inventory.forEach((item) => {
    let newItem = document.createElement("li");
    newItem.innerHTML = item;
    inventoryList.append(newItem);
  });
}

setInterval()
