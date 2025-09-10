import { drawProduct } from "./drawProduct.js";
import { params } from "./variable.js";
drawProduct();




// Search
const inputSearch = document.querySelector("#search");
const buttonSearch = document.querySelector("#btn");

buttonSearch.addEventListener("click", function() {
    params.q = inputSearch.value;
    drawProduct();
})
// End Search