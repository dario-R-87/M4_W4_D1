import { getCard, getCardAction } from "./card.js";

// const setInfoDelete = (event) => {
//   localStorage.setItem("currentId", event.target.id);
//   const deleteModal = document.querySelector("#deleteModal .modal-body");
//   deleteModal.innerHTML = event.target.id;
// };

// const addDeleteListener = () => {
//   const deleteBtns = document.querySelectorAll(".delete");
//   deleteBtns.forEach((delBtn) => {
//     delBtn.addEventListener("click", (event) => {
//       setInfoDelete(event);
//     });
//   });
// };

export const showProducts = (products) => {
  const actions = document.querySelector("#produtct_actions");
  actions.classList.add("d-none");
  const prods = document.querySelector("#produtct_list");
  prods.classList.remove("d-none");
  products.map((prod) => {
    prods.innerHTML += getCard(prod);
  });
};

export const showActions = (products) => {
  const prods = document.querySelector("#produtct_list");
  prods.classList.add("d-none");
  const actions = document.querySelector("#produtct_actions");
  actions.classList.remove("d-none");
  products.map((prod) => {
    actions.innerHTML += getCardAction(prod);
  });
};
