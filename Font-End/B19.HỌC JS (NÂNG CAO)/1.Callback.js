// function ham1() {
//     console.log("Hàm 1");
// }

const { useCallback } = require("react");

// function ham2() {
//     console.log("Hàm 2");
// }

// // DẠNG THƯỜNG 
// ham1();
// ham2();




// DẠNG CALBACK
// function ham1(callback) {            // callback thế bằng chữ gì cx đc 
//     console.log("Hàm 1");
//     callback();
// }

// function ham2() {
//     console.log("Hàm 2");
// }

// ham1(ham2);                   // hàm 2 đc truyền dưới dạng đối số của hàm khác 




//VD3: TINH TONG
import { tong } from "./helper/tinhTong";
import { kiemTraChanLe } from "./helper/kiemTraChanLe";
import { kiemTraSoDuong } from "./helper/kiemTraSoDuong";

tong(10, 20, kiemTraSoDuong);
tong(10, 15, kiemTraChanLe);

