export function tong(a, b, callback) {
    let kq = a + b;
    console.log(kq);
    // kiemTraSoDuong(kq);
    // kiemTraChanLe(kq);
    callback(kq);
}
