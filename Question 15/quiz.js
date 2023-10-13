"use strict";
// 20. Think of something you could store in a array. For example, you could make a list
// of mountains, rivers, countries, cities, languages, or anything else you’d like. Write
// a program that creates a list containing these items.
var languages = ["Python", "Javascript", "Ruby", "Rust", "Java"];
//console.log("List of items");
//console.log(".............");
languages.map((items, index) => {
    console.log((index + 1) + '.' + items);
});
let food = ["Burger", "zingers", "fries", "kababs", "chickens", "pizza"];
food.map((items, index) => {
    console.log((index + 1) + "." + items);
});
