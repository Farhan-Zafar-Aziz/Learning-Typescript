"use strict";
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//var alien_color = ["green", "yellow", "red"];
// a. Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alien_Color = "Green";
if (alien_Color == "Green") {
    console.log("player earned 5 points");
}
else {
    console.log("player missed the shot");
}
//b. Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if (alien_Color == "red") {
    console.log("player earned 5 points");
}
else {
    console.log("player missed the shot");
}
