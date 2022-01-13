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
  let result = `Nama panjang ku ${namaDepan} ${namaBelakang}`;
  return result;
}
console.log(namaSaya());

// function untuk mencetak array kedalam string
function namaMakanans() {
  let a = ["Bakso ", "Mie Ayam ", "Ketoprak ", "Soto ", "Gado-gado "];
  let txt = "";
  for (let i = 0; i < a.length; i++) {
    txt += a[i];
  }
  return txt.toString();
}
console.log(namaMakanans());

// kangkung
function nameKangKung(n) {
  let txt = [];
  for (let i = 3; i <= 3 * n; i += 3) {
    if (i % 5 === 0 && i % 6 === 0) {
      txt.push("KANGKUNG");
    } else if (i % 5 === 0) {
      txt.push("KANG");
    } else if (i % 6 === 0) {
      txt.push("KUNG");
    } else {
      txt.push(i);
    }
  }
  return txt;
}
console.log(nameKangKung(10));

// quiz soko mas rangga
function masukCafe(nama, umur, uang) {
  let juice = 50000;
  let anggur = 300000;
  let drink = "juice";
  let drunk = "anggur";
  if (nama === "") {
    console.log("Anda tidak boleh masuk"); /*jika nama string kosong maka hasilnya Anda tidak boleh masuk*/
  } else if (nama === nama) {
    console.log("Silahkan masuk " + nama); /*jika nama nya sesuai maka hasilnya Silahkan masuk dan akan melanjutkan ke proses selanjutnya*/
    if (umur <= 17) {
      console.log(`${nama} hanya boleh memesan ${drink} karena umur kamu ${umur}`); /*jika umur kurang dari 17 maka hanya boleh pesen juice*/
    } else {
      console.log(`${nama} hanya boleh memesan ${drunk} karena umur kamu ${umur}`); /*jika umur lebih dari 17 maka hanya boleh pesen anggur*/
    }
  }
  if (uang <= juice && uang <= anggur) {
    console.log("Uang anda tidak cukup. Anda harus pulang"); /*jika uangnya kurang maka disuruh pulang*/
  } else if (umur <= 17) {
    console.log("Hi " + nama + " Sisa uang anda " + (uang - juice) + " karena anda membeli " + drink); /*menghitung uang sisa dari orang yang umur nya < 17*/
  } else {
    console.log("Hi " + nama + " Sisa uang anda " + (uang - anggur) + " karena anda membeli " + drunk); /*menghitung uang sisa dari orang yang umur nya > 17*/
  }
}
masukCafe("Dani", 16, 10000);
masukCafe("Herbayu", 24, 500000);
