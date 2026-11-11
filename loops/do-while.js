let i = 0;
do {
    console.log("Masuk do while loop");
    console.log("i = " + i);    
    i++;
}while (i < 5);

do {
    if (i === 3) {
        i++;
        continue; // lewati iterasi saat i === 3
    }   
    console.log("Masuk do while loop");
    console.log("i = " + i);    
    i++;
}while (i < 5);