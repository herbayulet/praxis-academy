console.log("==================");
// soal 1
function bilangan() {
  let a = 15;
  let b = 15;
  if (a === b) {
    console.log("angka sama");
  } else {
    console.log("angka berbeda");
  }
}
bilangan();

console.log("==================");

// Soal 2
function dibagiDua(x) {
  if (x % 2 === 0) {
    console.log("bilangan ini adalah genap");
  } else {
    console.log("bilangan ini adalah ganjil");
  }
}
dibagiDua(15);

console.log("==================");

// Soal 3
function posNeg(x) {
  if (x >= 0) {
    console.log("Angka ini positive");
  } else {
    console.log("Angka ini negative");
  }
}
posNeg(15);

console.log("==================");

// Soal 4
function kabisat(x) {
  if (x % 400 === 0) {
    console.log(`${x} adalah tahun kabisat`);
  } else if (x % 100 === 0) {
    console.log(`${x} bukan tahun kabisat`);
  } else if (x % 4 === 0) {
    console.log(`${x} adalah tahun kabisat`);
  } else {
    console.log(`${x} bukan tahun kabisat`);
  }
}
kabisat(2016);

console.log("==================");

// Soal 5
function batasUmur(x) {
  if (x < 21) {
    console.log("Maaf, anda tidak mendapatkan suara anda");
  } else {
    console.log("Selamat! Anda berhak mendapatkan suara anda");
  }
}
batasUmur(21);

console.log("==================");

// Soal 6
function bilanganBulat(m, n) {
  if (m !== 0) {
    if (m >= 0) {
      console.log((n = 1));
    } else if (m <= 0) {
      console.log((n = -1));
    } else {
      console.log((n = 0));
    }
  }
}

bilanganBulat(-5);

console.log("==================");

// Soal 7
function tinggiBadan(x) {
  if (x >= 165 && x < 195) {
    console.log("Orang nya tinggi besar");
  } else if (x >= 150) {
    console.log("Hayuk ngojay biar tinggi");
  } else {
    console.log("Orangnya kecil seperti kurcaci");
  }
}
tinggiBadan(135);

console.log("==================");

// Soal 8
let urutAngka = (num1, num2, num3) => {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(`${num1} adalah yang paling besar`);
    } else {
      console.log(`${num3} adalah yang paling besar`);
    }
  } else if (num2 > num3) {
    console.log(`${num2} adalah yang paling besar`);
  } else {
    console.log(`${num3} adalah yang paling besar`);
  }
};
urutAngka(12, 25, 52);

console.log("==================");

// Soal 9
let titikKordinat = (tik1, tik2) => {
  if (tik1 > 0 && tik2 > 0) {
    console.log(`titik koordinat terletak di kuadran pertama, ${tik1} ${tik2}`);
  } else if (tik1 < 0 && tik2 < 0) {
    console.log(`titik koordinat terletak di kuadran kedua, ${tik1} ${tik2}`);
  } else if (tik1 < 0 && tik2 > 0) {
    console.log(`titik koordinat terletak di kuadran ketiga, ${tik1} ${tik2}`);
  } else if (tik1 > 0 && tik2 < 0) {
    console.log(`titik koordinat terletak di kuadran ke empat, ${tik1} ${tik2}`);
  } else if (tik1 == 0 && tik2 == 0) {
    console.log(`titik koordinat terletak di kuadran kelima, ${tik1} ${tik2}`);
  } else {
    console.log(`titik koordinat terletak di kuadran asal`);
  }
};
titikKordinat(7, 9);

console.log("==================");

// soal 10
let penerimaanSiswa = (M, F, K) => {
  if (M >= 65 && F >= 55 && K >= 50) {
    if (M + F + K >= 190 || M + F >= 140) {
      console.log("Kandidat memenuhi syarat untuk masuk");
    } else {
      console.log("Kandidat tidak memenuhi syarat");
    }
  } else {
    console.log("Kandidat tidak memenuhi syarat");
  }
};
penerimaanSiswa(65, 51, 72);
penerimaanSiswa(88, 80, 72);

console.log("==================");

