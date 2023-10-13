// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

var users = ["farhan","sadiq","jabir"];
// a. Remove all of the usernames from your array, and make sure the correct message is printed.

while(users.length > 0) {
    users.pop()
}
//console.log(users);
// b. If the list is empty, print the message We need to find some users!
if(users.length == 0) {
    console.log("we need some users!");
    
}