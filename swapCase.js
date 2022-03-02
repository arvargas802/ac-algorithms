/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

//input: a string (input usually means a parameter)
//output: a string with the cases swapped
//purpose: to be able to change character cases, in order validate passwords, etc.
//methods:
    //a variable to contain the new string
    //Split the string, setting the delimeter to be an empty string '', and create a variable to store the new array
    //Create a for loop that starts at position zero, and loop through the elements of the array
        //If true, make lowercase and add it to the vatiable with the output string
    //Else if, test if it is lowercase
        //If true, make uppercase and add it to the variable with the output string
    //If false, add the character tho the string

	function swapCase(str) {
		var newString = '';
	  var splitNew = str.split("");
	 
	  
	  for(let i=0; i < splitNew.length; i++){
	  if(splitNew[i] === splitNew[i].toUpperCase()){
		newString = newString + splitNew[i].toLowerCase();
	  } else {
	   newString = newString + splitNew[i].toUpperCase();
	 }
	  }
	  return newString
	}
	
	console.log(swapCase("Hello World"));