const x = 5;
const y = 3;
const result = x + y; //addition

//console.assert(result === 8, "The sum of x and y should be 8");
//console.log(x+y);
console.log(result);

const a = 5;
const b = 3;
const result2 = a / b; //division
console.log(result2);

const c = 2;
const d = 3;
const result3 = c ** d; //exponentiation
console.log(result3);

const e = 5;
const f = 3;
const result4 = e % f; //modulus / sisa bagi
console.log(result4);

const g = 5;  //g++
g = g + 1; //increment
console.log(g);

const h = 5; //h--
h = h - 1; //decrement
console.log(h);

const i = 5;
i += 3; //compound addition
console.log(i);

const j = 5;
j -= 3; //compound subtraction
console.log(j);

const k = 5;
k *= 3; //compound multiplication
console.log(k); 

const l = 5;
l /= 3; //compound division
console.log(l);

const m = 5;
m %= 3; //compound modulus
console.log(m);     

const n = 5;
n **= 3; //compound exponentiation
console.log(n);     

const o = 5;
const p = 3;
const result5 = o == p; //comparison operator (==) checks for equality of value, but not type
console.log(result5); //false

const q = 5; //type of q is number
const r = "5"; //type of r is string
const result6 = q === r; //comparison operator (===) checks for equality of value and type
console.log(result6); //false

const s = 5;
const t = 3;
const result7 = s != t; //comparison operator (!=) checks for inequality of value, but not type
console.log(result7); //true

const u = 5; //type of u is number
const v = "5";  //type of v is string
const result8 = u !== v; //comparison operator (!==) checks for inequality of value and type
console.log(result8); //true

const w = 5;
const x1 = 3;
const result9 = w > x1; //comparison operator (>) checks if w is greater than x1
console.log(result9); //true

const y1 = 5;
const z = 3;
const result10 = y1 <= z; //comparison operator (<=) checks if y1 is less than or equal to z
console.log(result10); //false

const condition1 = true && false; //logical AND operator (&&) returns true if both operands are true, otherwise returns false
console.log(condition1); //false

const condition2 = true || false; //logical OR operator (||) returns true if at least one operand is true, otherwise returns false
console.log(condition2); //true

const condition3 = !true; //logical NOT operator (!) returns the opposite of the operand
console.log(condition3); //false       

const condition4 = !false; //logical NOT operator (!) returns the opposite of the operand
console.log(condition4); //true

const condition5 = true && !false; //logical AND operator (&&) returns true if both operands are true, otherwise returns false
console.log(condition5); //true

const condition6 = false || !true; //logical OR operator (||) returns true if at least one operand is true, otherwise returns false
console.log(condition6); //false

const condition7 = false && true && true; //logical AND operator (&&) returns true if both operands are true, otherwise returns false
console.log(condition7); //false