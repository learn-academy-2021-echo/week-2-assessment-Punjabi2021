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
// a describe method that lists the name of the function OR naming of the particular test.
describe("divisbleByThree", () => {
  var num1 = 15
 // // Expected output: "15 is divisible by three"
  var num2 = 0
 // // Expected output: "0 is divisible by three"
  var num3 = -7
 // Expected output: "-7 is not divisible by three"

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("This will take a variable and filter it in a modulus operator to see if the number is divisble by the given number otherwise it will return one of two answers is divisible by three or is not divisible by three. ", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(divisbleByThree(num1)).toEqual("15 is divisible by three.")
    expect(divisbleByThree(num2)).toEqual("0 is divisible by three.")
    expect(divisbleByThree(num3)).toEqual("-7 is not divisible by three.")
  })
})
//
// // b) Create the function that makes the test pass.


const divisbleByThree = (number) => {
if(number % 3 === 0){
return `${number} is divisible by three.`
} else {
 return `${number} is not divisible by three.`
}
}

//
//
// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
//
// // a) Create a test with expect statements for each of the variables provided.
//
//// a describe method that lists the name of the function OR naming of the particular test.
describe("capitalizer", () => {
  var randomNouns1 = (["streetlamp", "potato", "teeth", "conclusion", "nephew"])
  // // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
   var randomNouns2 = (["temperature", "database", "chopsticks", "mango", "deduction"])
  // // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("This function will take the word identify the first letter of the word and uppercase the letter. Returning a word with an uppercase first letter of the word.", () => {

    // an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(capitalizer(["streetlamp", "potato", "teeth", "conclusion", "nephew"])).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalizer(["temperature", "database", "chopsticks", "mango", "deduction"])).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})
//
//
// // b) Create the function that makes the test pass.

//
const capitalizer = (array) => {
  let eachItem = array.map(value => {
     return value[0].toUpperCase() + value.substring(1)
})
   return eachItem
}
//
// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.
//
// // a) Create a test with expect statements for each of the variables provided.
// //
// a describe method that lists the name of the function OR naming of the particular test.
describe("firstFunction", () => {
  var vowelTester1 = "learn"
// // // Expected output: 1
 var vowelTester2 = "academy"
// // // Expected output: 0
 var vowelTester3 = "challenges"
// // // Expected output: 2
  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("run a filter compared to a vowels the index number will indicate what place it holds", () => {

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(firstFunction(vowelTester1)).toEqual(1)
    expect(firstFunction(vowelTester2)).toEqual(0)
    expect(firstFunction(vowelTester3)).toEqual(2)

  })
})
const firstFunction= (stringArgument)=> {
  for(let i=0; i<stringArgument.length; i++){
    if (stringArgument.charAt(i) === 'a' ||stringArgument.charAt(i) === 'e' ||stringArgument.charAt(i) === 'i' ||stringArgument.charAt(i) === 'o' ||stringArgument.charAt(i) === 'u'||stringArgument.charAt(i) === 'A' ||stringArgument.charAt(i) === 'E' ||stringArgument.charAt(i) === 'I' ||stringArgument.charAt(i) === 'O' ||stringArgument.charAt(i) === 'U') {// if this character is a vowel
      return i
    }
  }
};

//b) Create the function that makes the test pass.

/*
PSEUDO CODE FOR RETURNING THE INDEX OF THE FIRST vowel
  Goal: filter index zero by aeiou and identify the INDEX

  Run the word through a map (this will convert to array)
  For each letter in the map, filter if this is a vowel/ aeiou
    if true = return the index
    else false = check the next letter


*/
