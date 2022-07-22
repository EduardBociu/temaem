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
let ticketsParent = document.querySelector("section.menu");

let renderTickets = () => {
  for (let i = 0; i < ticketsData.length; i++) {
    let ticket = document.createElement("div");
    ticket.classList.add("ticket", `op${i + 1}`);
    ticketsParent.append(ticket);

    let ticketMask = document.createElement("div");
    ticketMask.classList.add("ticket_mask");
    ticket.append(ticketMask);

    let idOut = document.createElement("h2");
    idOut.classList.add("id");
    idOut.innerText = ticketsData[i].id;
    ticket.append(idOut);

    let priceBar = document.createElement("div");
    priceBar.classList.add("price_bar");
    ticket.append(priceBar);

    let priceProgress = document.createElement("div");
    priceProgress.classList.add("price_progress");
    priceBar.append(priceProgress);

    let priceOut = document.createElement("h1");
    priceOut.classList.add("price");
    priceOut.innerText = `${ticketsData[i].price}€`;
    ticket.append(priceOut);

    let ticketText = document.createElement("h3");
    ticketText.classList.add("text");
    ticketText.innerText = `Ticket`;
    ticket.append(ticketText);
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
