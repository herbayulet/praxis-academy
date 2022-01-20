let tangga = (x) => {
  let s = "";
  for (let a = 0; a <= 5; a++) {
    for (let b = 0; b <= a; b++) {
      s += "_";
    }
    s += "\n";
  }
  for (let i = 5; i >= x; i--) {
    for (let j = 0; j <= i; j++) {
      s += "_";
    }
    s += "\n";
  }
  return s;
};
console.log(tangga(0));
