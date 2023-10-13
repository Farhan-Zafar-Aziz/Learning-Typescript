"use strict";
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// a. Make a array of your three favorite fruits and call it favorite_fruits.
let fruits = ["Amb", "Tarbooz", "Angoor", "AaluBukharo", "Annar", "Zetoon"];
fruits.map((items, index) => {
    console.log((index + 1) + '.' + items);
});
//print three favorite fruits
//print favrt fruits as if block statements //include
let favrt_fruits = ["Amb", "Angoor", "Zetoon"];
console.log(favrt_fruits); //[ 'Amb', 'Angoor', 'Zetoon' ]
if ("Amb") {
    console.log("Amb is a my favourite fruit..");
}
if ("Angoor") {
    console.log("Angoor is a my favourite fruit.");
}
if ("Zetoon") {
    console.log("Zetoon is a my favourite fruit.");
}
