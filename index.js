import * as utility from "./components/utility.js";
import * as products from "./components/productList.js";
const url = "https://striveschool-api.herokuapp.com/api/product/";



const start = async ()=>{
    const productList = await utility.getProduct(url);
    products.showProducts(productList);
}

start();