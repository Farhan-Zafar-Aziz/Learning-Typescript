"use strict";
// 18. Seeing the World: Think of at least five places in the world you’d like to visit
const wishTovisit = ["All Pakistan", "Istanbole", "Egypt", "Saudi Arabia", "Dubai"];
console.log(wishTovisit);
// 18(a) Store the locations in a array. Make sure the array is not in alphabetical order.
let unOrderAlphabate = ["a", "d", "s", "f", "o"];
// 18(b). Print your array in its original order.
console.log("Array in its original order is: ", unOrderAlphabate);
// 18(c). Print your array in alphabetical order without modifying the actual list.
let copyArray = [...unOrderAlphabate]; // it will make an copy of array 
copyArray.sort(); //sorting array elements order
console.log(copyArray); // [ 'a', 'd', 'f', 'o', 's' ]
// 18(d). Show that your array is still in its original order by printing it.
console.log(unOrderAlphabate); //[ 'a', 'd', 's', 'f', 'o' ]
//18(e). Print your array in reverse alphabetical order without changing the order of the original list.
var copyArray1 = [...unOrderAlphabate]; // it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);
// 18(f). Show that your array is still in its original order by printing it again
console.log("origional array:", unOrderAlphabate);
// 18(g). Reverse the order of your list. Print the array to show that its order has changed.
/*var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);

// 18(h). Reverse the order of your list again. Print the list to show it’s back to its original order.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.sort();
console.log(copyArray1);
// 18(i). Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.sort();
console.log(copyArray1);

// 18(j). Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);*/
