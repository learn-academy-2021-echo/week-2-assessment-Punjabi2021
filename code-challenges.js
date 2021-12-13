// // ASSESSMENT 2: Coding Practical Questions with Jest
//
// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, please leave comments to help us understand your thought process
//
// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest
//
// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest
//
//
// // --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
//
// Run modulus operator is divisible by three and resulting in "Divisble by three" otherwise retun "not divisible by three"
//
// // a) Create a test with expect statements for each of the variables provided.
//
 //var num1 = 15
// // Expected output: "15 is divisible by three"
 //var num2 = 0
// // Expected output: "0 is divisible by three"
 //var num3 = -7
// // Expected output: "-7 is not divisible by three"
//
// const divisbleByThree = () => {
// if(number % 3 === 0){
// return "Divisble by three."
// } else {
//   return "Not divisble by three."
// }
// }
// console.log(divisbleByThree(`num1,num2,num3`));
//
//
// // b) Create the function that makes the test pass.
//
//
//
// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//
// // a) Create a test with expect statements for each of the variables provided.
//
// var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
//
//
//
// // b) Create the function that makes the test pass.
//
//
var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]

// declare a function that takes in an array
const capitalizer = (array) => {
  // create a local variable that maps through the array
  let eachItem = array.map(value => {
    // with each value access the first index and capitalize the letter then concatenate the remainder of the word
    return value[0].toUpperCase() + value.substring(1)
  })
  // return the local variable joined into a string
  return eachItem.join(" ")
}
// logging the function and pass in the array
console.log(capitalizer(`randomNouns1,randomNouns2`))
//
// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.
//
// // a) Create a test with expect statements for each of the variables provided.
//
 var vowelTester1 = "learn"
// // Expected output: 1
// var vowelTester2 = "academy"
// // Expected output: 0
// var vowelTester3 = "challenges"
// // Expected output: 2
//
//run a filter compared to a vowels the index number will indicate what place it holds.
//
// // b) Create the function that makes the test pass.
function vowelTester1(str){
let test =str.search(/[a,e,i,o,u,A,E,I,O,U]/g)
console.log(test);
}
function vowelTester2(str){
let test =str.search(/[a,e,i,o,u,A,E,I,O,U]/g)
console.log(test);
}
function vowelTester3(str){
let test =str.search(/[a,e,i,o,u,A,E,I,O,U]/g)
console.log(test);
}
