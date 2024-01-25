import { getProductById } from "./utility.js";

const url = "https://striveschool-api.herokuapp.com/api/product/";
let cart = [];

export const showCart = () => {
  if (localStorage.getItem("cart"))
    cart = JSON.parse(localStorage.getItem("cart"));
  document.querySelector(
    "#exampleModalLabel"
  ).innerHTML = `Cart (${cart.length})`;
  const body = document.querySelector(".modal-body");
  body.innerHTML = `<ul>`;
  cart.forEach((item) => {
    body.innerHTML += `<li>${item.name}</li>`;
  });
  body.innerHTML += `</ul>`;
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);
  const tot = document.querySelector("#tot");
  tot.innerHTML = "Total Amount: $ " + totalAmount.toFixed(2);
};

export const addCart = async (event) => {
  const id = event.target.id;
  const prod = await getProductById(url, id);
  cart.push(prod);
  localStorage.setItem("cart", JSON.stringify(cart));
  const add = event.target;
  add.classList.add("d-none");
  const rem = add.nextElementSibling;
  rem.classList.remove("d-none");
  let card = event.target.closest(".card");
  card.classList.add("added");
  const counter = document.querySelector("#cart_counter");
  if (cart.length > 0) counter.classList.remove("d-none");
  counter.innerHTML = `+${cart.length}`;
};

export const removeCart = (event) => {
  const id = event.target.id;
  cart = cart.filter((prod) => prod._id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  const rem = event.target;
  rem.classList.add("d-none");
  const add = rem.previousElementSibling;
  add.classList.remove("d-none");
  let card = event.target.closest(".card");
  card.classList.remove("added");
  const counter = document.querySelector("#cart_counter");
  counter.innerHTML = `+${cart.length}`;
  if (cart.length === 0) counter.classList.add("d-none");
};

export const empty = () => {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.classList.remove("added");
  });
  const adds = document.querySelectorAll(".add");
  adds.forEach((add) => {
    add.classList.remove("d-none");
  });
  const rems = document.querySelectorAll(".rem");
  rems.forEach((rem) => {
    rem.classList.add("d-none");
  });
  const counter = document.querySelector("#cart_counter");
  counter.innerHTML = `+${cart.length}`;
  counter.classList.add("d-none");
};

export const isBadge = () => {
  const counter = document.querySelector("#cart_counter");
  if (localStorage.getItem("cart"))
    cart = JSON.parse(localStorage.getItem("cart"));
  if (cart.length > 0) counter.classList.remove("d-none");
  counter.innerHTML = `+${cart.length}`;
};
