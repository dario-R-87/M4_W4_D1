import * as utility from "./components/utility.js";
import * as products from "./components/productList.js";
import * as cartFunc from "./components/cart.js";

let productList = [];
const url = "https://striveschool-api.herokuapp.com/api/product/";
// const productList = [
//   {
//     name: "Smartphone XYZ",
//     description: "Powerful smartphone with advanced features.",
//     brand: "TechMaster",
//     imageUrl: "https://placehold.co/200x320",
//     price: 599.99,
//   },
//   {
//     name: "Laptop Pro",
//     description: "High-performance laptop for professionals.",
//     brand: "ElectroTech",
//     imageUrl: "https://placehold.co/200x320",
//     price: 1299.99,
//   },
//   {
//     name: "Coffee Maker Deluxe",
//     description: "State-of-the-art coffee maker for coffee enthusiasts.",
//     brand: "BrewMaster",
//     imageUrl: "https://placehold.co/200x320",
//     price: 149.99,
//   },
//   {
//     name: "Fitness Tracker",
//     description: "Track your fitness and stay healthy.",
//     brand: "ActiveLife",
//     imageUrl: "https://placehold.co/200x320",
//     price: 79.99,
//   },
//   {
//     name: "Wireless Headphones",
//     description: "Immersive sound experience with noise cancellation.",
//     brand: "SoundWave",
//     imageUrl: "https://placehold.co/200x320",
//     price: 129.99,
//   },
//   {
//     name: "Digital Camera",
//     description: "Capture your moments with high-quality photos.",
//     brand: "PhotoMaster",
//     imageUrl: "https://placehold.co/200x320",
//     price: 449.99,
//   },
//   {
//     name: "Smart Home Hub",
//     description: "Control your smart devices with ease.",
//     brand: "HomeTech",
//     imageUrl: "https://placehold.co/200x320",
//     price: 199.99,
//   },
//   {
//     name: "Gaming Console",
//     description: "Next-gen gaming console for ultimate gaming experience.",
//     brand: "GameMaster",
//     imageUrl: "https://placehold.co/200x320",
//     price: 399.99,
//   },
//   {
//     name: "Electric Toothbrush",
//     description: "Keep your teeth clean and healthy.",
//     brand: "DentalCare",
//     imageUrl: "https://placehold.co/200x320",
//     price: 59.99,
//   },
//   {
//     name: "Smart Thermostat",
//     description: "Efficiently manage your home's temperature.",
//     brand: "EcoTech",
//     imageUrl: "https://placehold.co/200x320",
//     price: 129.99,
//   },
// ];

const productsInit = () => {
  const newProducts = [
    {
      name: "Smartphone XYZ",
      description: "Powerful smartphone with advanced features.",
      brand: "TechMaster",
      imageUrl: "https://placehold.co/200x320",
      price: 599.99,
    },
    {
      name: "Laptop Pro",
      description: "High-performance laptop for professionals.",
      brand: "ElectroTech",
      imageUrl: "https://placehold.co/200x320",
      price: 1299.99,
    },
    {
      name: "Coffee Maker Deluxe",
      description: "State-of-the-art coffee maker for coffee enthusiasts.",
      brand: "BrewMaster",
      imageUrl: "https://placehold.co/200x320",
      price: 149.99,
    },
    {
      name: "Fitness Tracker",
      description: "Track your fitness and stay healthy.",
      brand: "ActiveLife",
      imageUrl: "https://placehold.co/200x320",
      price: 79.99,
    },
    {
      name: "Wireless Headphones",
      description: "Immersive sound experience with noise cancellation.",
      brand: "SoundWave",
      imageUrl: "https://placehold.co/200x320",
      price: 129.99,
    },
    {
      name: "Digital Camera",
      description: "Capture your moments with high-quality photos.",
      brand: "PhotoMaster",
      imageUrl: "https://placehold.co/200x320",
      price: 449.99,
    },
    {
      name: "Smart Home Hub",
      description: "Control your smart devices with ease.",
      brand: "HomeTech",
      imageUrl: "https://placehold.co/200x320",
      price: 199.99,
    },
    {
      name: "Gaming Console",
      description: "Next-gen gaming console for ultimate gaming experience.",
      brand: "GameMaster",
      imageUrl: "https://placehold.co/200x320",
      price: 399.99,
    },
    {
      name: "Electric Toothbrush",
      description: "Keep your teeth clean and healthy.",
      brand: "DentalCare",
      imageUrl: "https://placehold.co/200x320",
      price: 59.99,
    },
    {
      name: "Smart Thermostat",
      description: "Efficiently manage your home's temperature.",
      brand: "EcoTech",
      imageUrl: "https://placehold.co/200x320",
      price: 129.99,
    },
  ];

  newProducts.forEach((prod) => {
    utility.addNewProduct(url, prod);
  });
};

