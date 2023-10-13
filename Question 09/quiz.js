"use strict";
/* 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
const arry = ["Civic", "Dala", "Thar",];
for (let i = 0; i < arry.length; i++) {
    if (arry[i] === "civic") {
        console.log(`In shah Allah one day I will buy ${arry[i]} car.`);
    }
    else if (arry[i] === "Dala") {
        console.log(`Black ${arry[i]} give a gangster vibes`);
    }
    else if (arry[i] === "Thar") {
        console.log(`${arry[i]} is a most strong jeep.`);
    }
}
