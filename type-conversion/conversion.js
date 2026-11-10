let x = 5;
let y = "3";
y = Number(y); //type conversion from string to number

let z = x + y; //concatenation  
console.log(z); // 8

let m = 5;
let n = 3; // n=n.toString();  
n = String(n); //type conversion from number to string  
console.log(m + n); // 53

let o = "3,9";
o = parseInt(o); //type conversion from string to number
console.log(o); // 3

let p = "3.9";
p = Math.floor(p); //BULAT KE BAWAH
console.log(p); // 3

let q = "3.5";
q = Math.round(q); // BULAT KE TERDEKAT
console.log(q); // 4

let r = "3.4";
r = Math.ceil(r); //BULAT KE ATAS
console.log(r); // 4

let a = 5;
let b = "3";
b = parseInt(b); //type conversion from string to number    
console.log(a + b); // 8

let c = 5;
let d = "3.14";
d = parseFloat(d); //type conversion from string to number
console.log(c + d); // 8.14

let e = 5;
let f = "3.14";
f = Number(f);
console.log(e + f); // 8.14

let g = 5;
let h = "3.14";

const result = Number(g) + Number(h); //type conversion from string to number // 8,14

const i= 10;
console.log(Number(result) + Number(i)); // 18.14
