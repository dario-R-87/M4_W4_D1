import * as utility from "./components/utility.js";
import * as products from "./components/productList.js";

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

const deleteConfirm = () => {
  const currentId = localStorage.getItem("currentId");
  utility.deleteProduct(url, currentId);
};

const yesBtn = document.querySelector("#yes");
yesBtn.addEventListener("click", deleteConfirm);

const setInfoDelete = (event) => {
  localStorage.setItem("currentId", event.target.id);
  const deleteModal = document.querySelector("#deleteModal .modal-body");
  deleteModal.innerHTML = event.target.name;
};

const addDeleteListener = () => {
  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((delBtn) => {
    delBtn.addEventListener("click", (event) => {
      setInfoDelete(event);
    });
  });
};

const start = async () => {
  //productsInit();
  const productList = await utility.getProduct(url);
  products.showProducts(productList);
  const actions = document.querySelector("#actions");
  actions.addEventListener("click", () => {
    products.showActions(productList);
    addDeleteListener();
  });
};

start();
