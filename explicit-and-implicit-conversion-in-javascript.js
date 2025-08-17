/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean(false); /* the original was in quotes and that was putting a string into the boolean not a valid boolean input*/
if (isValid) {
    console.log("This is valid!"); /*now that the boolean is reading false, it is not printing this string*/
}

let age = "25"; 
let ageNumber = Number(age) /* creating a new variable to include a method of Number converts the string "25" into a number that is usable*/
let totalAge = ageNumber + 5; /*redefining the variable totalAge to utilize the new variable ageNumber*/
console.log("Total Age: " + totalAge);


//example of implicit
let inches = "24"
let feet = inches/12
console.log(feet + " feet ")

//example of explicit
let shoeInventory = null
let shoeSize = 11
let shoeSizeStr = String(shoeSize)
console.log("My shoe size is " + shoeSizeStr ) 
console.log(`Shoe size: ${shoeSizeStr}`);


