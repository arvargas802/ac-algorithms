/*

Given a number between 1 and 2^16, return true if the number is prime, return false if it is not.
Remember 2 is a prime number and 1 is not.

Hint: You may not need to check numbers up to num to check for primeness.

*/

/**

Examples:

var result = isPrime(1)
console.log(result) // false

var result = isPrime(2)
console.log(result) // true

var result = isPrime(3)
console.log(result) // true

var result = isPrime(4)
console.log(result) // false

var result = isPrime(29)
console.log(result) // true

var result = isPrime(51)
console.log(result) // false

**/

function isPrime(num) {
	if (num <= 1) return false;
	if (num % 2 == 0 && num > 2) return false;
	const s = Math.sqrt(num); // store the square to loop faster
	for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
		if(num % i === 0) return false; // modulo shows a divisor was found
	}
	return true;
  }
  console.log(isPrime(11));
  