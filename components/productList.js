import { getCard, getCardAction } from "./card.js";

export const showProducts = (products)=>{
    const actions = document.querySelector("#produtct_actions");
    actions.classList.add("d-none");
    const prods = document.querySelector("#produtct_list");
    prods.classList.remove("d-none");
    products.map((prod)=>{prods.innerHTML+=getCard(prod)});
}

export const showActions = (products)=>{
    const prods = document.querySelector("#produtct_list");
    prods.classList.add("d-none");
    const actions = document.querySelector("#produtct_actions");
    actions.classList.remove("d-none");
    products.map((prod)=>{actions.innerHTML+=getCardAction(prod)});
}