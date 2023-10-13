// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username. 

//Print an array with five usernames
//The logic i used is that I am checking new user name one by one through nested loop
//to solve the problem of case senstive I used lowercase method to change user name into lowercase

let currentUsers= ["Sadiq","Khurshed","Babar","Jabir","Abid"];
let newUsers = ["Jamshed","Faraz","Allahrakhyo","Jabir","Abid"];

for(let i = 0; i < newUsers.length; i++) {

    if(currentUsers.includes(newUsers[i])) {
        console.log(`Sorry ${newUsers[i]} username is already available.`);
         
    } else {
        console.log(newUsers[i], "username is availble.");
        
    }
}