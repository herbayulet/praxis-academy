// fungsi assign menyalin semua properti
const o1 = { a: "Frontend" };
const o2 = { b: "Backend" };
const o3 = { c: "Fullstack" };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: Frontend, b: Backend, c: Fullstack }

// fungsi create untuk membuat objek baru
let a = Object.create({});
let b = Object.create({});
a.id = 1;
b.name = "Herbayu";
console.log(a);
console.log(b);

const object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// function freeze
const employee = {
  name: "Herbayu",
  designation: "Frontend",
  address: {
    street: "Beji",
    city: "Depok",
  },
};

Object.freeze(employee); /*untuk membekukan value dari objek, akan tetapi bisa diubah ketika after .freze*/

employee.name = "Dani"; // fails silently in non-strict mode
employee.address.city = "Jaksel"; // attributes of child object can be modified

console.log(employee.address.city); // Output: "Noida"

//
var Animal = function () {};
Animal.prototype.eat = function () {
  console.log("They eat food to survive.");
};

var Mammal = function () {};
Mammal.prototype = new Animal(); //Mammal inherits from Animals
Mammal.prototype.giveBirth = function () {
  console.log("They give birth to young ones.");
};

var elephant = new Mammal(); //Creating instance of type Mammal
elephant.eat(); //elephant can use the inherited method from Animal.
elephant.giveBirth();

console.log(elephant instanceof Mammal);
console.log(elephant instanceof Animal);
