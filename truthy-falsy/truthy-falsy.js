const condition = 0 > 3; // falsy

const age = 20;
console.log(Boolean(age)); // truthy

const name = "Kevin";
console.log(Boolean(name)); // truthy

const username = " ";
console.log(Boolean(username)); // truthy

console.log(Boolean(null)); // falsy
console.log(Boolean(undefined)); // falsy
console.log(Boolean(0)); // falsy
console.log(Boolean("0")); // truthy


const username2 = " ";
if (username2) { //true
    console.log("Hello, " + username2);
} else {
    console.log("Please input your username");
}