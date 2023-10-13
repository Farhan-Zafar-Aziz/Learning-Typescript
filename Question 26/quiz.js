"use strict";
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var users = ["Farhan", "Ali", "Sadiq", "Jabir"];
// a. Remove all of the usernames from your array, and make sure the correct message is printed.
while (users.length > 0) {
    users.pop();
}
// b. If the list is empty, print the message We need to find some users!
if (users.length == 0) {
    console.log("We Need some users!");
}
var users = ["farhan", "sadiq", "jabir"];
while (users.length > 0) {
    users.pop();
}
console.log(users);
if (users.length == 0) {
    console.log("we need some users!");
}
