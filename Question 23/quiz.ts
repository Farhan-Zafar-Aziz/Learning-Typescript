// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

let livingPeriod = "Life_Stages";
console.log(livingPeriod);

let age = 65;/* 2 = Baby, 4 = Toodler, 13 = Kid, 20 = Teenager, 24 = Adult, 65 = Elder.*/ 

// a. If the person is less than 2 years old, print a message that the person is a baby.
if (age == 2 || age < 2 ) {
    console.log("Person is a Baby")
}
   // b. If the person is at least 2 years old but less than 4, print a message that the  person is a toddler. 
else if (age == 4 || age < 4) {
    console.log("Person is a Toodler")
}
 // c. If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age == 13 || age < 13) {
    console.log("Person is a Kid")
}
  // d. If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age == 20 || age < 20) {
    console.log("Person is a Teenager")
}
  // e. If the person is at least 20 years old but less than 65, print a message that the person is an adult.  
else if (age == 24 || age < 65 ) {
    console.log("Person is a Adult")
}
   // f. If the person is age 65 or older, print a message that the person is an  elder    
else if (age == 65 || age >= 65) {
    console.log("age is 65 or older.")
}