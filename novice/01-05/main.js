// Data array
let buahBuahan = ["Anggur ", "Jambu ", "Jeruk ", "Kiwi ", "Mangga "];
let tulis = "";
for (let i in buahBuahan) {
  tulis += buahBuahan[i];
}
console.log(tulis);

// array method shift dan unshift
let fruit = buahBuahan.shift(); /*menghapus index setelah 0 dalam array*/
let fruits = buahBuahan.unshift("Rambutan"); /*menambah data dalam array dan ditempatkan sebagai index ke 0 dalam array*/
console.log(fruit);
console.log(fruits);

// mencari value dalam array dengan mengakses index nya dan menambah data ke dalam array
let sawi = buahBuahan[2];
let timun = buahBuahan.push("Belimbing"); /*menambah data ke dalam array tapi ditempatkan ke index terakhir*/
console.log(sawi);
console.log(timun);

// data object
let jurusan = [
  {
    id: 1,
    nama: "Herbayu",
    jurusan: " Akuntansi",
  },
  {
    id: 2,
    nama: "Tasaky",
    jurusan: " Komunikasi",
  },
  {
    id: 3,
    nama: "Danila",
    jurusan: " Mice",
  },
];
jurusan.forEach((key, value, map) => {
  console.log(`${key}: ${value}`);
});

// object
let salaries = new Map([
  ["Herbayu", 50000000],
  ["Adit", 5000000],
  ["Angger", 2500000],
]);

for (let gaji of salaries) {
  console.log(gaji.toString());
}

let range = {
  from: 1,
  to: 10,
};

// menggunakan perulangan menginisiasi this
range[Symbol.iterator] = function () {
  // ini mengembalikan iterator object
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};
for (let num of range) {
  console.log(num);
}
