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

  export const addCart = async(event) => {
    const id=event.target.id;
    const indexCart = cart.findIndex((item) => item.asin === id);
    if (indexCart === -1) {
      const prod = await getProductById(url, id);
      cart.push(prod);
      const add = event.target;
      add.classList.add("d-none");
      const rem = add.nextElementSibling;
      rem.classList.remove("d-none");
    }
    // let listItem = event.target.closest(".list-group-item");
    // let listGroup = listItem.parentNode;
    // let cardDiv = listGroup.parentNode;
    // cardDiv.classList.add("added");
    //cartQt.innerHTML = "(" + cart.length + ")";
  };