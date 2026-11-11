const processor = (callback) => {
    callback();     

}

const greeting = () => {
    console.log("Hello World");

}

const goodbye = () => {
    console.log("goodbye");
}
processor(greeting);
processor(goodbye);




const calculate = (x, y, callback) => {
    callback(x,y);
}

const sum = (a = 5, b = 3) =>  {
    console.log(a+b);
}

calculate(5, 3, sum); // 8


const calculate2 = (x, y, callback) => {
    return callback(x,y);
}

const sum2 = (a = 5, b = 3) =>  {
    console.log(a+b);
}

console.log(calculate2(5, 3, sum2)); // 8



const calculate3= (x, callback) => {
    return callback(x);
}

const upperString = (text ="") =>text.toUpperCase();

const getFirstLetter = (text = "") => {};

console.log(calculate3("naruto"), upperString); // NARUTO 
console.log(calculate3("naruto"), getFirstLetter); //n

