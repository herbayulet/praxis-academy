// function dengan parameter
const persegi = function (x) {
  return x * x;
};

console.log(persegi(10));

// luas segitiga
function segitiga() {
  let tinggi = 10;
  let alas = 12;
  return (tinggi * alas) / 2;
}
console.log(segitiga());

// penjumlahan dengan arguments
function tambahSemua() {
  let total = 1;
  for (let i = 0; i < arguments.length; i++) {
    total *= arguments[i];
  }
  return total;
}
console.log(tambahSemua(3, 4));

//function merge string
function namaSaya() {
  let namaDepan = "Herbayu";
  let namaBelakang = "Eko Nugroho";
  let result = `nama panjang ku ${namaDepan} ${namaBelakang}`;
  return result;
}
console.log(namaSaya());

function namaMakanans() {
  let a = ["Bakso ", "Mie Ayam ", "Ketoprak ", "Soto ", "Gado-gado "];
  let txt = "";
  for (let i = 0; i < a.length; i++) {
    txt += a[i] + "\n";
  }
  return txt.toString();
}
console.log(namaMakanans());
