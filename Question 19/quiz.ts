
/* 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:*/

//Create conditional test using opperators

//comparison 

let Name = "Farhan Aziz";
console.log(Name == "Farhan Aziz");//true
console.log(Name == "farhan aziz");//false

//strong comparison

let $ = 297;
console.log($ === 297);//true
console.log($ === 300);//false

//greaterthen/lessthen

let greater = 5;
console.log(greater > 4);//true
console.log(greater < 5);//false

let less = 6;
console.log(less < 10);//true
console.log(less > 7);//false

//greater/lessthen Equalthen
let grtrthenEqual = 5;
console.log(grtrthenEqual >= 5);//true
console.log(grtrthenEqual >= 6);//false
console.log(grtrthenEqual <= 5);//true
console.log(grtrthenEqual <= 4);//false

//&& 
let b = 7;
console.log(b > 6 && b < 8);//true
console.log(b > 8 && b < 6);//false
console.log(b <= 10 || b >= 8);//true
console.log(b <= 6 ||b >= 8);//false
console.log(b >= 7 || b <= 6);//true