// Soal 11
let akar = (a, b, c) => {
  let d;
  let x1;
  let x2;
  d = (b * b - 4) * (a * c);
  console.log(d);
  if (d == 0) {
    console.log("kedua akar sama");
    x1 = -b / (2.0 * a);
    x2 = x1;
    console.log(`Akar pertama adalah = ${x1}`);
    console.log(`Akar kedua adalah = ${x2}`);
  } else if (d < 0) {
    console.log("Diantara akar yang asli dan selisih -2");
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log(`Akar pertama adalah = ${x1}`);
    console.log(`Akar kedua adalah = ${x2}`);
  } else {
    console.log("Root bersifat imajiner dan tidak ada solusi");
  }
};
akar(1, 5, 7);

console.log("==================");

// Soal 12
let siswa = (f, c, k) => {
  let id = 784;
  let nama = "James";
  let total = f + c + k;
  let avg = total / 3;
  console.log(`NRP Siswa: ${id}`);
  console.log(`Nama Siswa: ${nama}`);
  console.log(`Masukan Nilai Fisika : ${f}`);
  console.log(`Masukan Nilai Kimia : ${c}`);
  console.log(`Masukan Nilai Komputer : ${k}`);
  console.log(`Nilai Total: ${total}`);
  console.log(`Persentase: ${avg}`);
  if (avg >= 60) {
    console.log("Pembagian: Pertama");
  } else if (avg < 60 && avg >= 48) {
    console.log("Pembagian: Kedua");
  } else if (avg < 48 && avg >= 36) {
    console.log("Pembagian: Pass");
  } else {
    console.log("Pembagian: Gagal");
  }
};
siswa(70, 80, 90);

console.log("==================");

// Soal 13
let suhu = (x) => {
  if (x < 0) {
    console.log("Beku banget");
  } else if (x <= 10) {
    console.log("Sangat dingin");
  } else if (x <= 20) {
    console.log("Musim dingin");
  } else if (x <= 30) {
    console.log("Suhu Normal");
  } else if (x <= 40) {
    console.log("Suhu Panas");
  } else {
    console.log("Auto misuh2 cokk");
  }
};
suhu(42);

console.log("==================");
// Soal 14
let segitga = (a, b, c) => {
  if (a == b && b == c) {
    console.log("Ini adalah segitiga sama sisi");
  } else if (a == b || a == c || b == c) {
    console.log("Ini adalah segitiga sama kaki");
  } else {
    console.log("ini adalah segitiga siku-siku");
  }
};
segitga(50, 50, 60);

console.log("==================");
// Soal 15
let sudut = (a, b, c) => {
  let total = a + b + c;
  return total === 180 ? "ini fix segitiga" : "bukan segitiga";
};
console.log(sudut(40, 55, 65));

console.log("==================");
// Soal 16
let karakter = (String, Number) => {
  if (String === "Herbayu") {
    console.log("Ini adalah karakter String");
  } else if (Number === 8) {
    console.log("Ini adalah karakter Integer/Number");
  } else {
    console.log("Ini adalah karakter khusus");
  }
};
karakter("@");

console.log("==================");
// Soal 17
let alphabet = (str) => {
  if (str[0] === "a" || str[0] === "i" || str[0] === "u" || str[0] === "e" || str[0] === "o" || str[0] === "A" || str[0] === "I" || str[0] === "E" || str[0] === "U" || str[0] === "O") {
    console.log("Kalimat ini diawali Huruf Vowel");
  } else {
    console.log("Bukan huruf Alphabet");
  }
};
alphabet("Kambing".split(""));
alphabet("Ayam".split(""));

console.log("==================");
// Soal 18

let pnl = (p, e, t) => {
  if (p > e) {
    t = p - e;
    console.log(`Defisit yang harus ditanggung adalah ${t}`);
  } else if (e > p) {
    t = e - p;
    console.log(`Anda memiliki sisa keuntungan ${t}`);
  } else {
    console.log("Anda tidak dalam kondisi profit atau defisit");
  }
};
pnl(500, 700);

