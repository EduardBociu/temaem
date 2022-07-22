const ticketsData = [
  {
    id: 1687512,
    price: 2,
  },
  {
    id: 238619,
    price: 5,
  },
  {
    id: 342620,
    price: 20,
  },
];

class Button {
  constructor(element) {
    this.action = "click";
    this.button = element.innerText;
  }

  Log() {
    console.warn(this);
  }
}

let ticketsDOM = document.querySelectorAll("div.ticket");
let buttons = document.querySelectorAll("button");

let renderTickets = () => {
  for (let i = 0; i < ticketsDOM.length; i++) {
    ticketsDOM[i].querySelector("h2").innerText = ticketsData[i].id;
    ticketsDOM[i].querySelector("h1").innerText = `${ticketsData[i].price}€`;
  }
};

renderTickets();

let ticketListeners = () => {
  for (let i = 0; i < ticketsDOM.length; i++) {
    ticketsDOM[i].addEventListener("click", () => {
      console.warn(`Value: ${ticketsData[i].price}\nId: ${ticketsData[i].id}`);
    });
  }
};

let buttonsListeners = () => {
  for (let i = 0; i < buttons.length; i++) {
    let button = new Button(buttons[i]);
    buttons[i].addEventListener("click", () => {
      button.Log();
    });
  }
};

buttonsListeners();
ticketListeners();
