import { getCard } from "./card.js";

export const showProducts = (products)=>{
    const prods = document.querySelector("#produtct_list");
    products.map((prod)=>{prods.innerHTML+=getCard(prod)});
    
}