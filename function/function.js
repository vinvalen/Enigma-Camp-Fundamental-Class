//Kumpulan code yang dikumpulkan dari berbagai sumber untuk mempermudah pekerjaan dalam pengembangan aplikasi.
//Bisa menerima sebuah input maupun output dari sebuah function.

function sayHello(name) {
    console.log("Hello World" );
}

function sayGoodbye() {
    console.log("Goodbye World");
}

sayGoodbye(); // Output: Goodbye World

function greetUser(username, age) {
    console.log(`Hello, ${username}!`);
    console.log(`You are ${age} years old`);
} 

greetUser("nobita", 20); // Hello, nobita You are 20 years old

function greetUser(username, age = 0) {
    console.log(`Hello, ${username}!`);
    console.log(`You are ${age} years old`);
} 
greetUser("nobita"); // Hello, nobita You are 0 years old

function sayHello(name) {
    console.log("Hello " + name); // Output: Hello Kevin
}

sayHello("Kevin"); // memanggil function sayHello dengan parameter "Kevin"


function greeting() {
    return 123;
}

console.log(greeting() + 7); //130

function add(x=0, y=0){
    return x+y;
}

function divide(x,y){
    return x/y;
}

console.log(add(8,4) + divide (5,10)); //12 + 1/2 = 12.5




