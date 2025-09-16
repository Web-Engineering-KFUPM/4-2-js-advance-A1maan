/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/

const student = {
  first: "Ada",
  last: "Lovelace",
  _gpa: 3.8,             // underscore means "internal field" by convention
  get fullName() {       // computed when read
    return this.first + " " + this.last;
  },
  get gpa() {            // safe read access
    return this._gpa;
  },
  set gpa(value) {       // safe write access with validation
    if (value >= 0 && value <= 4) {
      this._gpa = value;
    }
  }
};

console.log(`Student Name: ${student.fullName}, GPA: ${student.gpa}`);

 


// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/

const courseMap = {
  ICS104: "Introduction to Python Programming",
  MATH201: "Calculus III",
  ENG214: "Academic and Professional Communication",
};

for (key in courseMap) {
   console.log(`Course Code: ${key}, Title: ${courseMap[key]}`);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/

const myString = "Hello, JavaScript!";
console.log(`Character at index 0: ${myString.charAt(0)}`);
console.log(`String length: ${myString.length}`);


// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/

const currentDate = new Date();
console.log(`Current Date: ${currentDate.getDate()}`);
console.log(`Current Month (0-11): ${currentDate.getMonth()}`);
console.log(`Current Year: ${currentDate.getFullYear()}`);

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/

const numbersArray = [34, 7, 23, 32, 5, 62, 32, 14, 8, 19];
const minNumber = Math.min(...numbersArray);
const maxNumber = Math.max(...numbersArray);
console.log(`Minimum value: ${minNumber}`);
console.log(`Maximum value: ${maxNumber}`);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/

const findMax = (arr) => {
   return Math.max(...arr);
};

try{
      const emptyArray = [];
      const maxElement = findMax(emptyArray);
  } 
  catch(e) {
      console.log("Error: The array is empty.");
  }
  finally{
      console.log("Function execution completed.");
  }

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/

const words = ["ban", "babble", "make", "flab"];
const pattern = /ab/;

words.forEach(w => {
  if (pattern.test(w)) {
    console.log(`${w} matches!`);
  }
});

// End of Advance JavaScript Lab — good luck!
