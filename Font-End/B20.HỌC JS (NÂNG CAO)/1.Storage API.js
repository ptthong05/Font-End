const input = document.querySelector("input");  // Lấy phần tử <input> đầu tiên trong trang HTML
const buttonSent = document.querySelector("#sent");  // Lấy phần tử <button> đầu tiên
const result = document.querySelector("#result");
const buttonClear = document.querySelector("#clear");
const buttonUp = document.querySelector("#up");
const buttonAll = document.querySelector("#clearAll");

buttonSent.addEventListener("click", () => {
    const name = input.name;           ///Lấy ra đc giá trị name
    const value = input.value;  // Lấy giá trị người dùng nhập vào ô input

    if(value) {
        localStorage.setItem(name, value);
        // console.log(name, value);  // Khi nhập value mới in ra console



        // LẤY EMAIL RA HTML
        const email = localStorage.getItem("email");
        result.innerHTML = email;         
    }
});


buttonClear.addEventListener("click", () => {
    localStorage.removeItem("email");
    result.innerHTML = ""     // k có gì ở html 
});





let count = 0;
buttonUp.addEventListener("click", () => {
    localStorage.setItem(`key${count}`, `value${count}`)         // Nối chuỗi key$count = key + count 
    count ++;   // Mỗi lần click sẽ tăng lên 1 đơn vị 
});






buttonAll.addEventListener("click", () => {
    localStorage.clear();            // Xoá tất cả
});




for(let i = 0; i < localStorage.length; i++) {
    const key = (localStorage.key(i));
    const value = (localStorage.getItem(key));

    console.log(key, value);
}












// sessionStorage.setItem("token", "fkllllllllllllllllllllllllll");