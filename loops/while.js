let i = 0;

while (i < 5) {
    console.log("Masuk while loop");
    console.log("i = " + i);    
    i++;
}   

while (i < 5) {
    if (i === 3) {
        i++;
        continue; // lewati iterasi saat i === 3
    }   
    console.log("Masuk while loop");
    console.log("i = " + i);    
    i++;
}

while (i < 5) {
    if (i === 3) {
        console.log("Keluar while loop");
        i++;
        break; // keluar dari loop
    }
    console.log("Masuk while loop");
    console.log("i = " + i);    
    i++;
}      
