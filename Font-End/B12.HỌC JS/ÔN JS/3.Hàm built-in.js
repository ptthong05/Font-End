// alert("XIN CHÀO!"


// var result = confirm("BẠN ĐỦ 18 TUỔI CHƯA!");
// if(result == true) {
//     alert("Bạn đc mua lúa mạch!");
// } else {
//     alert("BẠN CH ĐỦ TUỔI!");
// }


// var fullname = prompt("Fullname", "");
// console.log(fullname);
// if (fullname != null) {
//     alert("Tên của bạn là:" + fullname);
// } else {
//     alert("Vui lòng nhập lại!");
// }


// Settimeout: chạy 1 lần 
const myAlert = () => {
    alert("HELLO EVERY BODY!");
}
// myAlert();

const myAlert2 = () => {
    setTimeOut(myAlert, 3000);
};
myAlert2();
