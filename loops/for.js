// loop -> if condition yang berulang selama condition bernilai true

for (let i = 0; i < 5; i++) {
    console.log("Masuk loop");
    console.log("i = " + i); 
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        console.log("Keluar loop");
        break; // keluar dari loop
    }
    console.log("Masuk loop");
    console.log("i = " + i); 
}

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; // lewati iterasi saat i === 3
    }
    console.log("Masuk loop");
    console.log("i = " + i); 
}

for (let i = 0; i < 5; i++) {
    console.log("i = " + i);

    for (let k = 0; k < 3; k++) {
        console.log("k = " + k); // nested loop 
    } //loop di dalam loop
}