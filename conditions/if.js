const price = 10000;
const payment = 20000;

if (payment === price) { //1. Kalau uangnya pas
    console.log("Makasih udah bayar pakai uang pas");
} else if (payment > price) {
    const change = payment - price; //2. Kalau uangnya lebih
    console.log(`Makasih udah bayar, kembalian anda sebesar ${change}`); 
} else {
    const moneyDeficit = price - payment; //3. Kalau uangnya kurang
    console.log(`Uang anda tidak cukup, anda kurang ${moneyDeficit}`); 
}