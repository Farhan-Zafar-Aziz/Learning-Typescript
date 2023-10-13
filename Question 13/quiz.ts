
// 18. Seeing the World: Think of at least five places in the world you’d like to visit
const wishTovisit = ["All Pakistan","Istanbole","Egypt","Saudi Arabia","Dubai"];
console.log(wishTovisit);

// 18(a) Store the locations in a array. Make sure the array is not in alphabetical order.
let unOrderAlphabate = ["a","d","s","f","o"]
// 18(b). Print your array in its original order.
console.log("Array in its original order is: ",unOrderAlphabate);
// 18(c). Print your array in alphabetical order without modifying the actual list.
let copyArray = [...unOrderAlphabate];// it will make an copy of array 
copyArray.sort();//sorting array elements order
console.log(copyArray);// [ 'a', 'd', 'f', 'o', 's' ]

// 18(d). Show that your array is still in its original order by printing it.
console.log(unOrderAlphabate);//[ 'a', 'd', 's', 'f', 'o' ]

//18(e). Print your array in reverse alphabetical order without changing the order of the original list.
var copyArray1 = [...unOrderAlphabate];// it will make an copy of array unOrderAlphabate
copyArray1.reverse();
console.log(copyArray1);

// 18(f). Show that your array is still in its original order by printing it again
console.log("origional array:", unOrderAlphabate);

//..............................................................................................
