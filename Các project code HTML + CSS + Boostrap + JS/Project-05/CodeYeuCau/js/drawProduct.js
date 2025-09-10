// VẼ GIAO DIỆN SẢN PHẨM 


import {fetchAPI} from "./const.js";
import { API_product } from "./contants.js";
import { params } from "./variable.js";

const divListProduct = document.getElementById("products");

export const drawProduct = () => {
    console.log(params);

    const api = `${API_product}?q=${params.q}`;

    fetchAPI(api)

    .then (data => {
    let html = '';
    data.forEach(item => {
        html += `
        <div class="product-item">
            <div class="product-img">
                <img src="${item.img}" alt="${item.title}" />
                <div class="product-sale">${item.sale}</div>
            </div>
            <div class="product-content">
                <div class="title">${item.title}</div>
                <div class="meta">
                    <div class="price">${item.price}</div>
                    <div class="stock">Còn lại: ${item.stock}</div>
                </div>
            </div>
        </div> `
    });
    divListProduct.innerHTML = html;
})

}


