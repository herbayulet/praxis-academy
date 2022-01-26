console.log("Soal Nomor 1");
// soal 1
let is_array = function (input) {
  if (toString.call(input) === "[object Array]") return true;
  return false;
};
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

console.log("\n");
console.log("Soal Nomor 2");
// soal 2

let array_Clone = (arr1) => {
  return arr1.slice(0);
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

console.log("\n");
console.log("Soal Nomor 3");
// soal 3

let first = (Array, n) => {
  if (Array == null) {
    return [0];
  } else if (n == null) {
    return Array[0];
  } else if (n < 0) {
    return [];
  }
  return Array.slice(0, n);
};
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

console.log("\n");
console.log("Soal Nomor 4");
// soal 4
let last = (Array, n) => {
  if (Array == null) return [0];
  if (n == null) return Array[Array.length - 1];
  return Array.slice(Math.max(Array.length - n, 0));
};

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));

console.log("\n");
console.log("Soal Nomor 5");
// soal 5

let myColor = ["Merah", "Hijau", "Putih", "Hitam"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("+"));

console.log("\n");
console.log("Soal Nomor 6");
// soal 6
const num = "025468";
const result = [num[0]];

for (let x = 1; x < num.length; x++) {
  if (num[x - 1] % 2 === 0 && num[x] % 2 === 0) {
    result.push("-", num[x]);
  } else {
    result.push(num[x]);
  }
}
console.log(result.join(""));

console.log("\n");
console.log("Soal Nomor 7");
// soal 7

let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
let arr2 = [];
let min = arr1[0];
let pos;
let max = arr1[0];
for (i = 0; i < arr1.length; i++) {
  if (max < arr1[i]) max = arr1[i];
}

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1.length; j++) {
    if (arr1[j] != "x") {
      if (min > arr1[j]) {
        min = arr1[j];
        pos = j;
      }
    }
  }
  arr2[i] = min;
  arr1[pos] = "x";
  min = max;
}
console.log(arr2);

console.log("\n");
console.log("Soal Nomor 8");
// soal 8

let arrt = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i = 0; i < arrt.length; i++) {
  //   console.log(arrt[i]);
  for (let j = i; j < arrt.length; j++) {
    // console.log(arrt[j]);
    if (arrt[i] == arrt[j]) m++;
    // console.log(m);
    if (mf < m) {
      mf = m;
      //   console.log(mf);
      item = arrt[i];
      //   console.log(item);
    }
  }
  m = 0;
}
console.log(item + " ( " + mf + " times ) ");

console.log("\n");
console.log("Soal Nomor 9");
// soal 9

let acakNama = () => {
  let hasil = [];
  let str = "c";
  let UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let LOWER = "abcdefghijklmnopqrstuvwxyz";
  for (let x = 0; x < str.length; x++) {
    // console.log(str[x]);
    if (UPPER.indexOf(str[x]) !== -1) {
      hasil.push(str[x].toLowerCase());
    } else if (LOWER.indexOf(str[x] !== -1)) {
      hasil.push(str[x].toUpperCase());
    } else {
      hasil.push(str[x]);
    }
    return hasil;
  }
};
console.log(acakNama().join(""));

console.log("\n");
console.log("Soal Nomor 10");
// soal 10

let elements = (a) => {
  for (const i in a) {
    console.log(`row ${i}`);
    for (const j in a[i]) {
      console.log(" " + a[i][j]);
    }
  }
};
elements([
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
]);

console.log("\n");
console.log("Soal Nomor 11");
// soal 11

let sum_array = (Array) => {
  let sum = 0;
  let i = Array.length;
  // console.log(i);
  while (i--) {
    sum += Math.pow(Array[i], 2);
  }
  return sum;
};
console.log(sum_array([0, 1, 2, 3, 4]));

console.log("\n");
console.log("Soal Nomor 12");
// soal 12

let arrayBaru = () => {
  let a = [1, 2, 3, 4, 5, 6];
  let t = 0;
  let k = 1;
  for (let i = 0; i < a.length; i++) {
    t += a[i];
    k *= a[i];
  }
  return `Sum nya adalah: ${t} dan Productnya adalah: ${k}`;
};
console.log(arrayBaru());

console.log("\n");
console.log("Soal Nomor 13");
// soal 13
