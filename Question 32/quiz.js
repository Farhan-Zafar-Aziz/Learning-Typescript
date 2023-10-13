"use strict";
//print defualt message that I love Typescript.
//then make a large shirt, medium shirt and a  any size  of shirt with a differnt message
// function default_message(shirt:string, largeshirt:string, mediumshirt:string){
//     console.log(`${shirt}`)
//     console.log(`${largeshirt}`)
//     console.log(`${mediumshirt}`) 
// }
// default_message("I Love Typescript","You can do everything","Always Be Happy");
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt2(size = "Large", message = "I love TypeScript") {
    console.log(`Your size of T-shirt is ${size} and printed text is "${message}"`);
}
make_shirt2();
make_shirt2("Medium", "Always be Happy");
make_shirt2("Small", "Hello, World!");
