//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

//If you pick a number, and then write out the numbers 1 - said number, then multiply those, that is factorializing

// For example: 5! = num * 2 * 3 * 4 * 5 = 120
// var num = 1
// num = num *2
// num = num * 3

// initialize i = 1
// i <= 10
//look up factorialize w javascript

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

function factorializeIt(num) {
  let total = 1;
  for (let i=1; i<=10; i++){
      total *= i
  }
   return total
}

console.log(factorializeIt(5));