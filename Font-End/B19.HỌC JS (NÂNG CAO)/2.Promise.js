// var a = 10;

// var promise = new Promise((resolve, reject) => {
//     if(a !== undefined && a !== null & a !== "" ) {
//         resolve(a);
//     } else {
//         reject(a);
//     }
//     // reject();
// })

// promise 
// .then((success) => {
//     console.log(a);
//     return success;
// })

// .then((success2) => {
//     const b = 20;
//     console.log(success2 + b);
//     return success2 + b;
// })

// .then((success3) => {
//     const c = 30;
//     console.log(success3 + c);
// })

// .catch((error) => {
//     console.log("Lỗi:", error);
// })
// .finally(() => {
//     console.log("Luôn vào đây");
// })






// VD2
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(); // Promise sẽ được resolve sau 3 giây
//     }, 3000);
// });

// console.log(promise); // In ra Promise ngay lập tức

// setTimeout(() => {
//     console.log("sau 2s: SAU 2S RA PENDING", promise); // In ra promise sau 1 giây
// }, 2000);             // DƯỚI 3S RA PENDING   VÀ SAU 3S THÀNH FULFILLED

// SAU 3S BÊN BACKEND MỚI TRẢ RA KẾT QUẢ 





// VD3: PROMISE.ALL
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;
let f = 60;

let sum1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(a + b);
    }, 2000)
});

let sum2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(c + d);
    }, 4000)
});

let sum3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(e + f);
    }, 6000)
});


Promise.all([sum1, sum2, sum3])
    .then(([sum1, sum2, sum3]) => {
        let sum = sum1 + sum2 + sum3;
        console.log(sum);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Luôn chạy vào dây!");
    })