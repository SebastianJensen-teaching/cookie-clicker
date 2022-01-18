let clicked = 0;
let clickPower = 1;
let inventory = [];

const clickerButton = document.querySelector(".clicker");
const textField = document.querySelector(".clickcount");

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
    newDiv.append(button);
    button.setAttribute("data-item", powerup.id);
    powerUpStore.append(newDiv);
  });
}

function handleBuy(event) {
  let theThingWeClickedOn = event.target.getAttribute("data-item");
  powerups.forEach((powerup) => {
    if (powerup.id === theThingWeClickedOn) {
      if (clicked >= powerup.price) {
        clicked -= powerup.price;
        clickPower += powerup.multiplier;
        inventory.push(powerup.id);
        event.target.disabled = true;
        updateInventory();
      }
    }
  })
}

function updateInventory() {
  textField.innerHTML = clicked;
  inventoryList.innerHTML = "";
  inventory.forEach((item) => {
    let newItem = document.createElement("li");
    newItem.innerHTML = item;
    inventoryList.append(newItem);
  });
}

generatePowerups();
updateInventory();
