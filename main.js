// bài 1
/* Mô hình 3 khối
- Input:
Lương 1 ngày
Số ngày làm việc
- ProGress: 
Tính Lương = Lương 1 ngày * Số Ngày làm việc

- Output: 
Tien lương Mỗi Nugời

*/
document.getElementById("btnTinhLuong").onclick = function () {
  var Wage = document.getElementById("Wage").value;
  var Date = document.getElementById("Date").value;
  var tienLuongMoiNguoi = 0;
  tienLuongMoiNguoi = Wage * Date;
  document.getElementById("tienLuongMoiNguoi").innerHTML =
    tienLuongMoiNguoi + "VND";
};

// bài 2
/* Mô hình 3 khối
- Input:
Number 1, number 2, number 3, number 4, number 5
- ProGress: 
Gttb = (number1 + number2 +number3 + number4 +number5)/5

- Output: 
Giá Trị Trung bình

*/
document.getElementById("btnGTTB").onclick = function () {
  var Num1 = Number(document.getElementById("Num1").value);

  var Num2 = Number(document.getElementById("Num2").value);
  var Num3 = Number(document.getElementById("Num3").value);
  var Num4 = Number(document.getElementById("Num4").value);
  var Num5 = Number(document.getElementById("Num5").value);
  var GiaTriTrungBinh = 0;
  GiaTriTrungBinh = (Num1 + Num2 + Num3 + Num4 + Num5) / 5;
  document.getElementById("GiaTriTrungBinh").innerHTML = GiaTriTrungBinh;
};

// bài 3
/* Mô hình 3 khối
- Input:
số tiền quy đổi
1usd = 23500
- ProGress: 
Quy đổi tiền = số tiền quy đổi * 23500

- Output: 
giá trị quy đổi

*/
document.getElementById("btnQuyDoiTien").onclick = function () {
  var SoTien = Number(document.getElementById("SoTien").value);
  var NumbeR = 23500;
  var GiaTriQuyDoi = 0;
  console.log(
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "USD",
    }).format(GiaTriQuyDoi)
  );
  GiaTriQuyDoi = 23500 * SoTien;
  document.getElementById("GiaTriQuyDoi").innerHTML = GiaTriQuyDoi;
};
// bài 4
/* Mô hình 3 khối
- Input:
chiều dài = ChieuDai
Chiều rộng = ChieuRong
- ProGress: 
Diện tích = ChieuDai * ChieuRong
Chu vi = (ChieuDai + ChieuRong)*2

- Output: 
diện tích: ; chu vi:

*/
document.getElementById("btnTinh").onclick = function () {
  var ChieuDai = Number(document.getElementById("ChieuDai").value);
  var ChieuRong = Number(document.getElementById("ChieuRong").value);
  var DienTich = 0;
  var ChuVi = 0;
  DienTich = ChieuDai * ChieuRong;
  ChuVi = (ChieuDai + ChieuRong) * 2;
  document.getElementById("ChuviDientich").innerHTML =
    "- Diện tích :" + DienTich + "- Chu vi:" + ChuVi;
};

// bài 5
// /*
// * - Input
// *      ký số bất kỳ
// * - Progress
// *      + Tach lay hang chuc => n % 100 / 10 => lam tron so Math.floor( n % 100 / 10)
// *      + Tach lay hang don vi => n % 10
// *
// *      + tong = hang tram + hang chuc + don vi
// *
// * - Output
// *      + tong = ?

document.getElementById("btnKySo").onclick = function () {
  var kySo = Number(document.getElementById("kySo").value);
  var donVi = 0;
  var chuc = 0;
  var tongKySo = 0;
  donVi = Math.floor(kySo % 10);
  chuc = Math.floor(kySo / 10);
  tongKySo = donVi + chuc;
  document.getElementById("tongKySo").innerHTML =
    "Tổng 2 ký số là: " + tongKySo;
};
