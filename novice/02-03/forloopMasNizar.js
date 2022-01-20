console.log("Soal Nomor 1");
// Soal 1
let stoper = 10;
for (let i = 1; i <= stoper; i++) {
  console.log(i);
}

console.log("\n");
console.log("Soal Nomor 2");
// Soal 2
let total = 0;
for (let j = 1; j <= 10; j++) {
  total += j;
}
console.log(total);

console.log("\n");
console.log("Soal Nomor 3");
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

console.log("\n");
console.log("Soal Nomor 4");
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

console.log("\n");
console.log("Soal Nomor 5");
// Soal 5

let urutAngka = (x) => {
  for (let i = 1; i <= x; i++) {
    console.log(`Bilangan: ${i} pangkat tiga dari ${i} adalah ${Math.pow(i, 3)}`);
  }
};
urutAngka(5);

console.log("\n");
console.log("Soal Nomor 6");
// Soal 6

let perkalian = (x, y) => {
  for (let i = 1; i <= x; i++) {
    console.log(`${y} x ${i} = ${i * y}`);
  }
};
perkalian(10, 15);

console.log("\n");
console.log("Soal Nomor 7");
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

console.log("\n");
console.log("Soal Nomor 8");
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

console.log("\n");
console.log("Soal Nomor 9");
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

console.log("\n");
console.log("Soal Nomor 10");
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

console.log("\n");
console.log("Soal Nomor 11");
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

console.log("\n");
console.log("Soal Nomor 12");
// Soal 12

// let baris = (rows) => {
//   let k = 1;
//   console.log(`Masukan jumlah baris: ${rows}`);
//   for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= i; j++) console.log(k++);
//     {
//       console.log("\n");
//     }
//   }
// };
// baris(4);

console.log("\n");
console.log("Soal Nomor 13");
// soal 13

console.log("\n");
console.log("Soal Nomor 14");
// soal 14

console.log("\n");
console.log("Soal Nomor 15");
// soal 15

let faktor5 = (x) => {
  let f = 1;
  for (let i = 1; i <= x; i++) {
    f *= i;
  }
  return f;
};
console.log(faktor5(5));

console.log("\n");
console.log("Soal Nomor 16");
// soal 16

let bilanganGenap = (x) => {
  let sum = 0;
  for (let i = 1; i <= x; i++) {
    console.log(`Bilangan genap : ${2 * i}`);
    sum += 2 * i;
  }
  return `Jumlah bilangan genap ke ${x} adalah ${sum}`;
};
console.log(bilanganGenap(5));

console.log("\n");
console.log("Soal Nomor 17");
// soal 17

console.log("\n");
console.log("Soal Nomor 18");
// soal 18

let jumlahDeret = (n) => {
  let sum = 1;
  let t = 1;
  let x = 2;
  let d;
  for (let i = 1; i <= n; i++) {
    d = 2 * i * (2 * i - 1);
    t = (-t * x * x) / d;
    sum = sum + t;
  }
  // console.log(d);
  // console.log(t);
  console.log(`Jumlahnya : ${sum} dan hasil nya rounded up`);
  console.log(`banyak nya suku = ${n}`);
  console.log(`Nilai x = ${x}`);
};
jumlahDeret(5);

console.log("\n");
console.log("Soal Nomor 19");
// soal 19

let deretArmonik = (n) => {
  let s = 0.0;
  console.log(`Masukan jumlah suku : ${n}`);
  for (let i = 1; i <= n; i++) {
    if (i < n) {
      console.log(`1/${i}`);
      s += 1 / s[i];
    } else if (i == n) {
      console.log(`1/${i}`);
      s += 1 / s[i];
    }
    // return s[i];
  }
  console.log(`Jumlah deret angka ${n} : ${s++}`);
};
deretArmonik(5);
