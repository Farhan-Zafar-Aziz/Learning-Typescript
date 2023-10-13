"use strict";
/* Q16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
a. Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.*/
var Guest = ["Sadiq", "Jabir", "Khurshed", "Jamshed"];
console.log(Guest);
Guest.splice(3, 1, "Molai");
// b. Add one new guest to the beginning of your array.
Guest.unshift("Babar");
// c. Add one new guest to the middle of your array. • Use append() to add one new
// guest to the end of your list. • Print a new set of invitation messages, one for
// each person in your list.
Guest.splice(Guest.length / 2 + 1, 0, "Faraz");
// • Use append() to add one new guest to the end of your list. •
Guest.push("Tariq");
console.log(Guest);
for (let i = 0; i < Guest.length; i++) {
    if (Guest[i] === "Sadiq") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema Ceremoney.");
    }
    else if (Guest[i] === "Jabir") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema Ceremoney.");
    }
    else if (Guest[i] === "Khurshed") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema Ceremoney.");
    }
    else if (Guest[i] === "Molai") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema Ceremoney.");
    }
    else if (Guest[i] === "Babar") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema Ceremoney.");
    }
    else if (Guest[i] === "Faraz") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema Ceremoney.");
    }
    else if (Guest[i] === "Tariq") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema Ceremoney.");
    }
}
console.log("Jamshed can not attend my valeema ceremoney due to work issues in abroad.");
