"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var Guest = ["Sadiq", "Jabir", "Khurshed", "Jamshed"];
console.log(Guest);
Guest.splice(3, 1, "Molai");
Guest.unshift("Babar");
Guest.splice(Guest.length / 2 + 1, 0, "Faraz");
for (let i = 0; i < Guest.length; i++) {
    if (Guest[i] === "Sadiq") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema dinner.");
    }
    else if (Guest[i] === "Jabir") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema dinner.");
    }
    else if (Guest[i] === "Khurshed") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema dinner.");
    }
    else if (Guest[i] === "Molai") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema dinner.");
    }
    else if (Guest[i] === "Babar") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema dinner.");
    }
    else if (Guest[i] === "Faraz") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema dinner.");
    }
}
console.log("Jamshed can not attend my valeema dinner due to work issues in abroad.");
console.log("We found a bigger table so we will invite more guestes.");
// 17(a). Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("I invited only two people for dinner.");
// 17(b). Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
var Guest1 = ["Sadiq", "Jabir", "Khurshed", "Jamshed"];
while (Guest1.length > 2) {
    var Final = Guest1.pop();
    console.log("I am so sorry you cann't invited at Valeema dinner.", Final);
}
// 17(c). Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < Guest1.length; i++) {
    console.log(Guest1[i], "You are still invited at dinner");
}
// 17(d). Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for (let i = 0; i <= Guest1.length; i++) {
    Guest1.pop();
}
console.log(Guest1);
