var first = "hello world";
console.log(first);
console.log("===================");

//tipe data string
let namaDepan = "Herbayu";
let namaBelakang = "Eko Nugroho";

let fullName;
console.log((fullName = `Nama saya adalah ${namaDepan} ${namaBelakang}`));

console.log("===================");

var x;
x = "John";

var y;
y = "doe";

console.log(x, y);

console.log("==================");

let j = "Bob";
j = "Steve";
console.log(j);

console.log("==================");

// tipe data number & operator
let a = 8;
let b = 4;
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;
let g = a % b;
let h = (a + b) * 2;
console.log(c, d, e, f, g, h);
if (b > c) {
  console.log("Large");
} else if (e < c) {
  console.log("Small");
} else {
  console.log("jangan bingung");
}

// Tipe data boolean
console.log(a > b);
console.log(e < c);
console.log("Itchy" != "Scratchy");
console.log("Apple" == "Orange");
console.log("==================");

console.log("ini adalah komentar");
// saya lagi belajar javascript
/*mohon dilancarkan dan di permudah untuk segala urusan nya terkait JS*/

// tipe data array
let mobil = ["Toyota, Honda, BMW"];
mobil.push("Mercedez");
console.log(mobil);
let motor = ["Suzuki, Yamaha, Kawasaki"];
let kendaraan = mobil.concat(motor);
console.log(kendaraan);

const numbers = [45, 4, 9, 16, 25];
let txt = "";
// perulangan dalam array menggunakan forEach
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + ", ";
}
console.log(txt);
console.log("=================");

// Tipe data objek
const car = { type: "BMW", model: "500", color: "silver", price: "Rp 1.000.000.000" };
console.log(`Saya punya mobil ${car.type} dengan model ${car.model} yang warna nya ${car.color} seharga ${car.price}`);

//
