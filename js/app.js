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

let tickets = [];
let ticketButtons = document.querySelectorAll("div.ticket");
let buttons = document.querySelectorAll("button");

class Ticket {
  constructor(id, price) {
    this.id = id;
    this.price = price;
  }

  addElement(element) {
    this.element = element;
  }

  Log() {
    console.log(`Value: ${this.price}\nId: ${this.id}`);
  }
}

class Button {
  constructor(element) {
    this.action = "click";
    this.id = element.innerText;
  }

  Log() {
    console.log(`Action: ${this.action}, button: ${this.id}`);
  }
}

const addEvents = () => {
  for (let i = 0; i < ticketButtons.length; i++) {
    let ticket = new Ticket(ticketsData[i].id, ticketsData[i].price);
    ticket.addElement(ticketButtons[i]);
    tickets.push(ticket);
    ticketButtons[i].addEventListener("click", ticket.Log());
  }

  buttons.forEach((element) => {
    let button = new Button(element);
    element.addEventListener("click", button.Log());
  });
};
