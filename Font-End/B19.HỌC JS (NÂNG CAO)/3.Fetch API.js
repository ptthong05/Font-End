const fetchAPI = (url) => {
    const result = fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        });
        return result;
}



// CATEGORY 
// fetchAPI('https://dummyjson.com/products')
// //   .then(response => response.json()) // Chuyển dữ liệu JSON về JS object
//   .then(data => {
//     let htmls = "";

//     data.products.forEach(item => {
//         htmls += `
//             <div class="category-item">${item.title}</div>
//             `;
//         // console.log(item.title); // In ra title sản phẩm
//     });

//     console.log(htmls); // In ra chuỗi HTML sau khi lặp xong


//     // IN RA GIAO DIỆN HTML KHI LẤY XONG DATA
//     const divCategory = document.querySelector("#category");
//     divCategory.innerHTML = htmls;
//   });





// product
fetchAPI('http://localhost:3000/products')
.then(data => {
    let htmls = "";
    console.log(data);        // LẤY RA 30 PRODUCT 
    data.forEach(item => {
        htmls += 
        `
            <div class="product-item">
               <img src="${item.img}" alt="${item.title}/"/>
               <h3>${item.title}</h3>
               <p>${item.price}</p>
            </div>
        `
    })
    const divProduct = document.querySelector("#products");
    divProduct.innerHTML = htmls;
    // console.log(typeof products.id);
});