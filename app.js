let clicked = 0;
let clickPower = 1;
let inventory = [];

const clickerButton = document.querySelector(".clicker");
const clickCounter = document.querySelector(".clickcount");
const inventoryList = document.querySelector(".inventory");

let powerups = [
  {
    id: "Broom",
    price: 10,
    multiplier: 2  
  },
  {
    id: "Hover",
    price: 100,
    multiplier: 5  
  },
  {
    id: "Ajax Power",
    price: 1000,
    multiplier: 10  
  },
];

clickerButton.addEventListener("click", () => {
  clicked += clickPower;
  updateInventory();
});

function generatePowerups() {
  let powerUpStore = document.querySelector(".powerup-store");
  powerups.forEach((powerup) => {
    let newDiv = document.createElement("div");
      let heading = document.createElement("h2");
        heading.innerHTML = powerup.id;
      newDiv.append(heading);
      let description = document.createElement("p");
        description.innerHTML = powerup.multiplier + "x click power, " + " costs " + powerup.price + " clicks";
      newDiv.append(description);
      let button = document.createElement("button");
        button.addEventListener("click", handleBuy);
        button.innerHTML = "Buy!";
        button.setAttribute("data-item", powerup.id);
      newDiv.append(button);
    powerUpStore.append(newDiv);
  });
}

function handleBuy(event) {
  // Get the "data-item" attribute from the button we clicked on and store it in theThingWeClickedOn:
  let theThingWeClickedOn = event.target.getAttribute("data-item");
  // Use theThingWeClickedOn to find the correct object in the powerup array:
  let thingToBuy = powerups.find(powerup => powerup.id === theThingWeClickedOn);

  // Now that we have the correct thing, we can check if we have enough clicks to buy it:
  if (clicked >= thingToBuy.price) {
    clicked -= thingToBuy.price;
    clickPower *= thingToBuy.multiplier;
    inventory.push(thingToBuy.id);
    event.target.disabled = true;
    updateInventory();
  }
}

function updateInventory() {
  clickCounter.innerHTML = clicked;
  inventoryList.innerHTML = "";
  inventory.forEach((item) => {
    let newItem = document.createElement("li");
    newItem.innerHTML = item;
    inventoryList.append(newItem);
  });
}

generatePowerups();
updateInventory();
