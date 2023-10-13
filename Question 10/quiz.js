"use strict";
/* 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
// var Guest: string[] = ["Javeria", "Talha", "Hannan","sidra"];
// console.log(Guest);
// Guest.splice(3, 1, "Faiza")
let Guest = ["Sadiq", "Jabir", "Khurshed", "Jamshed"];
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
    else if (Guest[i] === "Jamshed") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema Ceremoney.");
    }
}
Guest.splice(3, 1, "Babar");
console.log(Guest[3], "can not attend my valeema ceremoney due to work issues in abroad.");
// for (let i = 0; i < Guest.length; i++) {
// console.log(Names[i],"Good Evening");
//     if (Guest[i] == "Javeria") {
//         console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
//     } else if (Guest[i] == "Talha") {
//         console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
//     } else if (Guest[i] == "Hannan") {
//         console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
//     } else if (Guest[i] == "Faiza") {
//         console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
//     }
// }
// console.log("Sidra cannot join us in the party");
