//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 



var radius = prompt("What is the radius of your circle?");

function circleCalculation (radius) {
	//your code here

	let circumference = Math.round(2* (Math.PI) * radius);
	let area = Math.round((Math.PI * radius)^2);
  
	console.log(area);
	console.log(circumference);
 
  console.log("The area of the circle is " + area + " and the perimeter of the circle is " + circumference);
}

circleCalculation(radius);




circleCalculation(10);