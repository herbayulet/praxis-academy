const { default: jit } = require("tailwindcss/lib/jit");

// tipe pengkondisian If ... if else
let hour = 12;
if (hour >= 17) {
  console.log("selamat sore");
} else if (hour >= 12) {
  console.log("selamat siang");
} else {
  console.log("selamat pagi");
}

// tipe pengkondisian switch
switch (hour) {
  case 1:
    console.log("jangan begadang");
    break;
  case 7:
    console.log("selamat pagi");
    break;
  case 12:
    console.log("selamat siang");
    break;
  case 15:
    console.log("selamat sore");
    break;
  default:
    break;
}

// tipe looping for
let hari = new Date().getDay();
for (let i = 0; i <= hari; i++) {
  switch (i) {
    case 1:
      console.log("senin");
      break;
    case 2:
      console.log("selasa");
      break;
    case 3:
      console.log("rabu");
      break;
    default:
      break;
  }
}

// tipe looping for in
const peserta = { id: 1, nama: "herbayu", kelas: "Frontend-React" };

let namaPeserta = "";
for (let x in peserta) {
  namaPeserta += peserta[x] + " ";
}
console.log(namaPeserta);

// tipe looping for of
const makanans = ["Bakso", " Mie Ayam", " Ketoprak", " Soto", " Gado-gado"];
let namaMakanan = "";
for (const makanan of makanans) {
  namaMakanan += makanan;
}
console.log(namaMakanan);

// looping dengan while
let text = "";
let i = 0;
while (i <= makanans.length) {
  text += "Berbagai macam makanan sesuai index: " + [i] + "\n";
  i++;
}
console.log(text);

// looping dengan while do
let txt = "";
let j = 2;

do {
  txt += "nama-nama makanan" + makanans[j];
  j++;
} while (makanans[j] < 5);
{
  console.log(txt);
}