const deleteConfirm = async () => {
  const currentId = localStorage.getItem("currentId");
  utility.deleteProduct(url, currentId);
  productList = await utility.getProduct(url);
  productList.reverse();
  products.showActions(productList);
  addDeleteListener();
};

const editConfirm = async (event) => {
  event.preventDefault();
  const currentId = localStorage.getItem("currentId");

  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const imageUrl = document.getElementById("imageUrl").value;
  const price = parseFloat(document.getElementById("price").value);

  const data = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
  };
  const origin =
    window.location.origin +
    (window.location.protocol === "https:" ? "/M4_W4_D1" : "");
  productList = await utility.updateProduct(url, currentId, data);
  window.location.href = `${origin}/details.html?id=${currentId}`;
};

const createConfirm = async (event) => {
  event.preventDefault();

  const name = document.getElementById("new_name").value;
  const description = document.getElementById("new_description").value;
  const brand = document.getElementById("new_brand").value;
  const imageUrl = document.getElementById("new_imageUrl").value;
  const price = parseFloat(document.getElementById("new_price").value);

  const data = {
    name: name,
    description: description,
    brand: brand,
    imageUrl: imageUrl,
    price: price,
  };
  const origin =
    window.location.origin +
    (window.location.protocol === "https:" ? "/M4_W4_D1" : "");
  await utility.addNewProduct(url, data);
  window.location.href = `${origin}/index.html`;
};

const setBtnListener = () => {
  const yesBtn = document.querySelector("#yes");
  yesBtn.addEventListener("click", deleteConfirm);
  const editSubmit = document.querySelector("#editProductForm");
  editSubmit.addEventListener("submit", (event) => {
    editConfirm(event);
  });
  const createBtn = document.querySelector("#createProductForm");
  createBtn.addEventListener("submit", (event) => {
    createConfirm(event);
  });
  const cartBtn = document.querySelector("#cart");
  cartBtn.addEventListener("click", cartFunc.showCart);
  const addBtns = document.querySelectorAll(".add");
  addBtns.forEach((addBtn) => {
    addBtn.addEventListener("click", (event) => {
      cartFunc.addCart(event);
    });
  });
  const remBtns = document.querySelectorAll(".rem");
  remBtns.forEach((remBtn) => {
    remBtn.addEventListener("click", (event) => {
      cartFunc.removeCart(event);
    });
  });
  const emptyBtn = document.querySelector("#empty");
  emptyBtn.addEventListener("click", cartFunc.empty);

  cartFunc.isBadge();
  const origin =
    window.location.origin +
    (window.location.protocol === "https:" ? "/M4_W4_D1" : "");
  const arrow = document.querySelector("#arrow");
  arrow.setAttribute("href", `${origin}/index.html`);
};

const setInfoDelete = (event) => {
  localStorage.setItem("currentId", event.target.id);
  const deleteModal = document.querySelector("#deleteModal .modal-body");
  deleteModal.innerHTML = event.target.name;
};

const setEditInfo = async (event) => {
  localStorage.setItem("currentId", event.target.id);
  const currentProduct = await utility.getProductById(url, event.target.id);

  document.getElementById("name").value = currentProduct.name;
  document.getElementById("description").value = currentProduct.description;
  document.getElementById("brand").value = currentProduct.brand;
  document.getElementById("imageUrl").value = currentProduct.imageUrl;
  document.getElementById("price").value = currentProduct.price;
};

const addEditDeleteListener = () => {
  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((delBtn) => {
    delBtn.addEventListener("click", (event) => {
      setInfoDelete(event);
    });
  });

  const editBtns = document.querySelectorAll(".edit");
  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", (event) => {
      setEditInfo(event);
    });
  });
};

const start = async () => {
  //productsInit();
  productList = await utility.getProduct(url);
  productList.reverse();
  products.showProducts(productList);
  const actions = document.querySelector("#actions");
  actions.addEventListener("click", () => {
    products.showActions(productList);
    addEditDeleteListener();
  });
  setBtnListener();
};

start();
