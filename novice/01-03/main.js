// // function dengan parameter
// const persegi = function (x) {
//   return x * x;
// };

// console.log(persegi(10));

// // luas segitiga
// function segitiga() {
//   let tinggi = 10;
//   let alas = 12;
//   return (tinggi * alas) / 2;
// }
// console.log(segitiga());

// // penjumlahan dengan arguments
// function tambahSemua() {
//   let total = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     total *= arguments[i];
//   }
//   return total;
// }
// console.log(tambahSemua(3, 4));

// //function merge string
// function namaSaya() {
//   let namaDepan = "Herbayu";
//   let namaBelakang = "Eko Nugroho";
//   let result = `Nama panjang ku ${namaDepan} ${namaBelakang}`;
//   return result;
// }
// console.log(namaSaya());

// function namaMakanans() {
//   let a = ["Bakso ", "Mie Ayam ", "Ketoprak ", "Soto ", "Gado-gado "];
//   let txt = "";
//   for (let i = 0; i < a.length; i++) {
//     txt += a[i];
//   }
//   return txt.toString();
// }
// console.log(namaMakanans());

// quiz soko mas rangga
function masukCafe(nama, umur, uang) {
  let juice = 50000;
  let anggur = 300000;
  if (nama === "") {
    console.log("Anda tidak boleh masuk");
  } else if (nama === nama) {
    console.log("Silahkan masuk");
    if (umur <= 17) {
      console.log("Hanya boleh memesan juice");
    } else {
      console.log("Hanya boleh memesan anggur");
    }
  }
  if (uang <= juice && uang <= anggur) {
    console.log("Uang anda tidak cukup. Anda harus pulang");
  } else {
    console.log("Sisa uang anda " + (uang - juice) + " jika anda membeli juice");
    console.log("Sisa uang anda " + (uang - anggur) + " jika anda membeli anggur");
  }
}
masukCafe("", 24, 10000);
masukCafe("Herbayu", 24, 500000);
