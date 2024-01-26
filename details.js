import { getCardDetails } from "./components/card.js";
import { getProductById } from "./components/utility.js";
import { toggleLoader } from "./index.js";

const getProduct = async (url, id) => {
  toggleLoader("#produtct_details");
  const product = await getProductById(url, id);
  toggleLoader("#produtct_details");
  const prod = document.querySelector("#produtct_details");
  prod.innerHTML = getCardDetails(product);
};

const url = "https://striveschool-api.herokuapp.com/api/product/";
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
getProduct(url, id);
