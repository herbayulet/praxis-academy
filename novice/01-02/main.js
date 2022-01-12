// tipe pengkondisian If ... if else
let hour = 12;
if (hour >= 17) {
  console.log("selamat sore");
} else if (hour >= 12) {
  console.log("selamat siang");
} else {
  console.log("selamat pagi");
}
console.log("==================");
// tipe pengkondisian switch
let jam = 15;
switch (jam) {
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
console.log("==================");
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
console.log("==================");
// tipe looping for in
const peserta = { id: 1, nama: "herbayu", kelas: "Frontend-React" };

let namaPeserta = "";
for (let x in peserta) {
  namaPeserta += peserta[x] + " ";
}
console.log(namaPeserta);
console.log("==================");
// tipe looping for of
const makanans = ["Bakso ", "Mie Ayam ", "Ketoprak ", "Soto ", "Gado-gado "];
let namaMakanan = "";
for (const makanan of makanans) {
  namaMakanan += makanan;
}
console.log(namaMakanan);
console.log("==================");
// looping dengan while
let text = "";
let i = 0;
while (i < makanans.length) {
  text += "nama-nama makanan " + makanans[i] + "\n";
  i++;
}
console.log(text);
console.log("==================");
// looping dengan while do
let txt = "";
let j = 2;

do {
  txt += "Nama-nama Makanan " + makanans[j];
  j++;
} while (makanans[j] < 5);
{
  console.log(txt);
}

// Case seko Mas Nizar
console.log("==================");

const namaKades = "Sugiono";
const namaCamat = "Agus";
const jabatan = "KADES";

if (jabatan !== "KADES") {
  console.log(namaKades);
} else {
  console.log(namaCamat);
}

console.log("==================");

const apakahBoss = true;
const apakahMiniBoss = false;

if (apakahBoss && !apakahMiniBoss) {
  console.log("Naik Level");
} else {
  console.log("Masih Cupu");
}
