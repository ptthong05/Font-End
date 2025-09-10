import {fetchAPI} from "./const.js";
import { API_category } from "./contants.js";

fetchAPI(API_category)

.then (data => {
    let html = '';
    data.forEach(item => {
        html += `
            <div class="box">
                <div class="title">${item.name}</div>
            </div>
        `
    });

    const hienThiCategory = document.getElementById("product-category");
    hienThiCategory.innerHTML = html;
})