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

let x = 0;
let array = Array();

let menambahArray = () => {
  array[x] = document.getElementById("tes1").value;
  alert(`Element ${array[x]} telah ditambahkan ke index ${x}`);
  x++;
  document.getElementById("tes1").value = "";
};

let melihatArray = () => {
  let e = "<hr/>";

  for (let y = 0; y < array.length; y++) {
    e += `Element ${y} = ${array[y]} <br/>`;
  }
  document.getElementById("hasil").innerHTML = e;
};

console.log("\n");
console.log("Soal Nomor 14");
// soal 14

let hapusDuplikat = (num) => {
  let x,
    len = num.length,
    out = [],
    obj = {};

  for (x = 0; x < len; x++) {
    obj[num[x]] = 0;
    // console.log(obj);
  }
  for (x in obj) {
    out.push(x);
  }
  return out;
};
let Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
let result1 = hapusDuplikat(Mynum);
console.log(Mynum);
console.log(result1.join(","));

console.log("\n");
console.log("Soal Nomor 15");
// soal 15

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function Ordinal(n) {
  let o = ["th", "st", "nd", "rd"],
    x = n % 100;
  // console.log(x);
  return x + (o[(x - 20) % 10] || o[x] || o[0]);
}

for (n = 0; n < color.length; n++) {
  let ordinal = n + 1;

  let output = Ordinal(ordinal) + " choice is " + color[n] + ".";

  console.log(output);
}

console.log("\n");
console.log("Soal Nomor 16");
// soal 16

function tahun_tahun(a, b) {
  let jarak_tahun = [];
  for (let i = a; i <= b; i += 4) {
    jarak_tahun.push(i);
  }
  console.log(jarak_tahun);
}
tahun_tahun(2000, 2012);

console.log("\n");
console.log("Soal Nomor 17");
// soal 17

function acak(n) {
  let ctr = n.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    // console.log(index);
    ctr--;
    temp = n[ctr];
    n[ctr] = n[index];
    n[index] = temp;
  }
  return n;
}
let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(acak(myArray));

console.log("\n");
console.log("Soal Nomor 18");
// soal 18

function binary_Search(items, value) {
  let firstIndex = 0,
    lastIndex = items.length - 1,
    middleIndex = Math.ceil((lastIndex + firstIndex) / 2);

  while (items[middleIndex] != value && firstIndex < lastIndex) {
    if (value < items[middleIndex]) {
      lastIndex = middleIndex - 1;
    } else if (value > items[middleIndex]) {
      firstIndex = middleIndex + 1;
    }
    middleIndex = Math.ceil((lastIndex + firstIndex) / 2);
  }

  return items[middleIndex] != value ? -1 : middleIndex;
}
let items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1));
console.log(binary_Search(items, 5));

console.log("\n");
console.log("Soal Nomor 19");
// soal 19

let totalDuaArray = (a, b) => {
  let arr = [];
  let ctr = 0;
  while (ctr < a.length && ctr < b.length) {
    arr.push(a[ctr] + b[ctr]);
    ctr++;
  }
  return arr;
};
console.log(totalDuaArray([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

console.log("\n");
console.log("Soal Nomor 20");
// soal 20

let mencariDuplikat = () => {
  const abaru = [1, 2, -2, 4, 5, 4, 7, 8, 7, 71, 7, 3, 6];
  const set1 = [...new Set(abaru.filter((value, index, z) => z.indexOf(value) !== index))];
  return set1;
};
console.log(mencariDuplikat());

console.log("\n");
console.log("Soal Nomor 21");
// soal 21

let flatten = (a) => {
  let a1 = a.join().split(",").map(Number);
  return a1;
};
console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));

console.log("\n");
console.log("Soal Nomor 22");
// soal 22

function union(arra1, arra2) {
  let a = arra1.concat(arra2);
  let b = [...new Set(a.filter((value, index, z) => z.indexOf(value) !== index[(1, 2)]))];
  return b.sort();
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));

console.log("\n");
console.log("Soal 23");
// soal 23

function differenceOf2Arrays(array1, array2) {
  // let a = array1.filter((d) => !array2.includes(d));
  // let b = array2.filter((x) => !array1.includes(x));
  // let a = array1.join(",").toString();
  let b = array2.toString().split(",").map(Number);
  let b1 = b.filter((x) => !array1.includes(x));
  let a1 = array1.filter((d) => !b.includes(d));
  // console.log(a1);
  // console.log(b);
  // console.log(b);
  // let hasil = [];
  // hasil.push(b);
  // console.log(a1);
  let c = a1.concat(b1);
  return c;

  // let b1 = array2.filter((x) => !array1.includes(x));
  // let c = a1.concat(b1);
  // return c;
}
console.log(differenceOf2Arrays([1, 2, 3], [100, 2, 1, 10]));
console.log(differenceOf2Arrays([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));

console.log("\n");
console.log("Soal 24");
// soal 24

let filterArray = (arr) => {
  let hasil = [];
  if (arr == Number) {
    arr >= 2;
    hasil.push(arr);
  }
  return hasil;
};

console.log(filterArray([NaN, 0, 15, false, -22, "", undefined, 47, null]));

function filter_array(test_array) {
  let index = 0;
  let arr_length = test_array ? test_array.length : 0;
  // console.log(arr_length);
  let resIndex = -1;
  let result = [];

  while (index++ < arr_length) {
    let value = test_array[index];
    // console.log(value);

    if (value) {
      result[++resIndex] = value;
    }
  }

  return result;
}
console.log(filter_array([NaN, 0, 15, false, -22, "", undefined, 47, null]));

console.log("\n");
console.log("Soal 25");
// soal 25

let library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", libraryID: 3245 },
];
for (let i = library.length; i >= 0; i--) {
  console.log(library[i]);
}

console.log("\n");
console.log("Soal 26");
// soal 26

function twoSum(nums, target_num) {
  const indexnum = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target_num) {
        indexnum.push(nums[i], nums[j]);
        return indexnum;
      }
    }
  }
}
console.log(twoSum([10, 20, 10, 40, 50, 60, 70], 50));

console.log("\n");
console.log("Soal 27");
// soal 27

var librarys = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", libraryID: 3245 },
];

librarys.forEach((i) => {
  console.log(`Title => ${[i.title]}, Author => ${[i.author]}`);
  // console.log(`author => ${[i.author]}`);
});

console.log("\n");
console.log("Soal 28");
// soal 28

let panjangString = (arr) => {
  let a1 = arr.concat().sort();
  let a = a1;
  if (arr[0] == "g" && arr[0] == "S") {
    for (let i = 0; i < a.length; i++) {}
    return a[i].charAt(0, i);
  } else {
    return arr;
  }
};
console.log(panjangString(["go", "google"]));

console.log(panjangString(["SQLInjection", "SQLTutorial"]));

console.log(panjangString(["abcd", "1234"]));

console.log("\n");
console.log("Soal 29");
// soal 29
