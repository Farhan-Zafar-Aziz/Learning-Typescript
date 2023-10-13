"use strict";
//Question 43
//original array
let show_megicians = ["Harry", "Jimmy", "jalinoos", "charli"];
function show_Megicians() {
    console.log(show_megicians);
}
show_Megicians();
//print aaray with adding Great to each megicians name
let shoW_megicians = ["Harry", "Jimmy", "charli"];
function make_Great() {
    console.log(shoW_megicians, "Great!");
}
make_Great();
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magician_names = ["Ali", "Asad", "Alina", "David"];
function make_great1(magician = "Great") {
    console.log("magician name with great ");
    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician + magician_names[i]);
    }
    console.log("origional magician name");
    var copy_magician_name = [...magician_names];
    console.log(copy_magician_name);
}
make_great1();
