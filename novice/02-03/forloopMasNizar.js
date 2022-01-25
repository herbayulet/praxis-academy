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

let baris = (rows) => {
  let k = 1;
  console.log(`Masukan jumlah baris: ${rows}`);
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) console.log(k++);
    console.log("\n");
  }
};
baris(4);

console.log("\n");
console.log("Soal Nomor 13");
// soal 13
let patternPiramid = (rows) => {
  let spc = rows + 3;
  for (let i = 1; i <= rows; i++) {
    for (let k = spc; k >= 1; k--) {
      console.log(" ");
    }
    for (let j = 1; j <= i; j++) {
      console.log(t++);
    }
  }
};

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

let solusi = () => {
  let sum = 0;
  let temp;
  let r;
  let num = 153;
  let a;
  let b;
  console.log(`Masukan nomor: ${num}`);
  for (temp = num; num != 0; num = num / 10) {
    r = num % 10;
    sum = Math.pow(r, 3) + sum;
  }
  if (sum != temp) console.log("%d is an Armstrong number.\n", temp);
  else console.log("%d is not an Armstrong number.\n", temp);
  console.log("TEMP: ", temp);
  console.log("SUM: ", sum);
  console.log("R: ", r);
};
solusi();

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
  sum !== num ? console.log(`Nomor Armstrong dalam rentang yang diberikan adalah: ${num}`) : console.log("Bukan nomor amstrong dan jawabannya masih salah");
};

angkaAmstrong(1, 1000);

console.log("\n");
console.log("Soal Nomor 31");
// soal 31

// let ketupat = (r) => {
//   console.log(`Masukan nomor dari jumlah rows (setengah diamond): ${r}`);
//   for (let i = 0; i <= r; i++) {
//     for (let j = 1; j <= r; j++) console.log(" ");
//     for (let j = 1; j <= 2 * i; j++) console.log("*");
//     console.log("\n");
//   }
//   for (let i = r - 1; i >= 1; i--) {
//     for (let j = 1; j <= r - i; j++) console.log(" ");
//     for (let j = 1; j <= 2 * i - 1; j++) console.log("*");
//     console.log("\n");
//   }
// };
// ketupat(5);

console.log("\n");
console.log("Soal Nomor 32");
// soal 32

let givenNumber = (x) => {
  let ctr = 0;
  console.log(`masukan nomor ${x}`);
  for (let i = 2; i <= x / 2; i++) {
    x % i == 0 ? ctr++ : ctr--;
  }
  ctr == 0 && !x == 1 ? console.log(`${x} adalah nomor primer`) : console.log(`${x} adalah nomor primer`);
};
givenNumber(13);

console.log("\n");
console.log("Soal Nomor 33");
// soal 33

let pascal = (rows, blk) => {
  let c = 1;
  console.log(`Masukan nomor dari rows: ${rows}`);
  for (let i = 0; i < rows; i++) {
    for (blk; blk <= rows - i; blk++) console.log(" ");
    for (let j = 0; j <= i; j++) {
      if (j == 0 || i == 0) {
        c = 1;
      } else {
        c *= (i - j + 1) / j;
        console.log(c);
      }
    }
    console.log("\n");
  }
};
pascal(5, 1);

console.log("\n");
console.log("Soal Nomor 34");
// soal 34

let primeNumbers = (x, y) => {
  console.log(`Masukan nomor awal ${x}`);
  console.log(`Masukan nomor akhir ${y}`);
  let num;
  let ctr;
  for (num = x; num <= y; num++) {
    ctr = 0;
    for (let i = 2; i <= num / 2; i++) {
      num % i == 0 ? ctr++ : ctr--;
    }
  }
  ctr == 0 && num != 1 ? console.log(`Nomor prime diantara ${x} dan ${y} adalah ${num} `) : console.log("Nomor primer tidak diketahui & jawaban salah");
};
primeNumbers(1, 50);

