let tangga = (x) => {
  let s = "";
  for (let a = 0; a <= 5; a++) {
    for (let b = 0; b <= a; b++) {
      s += ">";
    }
    s += "\n";
  }
  for (let i = 5; i >= x; i--) {
    for (let j = 0; j <= i; j++) {
      s += ">";
    }
    s += "\n";
  }
  return s;
};
console.log(tangga(0));

var s = "";
var b = 9;
for (var h = 1; h <= b; h++) {
  for (var i = 1; i <= b - h; i++) {
    s += " ";
  }
  for (var j = 1; j < 2 * h; j++) {
    s += "^";
  }
  s += "\n";
}

console.log(s);
