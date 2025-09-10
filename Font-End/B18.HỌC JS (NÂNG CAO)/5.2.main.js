import {sum} from "./5.1.sum.js";

import {tong as tong1} from "./tinhToan.js";
import {hieu as hieu1} from "./tinhToan.js";
import {tich as tich1} from "./tinhToan.js";
import {thuong as thuong1} from "./tinhToan.js";


import thongBao from "./tinhToan.js";         // export default k có ()


import {a, b} from "./5.3.constant.js";
// import {b} from "./5.3.constant.js";


const g = sum(a, b);
const c = tong1(a, b);
const d = hieu1(a, b);
const e = tich1(a, b);
const f = thuong1(a, b);

console.log(c);              // IN RA LỖI HÀM SUM CH ĐC KHAI BÁO 
console.log(d); 
console.log(e); 
console.log(f); 


console.log(thongBao()); 