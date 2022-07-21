const tickets = [
  { name: "Prize 1", ammount: 500 },
  { name: "Prize 2", ammount: 250 },
  { name: "Prize 3", ammount: 50 },
];

let menu = document.querySelectorAll(".ticket");
let buttons = document.querySelectorAll("button");

console.log("Da");
let addEvents = () => {
  for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", () => {
      console.log(tickets[i]);
    });
  }

  buttons.forEach((element) => {
    element.addEventListener("click", () => {
      console.log(`{action: click, button: ${element.innerText}}`);
    });
  });
};

addEvents();
