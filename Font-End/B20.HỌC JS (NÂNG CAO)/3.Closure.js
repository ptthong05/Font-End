// Closure là một hàm ở bên trong hàm khác.
// const tinhToan = () => {
//     const tong = (a, b) => {
//         return a + b;
//     }
//     return tong;
// };

// const tt = tinhToan();
// console.log(tt(10, 20));











// Nó có thể sử dụng các biến toàn cục, biến cục bộ của hàm cha và biến cục bộ của chính nó.
// Nếu có các biến trùng tên thì closure sẽ ưu tiên theo thứ tự: biến cục bộ của chính nó, biến cục bộ của hàm cha, biến toàn cục.
// const c = 10;               // Biến toàn cục 

// const tinhToan = () => {
//     const c = 20;            // Biến cục bộ SẼ ƯU TIÊN SỬ DỤNG 
//     const tong = (a, b) => {
//         const c = 40;        // BIẾN CỤC BỘ ƯU TIÊN BIẾN NÀY TRC NẾU TRONG HÀM NÀY K CÓ BIẾN C NÓ SẼ TÌM RA NGOÀI TÌM KHI NÀO CÓ BIẾN C -- ƯU TIẾN BIẾN CỤC BỘ CHÍNH NÓ TRC
//         return a + b + c;
//     }
//     return tong;
// };

// const tt = tinhToan();
// console.log(tt(20, 30));











// Nếu muốn return nhiều hàm closure thì bạn phải sử dụng một object, trong đó mỗi phần tử sẽ là một hàm closure.           
// const tinhToan = () => {      
//     const tong = (a, b) => {   
//         return a + b;
//     }

//     const hieu = (a, b) => {   
//         return a - b;
//     }

//     const tich = (a, b) => {   
//         return a * b;
//     }

//     const thuong = (a, b) => {   
//         return a / b;
//     }


//     return {
//         tong: tong,
//         hieu: hieu,
//         tich: tich,
//         thuong: thuong
//     };
// };

// const tt = tinhToan();
// console.log(tt);

// console.log(tt.tong(10, 20));
// console.log(tt.hieu(10, 20));
// console.log(tt.tich(10, 20));
// console.log(tt.thuong(10, 20));





















// Closure thay đổi được giá trị biến toàn cục lẫn cục bộ.
const info = () => { 
    let fullname = "Phạm Tấn Thông";

    const getFullName = () => {
        return fullname;
    }

    const setFullName = (String) => {
        fullname = String;
    }

    return {
        get: getFullName,
        set: setFullName
    };
}

const infoUser = info();


console.log(infoUser);
console.log(infoUser.get());
console.log(infoUser.set("Thông"));
console.log(infoUser.get());