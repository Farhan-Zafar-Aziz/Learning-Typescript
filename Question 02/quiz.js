"use strict";
//Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var upper_case = "farhan";
console.log(upper_case.toUpperCase());
let lower_case = "FARHAN";
console.log(lower_case.toLowerCase());
const TitleCase = "One Day We Will Die"
    .split(' ')
    .map((words) => words.charAt(0).toUpperCase() + words.slice(1).toLowerCase())
    .join(' ');
console.log(TitleCase);
