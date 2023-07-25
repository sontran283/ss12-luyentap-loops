// BAI 1:
// BAI 1:
// Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     if (i == 99) {
//         console.log("đã hoàn thành");
//     }
// }



// BAI 2:
// BAI 2:
// viet mot doan ma cho phep nguoi dung nhap vao mot so n,
// tien hanh kiem tra xem do co phai la mot so nguyen duong hop le hay khong,
// neu do la so hop le thi tien hanh tinh ket qua cua bieu thuc A=0+1+2+...+n
// b1: nhap vao so n
// b2: kiem tra n>0 co dung hay sai
// b3: neu b2 dung, dung vong lap tinh tong(tinh tu 1 den so nhap n)
// let n = +prompt("hay nhap vao so nguyen bat ki")
// let sum = 0;
// if (n > 0) {
//     for (i = 1; i <= n; i++) {
//         sum = sum + i;
//     }
//     console.log(sum);
// }



// BAI 3:
// BAI 3:
// viet mot doan ma cho phep nguoi dung nhap vao mot so n
// tien hanh kiem tra xem do co phai la mot so nguyen hop le hay khong
// neu do la so hop le tien hanh tinh ket qua cua bieu thuc B=1*2*3*...*n
// let num = +prompt("hay nhap vao so nguyen bat ki")
// let sum = 1;
// if (num > 0) {
//     for (i = 1; i <= num; i++) {
//         sum = sum * i;
//     }
//     console.log(sum);
// }



// BAI 4:
// BAI 4:
// viet mot doan ma cho phep nguoi dung nhap vao mot so n
// tien hanh kiem tra xem do co phai la mot so nguyen hop le hay khong
// neu do la so hop le tien hanh tinh ket qua cua bieu thuc C=1+1/2+1/3+...+1/n
// let num = +prompt("hay nhap vao so nguyen bat ki")
// let sum = 0;
// if (num > 0) {
//     for (i = 1; i <= num; i++) {
//         sum = sum + (1 / i);
//     }
//     console.log(sum);
// }



// BAI 5:
// BAI 5:
// viet mot doan ma cho phep nguoi dung nhap vao mot so n
// tien hanh kiem tra xem do co phai la mot so nguyen hop le hay khong. (1 <= n <= 9)
// neu khong hop le thi nhap lai
// neu do la so hop le tien hanh in ra bang cuu truong cua so do;
// let n;
// do {
//     n = +prompt("hay nhap vao mot so tu 1 den 9");
//     console.log(n);
// } while (n < 1 || n > 9);
// for (let i = 1; i <= 10; i++) {
//     let total = n * i;
//     document.writeln(`${n} * ${i} = ${total}`);
// }


// BAI 6:
// BAI 6:
// viet mot doan ma cho phep nguoi dung nhap vao mot so n
// tien hanh kiem tra xem do co phai la mot so nguyen hop le hay khong
// neu do la so hop le tien hanh in ra man hinh console day so fibonacci n phan tu
// let n = +prompt("hay nhap so bat ki")
// let a = 0;
// let b = 1;
// let x = 0;
// for (let i = 0; i < n; i++) {
//     if (i == 0) {
//         console.log(a)
//     } else if (i == 1) {
//         console.log(b)
//     } else {
//         x = a + b
//         a = b
//         b = x
//         console.log(x)
//     }
// }



// BAI 7:
// BAI 7:
// viet mot doan ma cho phep nguoi dung nhap vao so nguyen duong n
// tien hanh kiem tra xem do co phai la 1 so hop le hay khong
// neu khong hop le thi cho nhap lai
// neu do la so hop le, tien hanh in ra man hinh console cac so tu 1-n in ra theo dang chan le
// let n;
// do {
//     n = +prompt("hay nhap so")
// } while (n <= 0);
// for (i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i}: chan`);
//     } else {
//         console.log(`${i}: le`);
//     }
// }



// BAI 8:
// BAI 8:
// Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n.
// Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không.
// Nếu đó là số hợp lệ, tiến hành in ra màn hình console các số chẵn trước, sau đó in ra các số lẻ sau
// let n;
// do {
//     n = +prompt("hay nhap so nguyen duong n");
// } while (n <= 0);
// for (i = 0; i <= n; i += 2) {
//     console.log(i);
// }
// for (i = 1; i <= n; i += 2) {
//     console.log(i);
// }



// BAI 9:
// BAI 9:
// Viết một đoạn mã mô phỏng máy ATM.Cho người dùng nhập vào số tiền cần rút.
// Sau đó in ra tổng số tờ tiền mà người dùng nhận được với từng loại mệnh giá.
// Biết máy ATM chỉ rút được 3 loại mệnh giá là 500.000, 200.000, 100.000, 50.000.
// Biết số tiền tối thiểu rút một lần là 50.000

// let tien = 0; // khai báo biến lưu trữ số tiền nhập vào
// let a = b = c = d = 0; // khai báo lần lượt các biến đếm số lượng các tờ tiền 500, 200, 100, 50; let a = 0; let b = 0....

// // vòng lặp nhập tiền
// do {
//     tien = prompt("Nhap so tien ban muon rut")
// } while (tien <= 0 || tien % 50000 !== 0); // không được nhập tiền âm, tiền = 0 và không chia hết cho 50.000

// // vòng lặp khi còn tiền thì sẽ tính toán trừ tiền
// while (tien > 0) {
//     //nếu tiền lớn hơn 500.000 thì sẽ rút được 1 tờ 500.000 và khi nhỏ hơn thì tương tự cho các tờ tiền khác
//     if (tien >= 500000) {
//         tien -= 500000
//         a++
//     } else if (tien >= 200000) {
//         tien -= 200000
//         b++
//     } else if (tien >= 100000) {
//         tien -= 100000
//         c++
//     } else {
//         tien -= 50000
//         d++
//     }
// }

// // kiểm tra xem có tờ nào và có bao nhiêu tờ thì in ra
// if (a > 0) {
//     console.log(`500000 - ${a}`)
// }
// if (b > 0) {
//     console.log(`200000 - ${b}`)
// }
// if (c > 0) {
//     console.log(`100000 - ${c}`)
// }
// if (d > 0) {
//     console.log(`50000 - ${d}`)
// }

