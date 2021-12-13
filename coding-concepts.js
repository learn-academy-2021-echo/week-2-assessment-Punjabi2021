// // ASSESSMENT 2: Coding Conceptual Questions
//
// // Examine the following examples.
//
// // First, predict the outcome based on your understanding of the code.
// // Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
//
// // --------------------1) What will this log?
//
// var cohort = "Echo 2021"
// // console.log(cohort.split(""))
//
// // a) Your answer: Every letter and space between Echo and 2021 will be output in quotation marks.
// // b) Verify and explain: the lack  of a space between the quotation marks sends the instruction to the terminal saying everthing inside of the quotation marks will be split into a pair ofquotation marks.
//
//
// // --------------------2) What will this log?
//
 const greeter = (name) => {
   `Hello, ${name}!`
 }
 console.log(greeter("LEARN Student"))
//
// a) Your answer: Hello (insert name) LEARN Student
// // b) Verify and explain:Hello (name) LEARN Student
//
//
// // --------------------3) What will this log?
//
// var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// // console.log(multBy2)
//
// // a) Your answer:8,10,12,14,16
// // b) Verify and explain: I was correct. By using the high order function of map the code was able to take the array and multiply by two
//
//
// // --------------------4) What will this log?
//
// var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// // console.log(onlyOdds)
//
// // a) Your answer: 11,13,15
// // b) Verify and explain: var onlyOdds declare the value and the modulus operator identified of the number was divisble two and seprates the onlyOdds
//
//
// // --------------------5) What will this log?
//
// var myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// // console.log(myCodingSkills.languages[0])
//
// // a) Your answer:JavaScript
// // b) Verify and explain:the information is being pulled from languages-index zero value.
//
//
// // --------------------STRETCH: What will this log?
//
// class Learn {
//   constructor(name){
//     this.student = name,
//     this.cohort = "Delta",
//     this.year = 2021
//   }
// }
 var learnStudent = new Learn("George")
 console.log(learnStudent)
//
// // a) Your answer:George is in Delta cohort 2021.
// // b) Verify and explain: Learn { student: 'George', cohort: 'Delta', year: 2021 } the format inside of the curly bracktes stayed the same and wasnt turned into a sentance.
