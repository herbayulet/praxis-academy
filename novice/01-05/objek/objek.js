// Objek .assign() menyalin semua propertidari suatu objek
function test() {
  "use strict";

  let obj1 = { a: "bayu", b: { c: "pratama" } };
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2)); // 1 { "a": bayu, "b": { "c": pratama}}

  obj1.a = "herbayu";
  console.log(JSON.stringify(obj1)); // 2 { "a": herbayu, "b": { "c": pratama}}
  console.log(JSON.stringify(obj2)); // 3 { "a": bayu, "b": { "c": pratama}}

  obj1.a = "Herbayu";
  console.log(JSON.stringify(obj1)); // 4 { "a": Herbayu, "b": { "c": pratama}}
  console.log(JSON.stringify(obj2)); // 5 { "a": bayu, "b": { "c": pratama}}

  obj2.a = "Herbayoe";
  console.log(JSON.stringify(obj1)); // 6 { "a": Herbayu, "b": { "c": pratama}}
  console.log(JSON.stringify(obj2)); // 7 { "a": Herbayoe, "b": { "c": pratama}}

  obj2.b.c = "Nugroho";
  console.log(JSON.stringify(obj1)); // 8 { "a": Herbayu, "b": { "c": Nugroho}}
  console.log(JSON.stringify(obj2)); // 9 { "a": Herbayoe, "b": { "c": Nugroho}}

  // Deep Clone karena tidak ada .assign() maka hasilnya tidak berubah
  obj1 = { a: 0, b: { c: 0 } };
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
}

test();
