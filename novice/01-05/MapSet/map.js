// let map = new Map();

// map.set("1", "str1"); // a string key
// map.set(1, "num1"); // a numeric key
// map.set(true, "bool1"); // a boolean key

// console.log(map.get(1)); /*mendapatkan nilai dari key 1 */
// console.log(map.get("1")); /*mendapatkan nilai dari key "1" */
// console.log(map.size); /*menghitung jumlah objek dari variabel map*/

// console.log("================");

// let john = { name: "John" };

// // for every user, let's store their visits count
// let visitsCountMap = new Map();

// // john is the key for the map
// visitsCountMap.set(john, 123);

// console.log(visitsCountMap.get(john)); // 123

console.log("================");

let set = new Set();

let herbayu = { name: "Herbayu" };
let eko = { name: "Eko" };
let nugroho = { name: "Nugroho" };

// visits, some users come multiple times
set.add(herbayu);
set.add(eko);
set.add(nugroho);
set.add(herbayu);
set.add(nugroho);

// set keeps only unique values
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}
