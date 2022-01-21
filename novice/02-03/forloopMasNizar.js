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
      s += 1 / i;
    } else if (i == n) {
      console.log(`1/${i}`);
      s += 1 / i;
    }
    // return s[i];
  }
  console.log(`Jumlah deret angka ${n} : ${s}`);
};
deretArmonik(5);

console.log("\n");
console.log("Soal Nomor 20");
// soal 20

console.log("\n");
console.log("Soal Nomor 21");
// soal 21

let totalDeret = (n, t) => {
  let sum = 0;
  console.log(`Masukan nomor : ${n}`);
  for (let i = 1; i <= n; i++) {
    sum += t;
    console.log(t);
    t = t * 10 + 9;
  }
  console.log(`Total jumlah deret: ${sum}`);
};
totalDeret(5, 9);

console.log("\n");
console.log("Soal Nomor 22");
// soal 22

console.log("\n");
console.log("Soal Nomor 23");
// soal 23

let menghitungDeret = (n, x) => {
  let sum = 1;
  let no_row = 1;
  console.log(`Masukan nilai: ${x}`);
  console.log(`Masukan jumlah suku: ${n}`);
  for (let i = 1; i < n; i++) {
    no_row *= x / i;
    sum += no_row;
  }
  console.log(`Jumlahnya adalah : ${sum}`);
};
menghitungDeret(5, 3);

console.log("\n");
console.log("Soal Nomor 24");
// soal 24

let tambahDeret = (n, x) => {
  let sum = x;
  let m = -1;
  let mm;
  let nn;
  let ctr;
  console.log(`Masukan nilai : ${x}`);
  console.log(`Masukan jumlah suku : ${n}`);
  for (let i = 1; i < n; i++) {
    ctr = 2 * i + 1;
    mm = Math.pow(x, ctr);
    nn = mm * m;
    console.log(`Nilai dari ${nn}`);
    sum += nn;
    m *= -1;
  }
  console.log(`Jumlah nya adalah = ${sum}`);
};
tambahDeret(5, 2);

console.log("\n");
console.log("Soal Nomor 25");
// soal 25

let sukuBilangan = (n) => {
  let sum = 0;
  console.log(`Masukan jumlah suku : ${n}`);
  for (let i = 1; i <= n; i++) {
    console.log(`Kuadrat asli sampai dengan ${n} suku adalah : ${i * i} `);
    sum += i * i;
  }
  console.log(`Jumlah bilangan kuadrat sampai dengan ${n} suku = ${sum} `);
};
sukuBilangan(5);

console.log("\n");
console.log("Soal Nomor 26");
// soal 26

let juder = (n, t) => {
  let sum = 0;
  console.log(`Masukan jumlah suku : ${n}`);
  for (let i = 1; i <= n; i++) {
    console.log(t);
    if (i < n) {
      console.log("+ ");
    }
    sum += t;
    t = t * 10 + 1;
  }
  console.log(`jumlahnya adalah : ${sum}`);
};
juder(5, 1);

console.log("\n");
console.log("Soal Nomor 27");
// soal 27

let bilanganPerfect = (x, sum) => {
  console.log(`Masukan nomor: ${x}`);
  for (let i = 1; i < x; i++) {
    if (x % i == 0) {
      sum += i;
      console.log(`Pembagi positif: ${i}`);
    }
  }
  console.log(`Jumlah pembaginya adalah: ${sum}`);
  if (sum == x) {
    console.log(`Jadi, jumlahnya sempurna`);
  } else {
    console.log(`Jumlahnya tidak sempurna`);
  }
};
bilanganPerfect(56, 0);

console.log("\n");
console.log("Soal Mas Nizar");
// soal Mas Nizar

const data = [
  {
    id: "102244",
    name: "America",
    location: {
      latitude: 1.4564,
      longitude: 0.45787,
    },
  },
  {
    id: "103344",
    name: "Netherland",
    location: {
      latitude: 1.6739,
      longitude: 0.99987,
    },
  },
  {
    id: "105544",
    name: "France",
    location: {
      latitude: 1.8839,
      longitude: 0.23487,
    },
  },
];

// data.forEach((i) => {
//   console.log(i.name);
//   console.log(i.location.latitude);
// });
for (let i = 0; i < data.length; i++) {
  console.log(data[i].name);
}

console.log("\n");
console.log("Soal Nomor 28");
// soal 28

let bilanganSempurna = () => {
  let mn = 1;
  let mx = 56;
  let sum;
  let n;
  console.log(`Masukan rentang atau nomor awal: ${mn}`);
  console.log(`Masukan rentang nomor akhir: ${mx}`);
  for (n = mn; n <= mx; n++) {
    let i = 1;
    sum = 0;
    while (i < n) {
      if (n % i == 0) sum += i;
      i++;
    }
    if (sum == n) {
      console.log(`Angka sempurna dalam kisaran yang diberikan: ${n}`);
    } else {
      // console.log("\n");
    }
  }
};
bilanganSempurna();

console.log("\n");
console.log("Soal Nomor 29");
// soal 29

let solusi = (num) => {
  let sum = 0;
  let temp;
  let r;
  console.log(`Masukan nomor: ${num}`);
  for (temp = num; num != 0; num /= 10) {
    r = num % 10;
    sum += Math.pow(r, 3);
  }
  console.log(r);
  console.log(sum);
  sum === temp ? console.log(`${temp} adalah bilangan armstrong`) : console.log(`${temp} adalah bukan bilangan armstrong & jawabannya masih salah`);
};
solusi(153);

console.log("\n");
console.log("Soal Nomor 30");
// soal 30

let angkaAmstrong = (s, l) => {
  let r;
  let sum;
  let temp;
  let num;
  console.log(`Masukan nomor awal: ${s}`);
  console.log(`Masukan nomor awal: ${l}`);
  for (num = s; num <= l; num++) {
    temp = num;
    sum = 0;
    while (temp != 0) {
      r = temp % 10;
      temp /= 10;
      sum += Math.pow(r, 3);
    }
  }
  sum == num ? console.log(`Nomor Armstrong dalam rentang yang diberikan adalah: ${num}`) : console.log("Bukan nomor amstrong dan jawabannya masih salah");
};

angkaAmstrong(1, 1000);
