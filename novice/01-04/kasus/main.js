// String objects
const job = new String("Front end"); // membuat string object
console.log(job); // menampilkan [String: 'Front end']

// String literal
const firstString = "2 + 2"; // membuat string literal
const secondString = new String("2 + 2"); // membuat objek baru
console.log(firstString);
console.log(secondString);

// <---method-method string--->
// method length dan slice
let a = "sedang belajar method string di Javascript";
let b = a.length + "\n"; /*menghitung jumlah index dalam string*/
let c = a.slice(7, 28); /*memotong jumlah string tanpa menghapus string belakangnya*/
console.log(b);
console.log(c);

// method substr dan replace
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6); /*memotong jumlah string*/
let rts = str.replace("Apple", "Orange"); /*mengganti string yang ingin diganti*/
console.log(part);
console.log(rts);

// method concat dan trim
let hello = "          Assalamualaikum ughtea naughtea          ";
let hi = hello.trim(); /*menghapus spasi*/
let sapa = "herbayu";
let manggil = "let";
let memanggil = sapa.concat(manggil); /*menggabungkan string*/
console.log(hi);
console.log(memanggil);

// membuat regular expresion
let re = /ab+c/;
console.log(re);

// memanggil regular expresion
var myRe = /b(d+)b/g;
var myArray = myRe.exec("cbddbbsbz");
console.log(myArray);
