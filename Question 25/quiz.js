"use strict";
/* 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:*/
var usernames = ["admin", "farhan"];
// a. If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// by using for loop
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("Hello", usernames[i], "would you like to see a status report?");
    }
    else if (usernames[i] == "farhan") {
        console.log("Hello", usernames[i], "thank you for logging in again.");
    }
    else {
        console.log("Hello", usernames[i], "thank you for logging in again.");
    }
}
