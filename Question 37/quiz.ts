// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

var magician_names = ["Harry", "James", "Alina", "David"];

function make_great(magician: string) {   

    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician + magician_names[i]);
   }  
}
make_great("Great!")