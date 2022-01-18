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

// Soal 2
function dibagiDua(x) {
  if (x % 2 === 0) {
    console.log("bilangan ini adalah genap");
  } else {
    console.log("bilangan ini adalah ganjil");
  }
}
dibagiDua(15);

// Soal 3
function posNeg(x) {
  if (x >= 0) {
    console.log("Angka ini positive");
  } else {
    console.log("Angka ini negative");
  }
}
posNeg(15);

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

// Soal 5
function batasUmur(x) {
  if (x < 21) {
    console.log("Maaf, anda tidak mendapatkan suara anda");
  } else {
    console.log("Selamat! Anda berhak mendapatkan suara anda");
  }
}
batasUmur(21);

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

// Soal 8
