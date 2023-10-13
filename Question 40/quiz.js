"use strict";
//Question 45
function manufacture(type, model, year, madeIn) {
    console.log(type, model, year, madeIn);
}
manufacture("Honda", "Civic 1.8", 2023, "Japan"); //Honda Civic 1.8 2023 Japan
console.log("2000cc engine"); //2000cc engine
console.log("Color,Black"); //Color,Black
// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly
function Cars1(company = "Honda", model = 2024, ...args) {
    let car_object = {
        Company: company,
        Model: model,
    };
    for (let i = 0; i < args.length; i += 2) {
        const name = args[i];
        const value = args[i + 1];
        car_object[name] = value;
    }
    console.log(car_object);
}
Cars1();
