import { getProductById } from "./utility.js";

const url = "https://striveschool-api.herokuapp.com/api/product/";
let cart = [];

export const showCart = () => {
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
  const add = event.target;
  add.classList.add("d-none");
  const rem = add.nextElementSibling;
  rem.classList.remove("d-none");
  let card = event.target.closest(".card");
  card.classList.add("added");
};

export const removeCart = (event) => {
  const id = event.target.id;
  cart = cart.filter((prod) => prod._id !== id);
  const rem = event.target;
  rem.classList.add("d-none");
  const add = rem.previousElementSibling;
  add.classList.remove("d-none");
  let card = event.target.closest(".card");
  card.classList.remove("added");
};

export const empty = () => {
  cart=[];
  showCart();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card)=>{card.classList.remove("added");});
  const adds = document.querySelectorAll(".add");
  adds.forEach((add)=>{add.classList.remove("d-none");});
  const rems = document.querySelectorAll(".rem");
  rems.forEach((rem)=>{rem.classList.add("d-none");});
};