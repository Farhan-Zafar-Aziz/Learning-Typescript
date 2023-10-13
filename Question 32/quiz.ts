//37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`Your size of T-shirt is ${size} and printed text is "${message}"`);
}
make_shirt();

make_shirt("Medium","Always be Happy");

make_shirt("Small", "You can do Everything");