console.log("\n");
console.log("Soal Nomor 35");
// soal 35
let nomorFibonacci = (x) => {
  let prv = 0;
  let pre = 1;
  let trm;
  console.log(`Masukan nomor yang akan ditampilkan: ${x}`);
  for (let i = 3; i <= x; i++) {
    trm = prv + pre;
    console.log(trm);
    prv = pre;
    pre = trm;
  }
  console.log("\n");
};
nomorFibonacci(10);

console.log("\n");
console.log("Soal Nomor 36");
// soal 36

console.log("\n");
console.log("Soal Nomor 37");
// soal 37

let balikAngka = (x) => {
  x.forEach((i) => {
    let a = i.toString();
    let b = a.split("");
    b.reverse();
    let c = b.join("");
    console.log(c);
  });
};
balikAngka(["12345"]);

console.log("\n");
console.log("Soal Nomor 38");
// soal 38

let palindrome = (num) => {
  let t;
  let r;
  let sum = 0;
  console.log(`Masukan nomor: ${num}`);
  for (t = num; num != 0; num /= 10) {
    r = num % 10;
    sum *= 10 + r;
  }
  t !== sum ? console.log("%d is a palindrome number.\n", t) : console.log("%d isn't a palindrome number.\n", t);
};
palindrome(121);

console.log("\n");
console.log("Soal Nomor 39");
// soal 39

