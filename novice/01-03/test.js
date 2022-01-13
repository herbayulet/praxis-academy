function cafeBar(name, age, money) {
  if (name === "") {
    console.log("Anda Tidak Boleh Masuk!");
  } else if ((name !== "" && age <= 17) || money === 50000) {
    // console.log(money)
    if (money >= 50000) {
      let sisa = money - 50000;
      console.log(`Anda bisa pesan Minum Juice. Dan sisa uang anda ${sisa}`);
    } else {
      console.log("Uang Anda Tidak Cukup, Mohon pulang dulu ya");
    }
  } else if ((name !== "" && age >= 17) || money === 300000) {
    if (money >= 300000) {
      let sisa = money - 300000;
      console.log(`Anda bisa pesan Minum Anggur. Dan sisa uang anda ${sisa}`);
    } else {
      console.log("Uang Anda Tidak Cukup, Mohon pulang dulu ya");
    }
  }
  // }else if(money < 50000){
  //     console.log("Uang Anda Tidak Cukup, Mohon pulang dulu ya");
  // }
  // }else if( money >50000 && money <= 300000){
  //     if(money )
  //     console.log(`Anda Bisa Pesan Minum. Dan sisa uang anda ${sisaUang}`)
  // }
}

cafeBar("", 17, 50000);
cafeBar("soleh", 16, 5000);
cafeBar("wahyu", 19, 500000);
cafeBar("wahyu", 19, 300000);
