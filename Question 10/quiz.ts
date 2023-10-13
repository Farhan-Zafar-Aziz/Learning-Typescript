/* 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/

var Guest = ["Sadiq","Jabir","Khurshed","Jamshed"];
Guest.splice(3,1,"Babar")
console.log(Guest);

for(let i = 0; i < Guest.length; i++) {

    if(Guest[i] === "Sadiq") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema Ceremoney.");
        
    } else if (Guest[i] === "Jabir") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema Ceremoney.");
        
    } else if (Guest[i] === "Khurshed") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema Ceremoney.");
        
    } else if (Guest[i] === "Babar") {
        console.log(Guest[i], "Hi I hope your going well, I am excited to invite you in my Valeema Ceremoney.");
        
    } 

}
/* 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.*/
console.log(" Jamshed can not attend my valeema ceremoney due to work issues in abroad.");
