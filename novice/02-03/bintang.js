let tangga = (x) => {
  let s = 0;
  for (let a = 1; a <= 5; a++) {
    for (let b = 1; b <= a; b++) {
      s += a;
    }
    s += "\n";
  }
  for (let i = 5; i >= x; i--) {
    for (let j = 1; j <= i; j++) {
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
