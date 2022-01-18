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
  var d;
  var x1;
  var x2;
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
console.log("Nomor 12 lewat dulu");

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
    console.log("Arepe misuh2 wae cokk");
  }
};
suhu(42);
