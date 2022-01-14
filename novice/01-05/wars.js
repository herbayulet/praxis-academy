function Iter(from, to) {
  this.from = from;
  this.to = to;
  this[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return {
            done: false,
            value: this.current++,
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };
  };
}

let arrLike = {
  0: "Zero",
  plus: "Plus",
  1: "One",
  2: "Two",
  anything: "Anything",
  length: 3,
};

let it = new Iter(3, 7);

let arr1 = Array.from(it);
let arr2 = Array.from(arrLike);

console.log(arr1); // [3, 4, 5, 6, 7]
console.log(arr2); // ["Zero", "One", "Two"]
