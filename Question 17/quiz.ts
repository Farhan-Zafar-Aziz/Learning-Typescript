/* 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/

var ErrorIndex = ["Pakistan", "India", "Bangladesh", "Srilanka"];
ErrorIndex.splice(1, 0, "Nepal");
console.log(ErrorIndex);
console.error(ErrorIndex[10]); 