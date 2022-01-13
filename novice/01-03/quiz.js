let name = "herbayu";
let age = 20;
let money = 50000;
let drink = "juice";
let drinks = "anggur";
let juice = 50000;
let anggur = 300000;

// CARA KE DUA
if (name === null || name === name) {
  if (name === null) {
    console.log("Anda tidak boleh masuk");
  } else if (name === name) {
    if (age <= 17) {
      console.log(`hanya boleh memesan ${drink} seharga ${juice}`);
    } else {
      console.log("Silahkan masuk");
      console.log(`Hanya boleh memesan ${drinks} seharga ${anggur}`);
    }
  }
}
if (money < juice && money < anggur) {
  console.log("Uang anda tidak cukup. Anda harus pulang");
} else {
  console.log("Jika anda membeli " + drink + " maka sisa uang anda sebesar " + (money - juice) + " dan jika anda membeli " + drinks + " maka sisa uang anda sebesar " + (money - anggur));
}
/*CARA PERTAMA*/
// if (age < 17) {
//   alert(`hanya boleh memesan ${drink} seharga ${juice}`);
// } else {
//   console.log("boleh memesan " + drinks + " seharga " + anggur);
// }

// if (money < juice && money < anggur) {
//   console.log("Uang anda tidak cukup. Anda harus pulang");
// } else {
//   console.log("Anda bisa pesan minum " + "Sisa uang anda " + (money - anggur));
// }

/*CARA KETIGA*/
// if (name === null || name === name) {
//   // tidak diperbolehkan lanjut ke step 2
//   if (name === null) {
//     console.log("anda tidak boleh masuk");
//     // diperbolehkan lanjut ke step 2
//   } else if (name === name) {
//     console.log("silahkan masuk");
//     if (age <= 17) {
//       console.log(`hanya boleh memesan ${drink}`);
//     } else {
//       console.log(`hanya boleh memesan ${drinks}`);
//     }
//   }
// } else if (money < juice && money < anggur) {
//   if (money < juice) {
//     console.log("Uang anda tidak cukup. Anda harus pulang");
//   } else if (money < anggur) {
//     console.log("Uang anda tidak cukup. Anda harus pulang");
//   } else {
//     console.log("anda bisa minum. Sisa uang anda " + money - (juice + anggur));
//   }
// }
