"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich_order(items) {
    console.log("*** Summary of your order ***");
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
}
sandwich_order(["Sandwich1", "potato Sandwich", "Chicken Sandwich"]);
sandwich_order(["Simple_Sandwich", "egg_Sandwich", "Egg Potato_Sandwich"]);
sandwich_order(["Suaocy Sandwich", "Creamy Sandwich", "Crunchy Sandwich"]);
