// Soal 1
let stoper = 10;
for (let i = 1; i <= stoper; i++) {
  console.log(i);
}

console.log("==================");
// Soal 2
let total = 0;
for (let j = 1; j <= 10; j++) {
  total += j;
}
console.log(total);

console.log("==================");
// Soal 3

function menghitung() {
  let total = 0;
  let stoper = 7;
  for (let i = 1; i <= stoper; i++) {
    total += i;
  }
  return total;
}
console.log(menghitung());

console.log("==================");
// Soal 4

let average = (x) => {
  let total = 0;
  let avg;
  for (let i = 0; i <= x; i++) {
    total += i;
    avg = total / 10;
  }
  return avg;
};
console.log(average(10));

console.log("==================");
// Soal 5

let urutAngka = (x) => {
  for (let i = 1; i <= x; i++) {
    console.log(`Bilangan: ${i} pangkat tiga dari ${i} adalah ${Math.pow(i, 3)}`);
  }
};
urutAngka(5);

console.log("==================");
// Soal 6

let perkalian = (x, y) => {
  for (let i = 1; i <= x; i++) {
    console.log(`${y} x ${i} = ${i * y}`);
  }
};
perkalian(10, 15);

console.log("==================");
// Soal 7

let perkalianGanda = (n) => {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= n; j++) {
      if (j <= n - 1) {
        console.log(`${i} x ${j} = ${i * j}`);
      } else {
        console.log(`${i} x ${j} = ${i * j}`);
      }
    }
  }
};
perkalianGanda(8);

console.log("==================");
// Soal 8

let bilanganGanjil = (n) => {
  let sum = 0;
  console.log(`Masukan jumlah : ${n}`);
  for (let i = 1; i <= n; i++) {
    console.log(2 * i - 1);
    sum += 2 * i - 1;
  }
  console.log(`Jumlah bilangan asli ganjil s/d ${n} : ${sum}`);
};
bilanganGanjil(10);

console.log("==================");
// Soal 9

let segitigaSiku = (rows) => {
  let txt = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      txt += "*";
    }
    txt += "\n";
  }
  return txt;
};
console.log(segitigaSiku(10));

console.log("==================");
// Soal 10

let sikuAngka = (x) => {
  let total = 0;
  for (let i = 1; i <= x; i++) {
    // console.log(i);
    for (let j = 1; j <= i; j++) {
      total += j;
    }
    total += "\n";
  }
  return total;
};
console.log(sikuAngka(10));

console.log("==================");
// Soal 11
function segitigaAngka(panjang) {
  let hasil = "";
  for (let i = 1; i <= panjang; i++) {
    for (let j = 1; j <= i; j++) {
      hasil += i;
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitigaAngka(10));

console.log("==================");
// Soal 12

let baris = (rows) => {
  let k = 1;
  console.log(`Masukan jumlah baris: ${rows}`);
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) console.log(k++);
    {
      console.log("\n");
    }
  }
};
baris(4);

// console.log("==================");
// // Soal 13

// function piramid4(rows) {
//   let t = 1;
//   console.log(`Masukan jumlah baris: ${rows}`);
//   let spc = rows + 4 - 1;
//   for (let i = 1; i <= rows; i++) {
//     for (let k = spc; k > 1; k--) {
//       console.log(" ");
//     }
//     for (let j = 1; j <= i; j++) {
//       console.log(t++);
//       console.log("\n");
//       spc--;
//     }
//   }
// }
// piramid4(4);
