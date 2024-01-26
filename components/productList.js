import { getCard, getCardAction } from "./card.js";
import { toggleLoader } from "../index.js";

export const showProducts = (products) => {
  const actions = document.querySelector("#actions_cont");
  actions.classList.add("d-none");
  const prods = document.querySelector("#produtct_list");
  //prods.classList.remove("d-none");
  products.map((prod) => {
    prods.innerHTML += getCard(prod);
  });
};

export const showActions = (products) => {
  const prods = document.querySelector("#produtct_list");
  prods.classList.add("d-none");
  const actionsCont = document.querySelector("#actions_cont");
  const loader = document.querySelector(".loader");
  if (loader.classList.contains("d-none")) {
    actionsCont.classList.remove("d-none");
  }
  toggleLoader("#actions_cont");
  toggleLoader("#actions_cont");
  const actions = document.querySelector("#produtct_actions");
  actions.innerHTML = "";
  products.map((prod) => {
    actions.innerHTML += getCardAction(prod);
  });
};