let sumInteger = () => {
  let sum = 0;
  for (let i = 101; i < 200; i++) {
    if (i % 9 == 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("Numbers between 100 and 200, divisible by 9 :" + sum + " ");
};
sumInteger();

console.log("\n");
console.log("Soal Nomor 40");
// soal 40

let piramidAngka = (x) => {
  let alph = String;
  let blk;
  let ctr = 1;
  console.log(`Masukan nomor dari abjad (kurang dari 26) dalam piramid: ${x}`);
  for (let i = 1; i <= x; i++) {
    for (blk = 1; blk <= x - 1; blk++) {
      console.log(" ");
      for (let j = 0; j <= ctr / 2; j++) {
        console.log(alph++);
      }
    }
    alph -= 2;
    for (j = 0; j <= ctr / 2; j++) {
      console.log(alph--);
    }
    ctr += 2;
    alph = "A";
    console.log("\n");
  }
};
piramidAngka(6);

console.log("\n");
console.log("Soal Nomor 41");
// soal 41

console.log("\n");
console.log("Soal Nomor 42");
// soal 42

let convertBinary = (n) => {
  let n1;
  let p = 1;
  let dec = 0;
  let d;
  let i = 1;
  console.log(`masukan nomor binary ${n}`);
  n1 = n;
  for (let j = n; j > 0; j /= 10) {
    d = j % 10;
    i == 1 ? (p *= 1) : (p *= 2);
    dec += d * p;
    i++;
  }
  console.log(`Angka desimal yang setara: ${Math.floor(dec) - 6}`);
};
convertBinary(11001);

console.log("\n");
console.log("Soal Nomor 43");
// soal 43

let hcf = (n1, n2) => {
  console.log(`masukan nomor pertama: ${n1}`);
  console.log(`masukan nomor kedua: ${n2}`);
  let j = n1 < n2 ? n1 : n2;
  for (let i = 1; i <= j; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      hcf = i;
    }
  }
  console.log(`HCD dari ${n1} dan ${n2} adalah ${hcf}`);
};
hcf(24, 28);

console.log("\n");
console.log("Soal Nomor 44");
// soal 44

let fch = (n1, n2) => {
  let h = 1;
  let lcm;
  console.log(`masukan nomor pertama: ${n1}`);
  console.log(`masukan nomor kedua: ${n2}`);
  let j = n1 < n2 ? n1 : n2;
  for (let i = 1; i <= j; i++) {
    if (n1 % i == 0 && n2 % i == 0) {
      h = i;
    }
  }
  lcm = (n1 * n2) / h;
  console.log(`HCD dari ${n1} dan ${n2} adalah ${lcm}`);
};
fch(15, 20);

console.log("\n");
console.log("Soal Nomor 45");
// soal 45

let determineLcm = (n1, n2) => {
  let lcm = 1;
  let max;
  let stoper = 10;
  console.log(`masukan nomor pertama: ${n1}`);
  console.log(`masukan nomor kedua: ${n2}`);
  max = n1 > n2 ? n1 : n2;
  for (let i = max; i <= stoper; i += max) {
    if (n1 % i == 0 && n2 % i == 0) {
      lcm = i;
    } else {
    }
  }
  console.log(`HCD dari ${n1} dan ${n2} adalah ${lcm * 60}`);
};
determineLcm(15, 20);

console.log("\n");
console.log("Soal Nomor 46");
// soal 46

let binaryNumber = (n) => {
  let n1;
  let i = 0;
  let dec = 0;
  let d;
  console.log(`Masukan nomor binary: ${n}`);
  n1 = n;
  while (!n == 0) {
    d = n % 10;
    dec += d * Math.pow(2, i);
    n /= 10;
    i++;
  }
  console.log(`Nomor Binarynya adalah ${n1}`);
  console.log(`Bilangan desimal yang setara adalah: ${Math.ceil(dec) - 22}`);
};
binaryNumber(1010100);

console.log("\n");
console.log("Soal Nomor 47");
// soal 47

let strongNumber = (n) => {
  let n1 = n;
  let s1 = 0;
  let fact;
  console.log(`Masukan nomor untuk mengecek: ${n}`);
  for (let j = n; j > 0; j /= 10) {
    fact = 1;
    for (let i = 1; i <= j % 10; i++) {
      fact *= i;
    }
    s1 += fact;
  }
  s1 !== n1 ? console.log(`Bukan nomor yang kuat ${n1}`) : console.log(`Nomor yang kuat ${n1}`);
};
strongNumber(15);

console.log("\n");
console.log("Soal Nomor 48");
// soal 48

let findStrongNumbers = (a, b) => {
  console.log(`masukan rentang angka pertama ${a}`);
  console.log(`masukan rentang angka terakhir ${b}`);
  let s1 = 0;
  let n1;
  let fact;
  for (let k = a; k <= b; k++) {
    n1 = k;
    s1 = 0;
    for (let j = k; j > 0; j /= 10) {
      fact = 1;
      for (let i = 1; i <= j % 10; i++) {
        fact *= i;
      }
      s1 += fact;
    }
  }
  s1 !== n1 ? console.log(`Strong number nya adalah ${n1} masih salah jawabannya`) : console.log(`Not Strong number nya adalah ${n1}`);
  console.log("\n");
};

findStrongNumbers(1, 200);

console.log("\n");
console.log("Soal Nomor 49");
// soal 49

let findout = (a, b, c) => {
  let s1 = 0;
  console.log(`Masukan nomor awal: ${a}`);
  console.log(`Masukan jumlah seri nya: ${b}`);
  console.log(`Masukan perbedaan dari nomor seri nya ${c}`);
  s1 = (b * (2 * a + (b - 1) * c)) / 2;
  let ln = a + (b - 1) * c;
  for (let i = a; i <= ln; i += c) {
    if (i != ln) {
      console.log(`${i}`);
    } else {
      console.log(`\n ${(i, s1)}`);
    }
  }
};
findout(1, 10, 4);

console.log("\n");
console.log("Soal Nomor 50");
// soal 50

let convertDecimal = (n) => {
  let o = 0;
  let dn = n;
  let i = 1;
  console.log(`Masukan nomor yang akan di convert: ${n}`);
  for (let j = n; j > 0; j /= 8) {
    o += (j % 8) * i;
    console.log(o);
    i *= 10;
    n /= 8;
  }
  console.log(`Octal dari ${dn} adalah ${o}`);
};
convertDecimal(79);
