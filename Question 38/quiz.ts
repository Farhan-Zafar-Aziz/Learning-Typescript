//43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

var magician_names = ["Harry", "James", "Alina", "David"];

function make_great1(magician: string ="Great") {
    console.log("magician name with great ");

    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician + magician_names[i]);
    }
    console.log("origional magician name");
    var copy_magician_name: string[] = [...magician_names];
    console.log(copy_magician_name);
}
make_great1()