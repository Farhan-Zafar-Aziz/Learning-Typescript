"use strict";
//Print an array with five usernames
//The logic i used is that I am checking new user name one by one through nested loop
//to solve the problem of case senstive I used lowercase method to change user name into lowercase
let currentUsers = ["Sadiq", "Khurshed", "Babar", "Jabir", "Abid"];
let newUsers = ["Jamshed", "Faraz", "Allahrakhyo", "Jabir", "Abid"];
// for (var i = 0; i < newUsers.length; i++) {
//     if (currentUsers.includes(newUsers[i])) {
//         console.log(newUsers[i], "Sorry, the username is already in use.");
//     } else {
//         console.log(newUsers[i], "The username is available.");
//     }
// }
for (let i = 0; i < newUsers.length; i++) {
    if (currentUsers.includes(newUsers[i])) {
        console.log(`Sorry ${newUsers[i]} username is already available.`);
    }
    else {
        console.log(newUsers[i], "username is availble.");
    }
}
