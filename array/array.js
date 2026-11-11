const names = ["Albert", "Naruto", "Doraemon"];

console.log(names[0]); // Output: Albert 
console.log(names[1]); // Output: Naruto
console.log(names[2]); // Output: Doraemon
console.log(names); // Output: ["Albert", "Naruto", "Doraemon"]

names.push("Sasuke"); // menambahkan elemen baru ke array
console.log(names); // Output: ["Albert", "Naruto", "Doraemon", "Sasuke"]       

names.pop(); // menghapus elemen terakhir dari array
console.log(names); // Output: ["Albert", "Naruto", "Doraemon"]

names.unshift("Sakura"); // menambahkan elemen baru di awal array
console.log(names); // Output: ["Sakura", "Albert", "Naruto", "Doraemon"]

names.shift(); // menghapus elemen pertama dari array
console.log(names); // Output: ["Albert", "Naruto", "Doraemon"]

names.splice(1, 1); // menghapus elemen pada index ke-1
console.log(names); // Output: ["Albert", "Doraemon"]

names[2] = "Nobita"; // mengubah elemen pada index ke-2
console.log(names); // Output: ["Albert", "Doraemon", "Nobita"]

const grids = [
    [1, 2, 3], //0
    [4, 5, 6], //1
    [7, 8, 9]  //2
];

console.log(grids[0][0]); // Output: 1
console.log(grids[1][1]); // Output: 5
console.log(grids[2][2]); // Output: 9
console.log(grids); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(grids[0]); // Output: [1, 2, 3]




