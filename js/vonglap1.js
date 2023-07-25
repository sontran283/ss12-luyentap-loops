// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     if (i == 99) {
//         alert("da hoan thanh");
//     }
// }


//  Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập.
//  Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ.
//  Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
// let n;
// do {
//     n = +prompt("hay nhap nhiet do hien tai");
//     if (n > 100) {
//         console.log("yeu cau giam nhiet do");
//     } else if (n < 20) {
//         console.log('tang nhiet do');
//     }
// } while (n < 20 && n > 100);


// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
// let a = 0;
// let b = 1;
// let x;
// for (i = 1; i <= 20; i++) {
//     x = a + b;
//     a = b;
//     b = x;
//     console.log(x);
// }


// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
// let count = 0;  //count là đếm số, mk đã tìm được bn số rồi.
// let N = 1;
// let sum = 0;
// while (count <= 30) {
//     if (N % 7 == 0) {
//         sum += N;
//         count++;
//     }
//     N++
// }
// console.log(sum);


// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100.
// Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó.
// Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".
// for (i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     }
// }


// Bài 8: Game đoán số Nâng cấp game "Hãy thử đoán xem!"
// game đoán số , từ 1->10
// có 3 lần đoán , mỗi đoán xong néu sai thì sẽ gợi ý
//  game dừng khi đoán đúng

// let count = 1;
// let number;
// let random = Math.round(Math.random() * 9) + 1;
// console.log(random);
// while (count <= 3) {
//     number = +prompt("Nhập số muốn đoán  1-10");
//     if (count == 3) {
//         // nếu lượt đoán thứ 3
//         if (number == random) {
//             alert("you win");
//             break;
//         } else {
//             alert("you lose");
//         }
//     } else {
//         // chưa đến lượt thứ 3
//         if (number == random) {
//             alert("you win");
//             break;
//         } else if (number < random) {
//             alert(`Lơn hơn ${number} , bạn còn ${3 - count} lần`);
//         } else {
//             alert(`Bé hơn ${number} , bạn còn ${3 - count} lần`);
//         }
//     }
//     count++;
// }