console.log("==================");
// Soal 19
let customer = (id, name, exp) => {
  let cost;
  let costs;
  let total;
  if (exp < 200) {
    cost = 1.2;
  } else if (exp >= 200 && exp < 400) {
    cost = 1.5;
  } else if (exp >= 400 && exp < 600) {
    cost = 1.8;
  } else {
    cost = 2.0;
  }
  if (exp > 300) {
    costs = exp * cost * 0.15;
    total = exp * cost + costs;
  } else {
    total = 100;
  }
  console.log(`ID Pelanggan: ${id}`);
  console.log(`Nama Pelanggan: ${name}`);
  console.log(`Yang di bebankan: ${exp}`);
  console.log(`Jumlah cost nya adalah: @${cost} per unit`);
  console.log(`${exp * cost} dengan tambahan ${costs}`);
  console.log(`Total yang dibebankan adalah: ${total}`);
};
customer(1001, "James", 800);

console.log("==================");
// Soal 20
let nilai = (x) => {
  switch (x) {
    case "E":
      console.log("Bagus Sekali");
      break;
    case "V":
      console.log("Baik Sekali");
      break;
    case "G":
      console.log("Bagus");
      break;
    case "F":
      console.log("Gagal");
      break;
    default:
      console.log("Rata - Rata");
      break;
  }
};
nilai("A");

console.log("==================");
// Soal 21
let hari = (x) => {
  switch (x) {
    case 1:
      console.log("Senin");
      break;
    case 2:
      console.log("Selasa");
      break;
    case 3:
      console.log("Rabu");
      break;
    case 4:
      console.log("Kamis");
      break;
    case 5:
      console.log("Jum'at");
      break;
    case 6:
      console.log("Sabtu");
      break;
    case 7:
      console.log("Minggu");
      break;
    default:
      break;
  }
};
hari(4);

console.log("==================");
// Soal 22

let namaAngka = (x) => {
  switch (x) {
    case 1:
      console.log("Satu");
      break;
    case 2:
      console.log("Dua");
      break;
    case 3:
      console.log("Tiga");
      break;
    case 4:
      console.log("Empat");
      break;
    case 5:
      console.log("Lima");
      break;
    case 1:
      console.log("Enam");
      break;
    case 1:
      console.log("Tujuh");
      break;
    default:
      break;
  }
};
namaAngka(4);

console.log("==================");
// Soal 23

let bulan = (x) => {
  switch (x) {
    case 1:
      console.log("Januari");
      break;
    case 2:
      console.log("Februari");
      break;
    case 3:
      console.log("Maret");
      break;
    case 4:
      console.log("April");
      break;
    case 5:
      console.log("Mei");
      break;
    case 6:
      console.log("Juni");
      break;
    case 7:
      console.log("Juli");
      break;
    case 8:
      console.log("Agustus");
      break;
    case 9:
      console.log("September");
      break;
    case 10:
      console.log("Oktober");
      break;
    case 11:
      console.log("November");
      break;
    case 12:
      console.log("Desember");
      break;
    default:
      break;
  }
};
bulan(4);

console.log("==================");
// Soal 24
let jumlahHari = (x) => {
  switch (x) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log("Memiliki 31 hari");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("Memiliki 30 hari");
      break;
    default:
      console.log("Memiliki 28/29 hari");
      break;
  }
};
jumlahHari(7);

console.log("==================");
// Soal 25
let area;
let luas = (x, r, l, w, a, t) => {
  switch (x) {
    case 1:
      area = 3.14 * r * r;
      console.log(`luas area: ${area}`);
      break;
    case 2:
      area = l * w;
      console.log(`luas area: ${area}`);
      break;
    case 3:
      area = 0.5 * a * t;
      console.log(`luas area: ${area}`);
      break;
    default:
      break;
  }
};

luas(1, 5, 5, 5, 1, 5);

console.log("==================");
// Soal 26
let aritmatika = (a, b, c) => {
  switch (c) {
    case 1:
      console.log(`total untuk soal pertambahan: ${a + b}`);
      break;
    case 2:
      console.log(`total untuk soal pengurangan: ${a - b}`);
      break;
    case 3:
      console.log(`total untuk soal perkalian: ${a * b}`);
      break;
    case 4:
      console.log(`total untuk soal pembagian: ${a / b}`);
      break;

    default:
      console.log("Salah memasukan input");
      break;
  }
};

aritmatika(10, 2, 3);
