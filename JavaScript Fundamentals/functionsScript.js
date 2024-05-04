// Functions:
// creating a funcrion:
function logger() {
  console.log("My name is Rumaesa");
}

// calling / running / invoking / executing a function:
logger();
logger();

function fruitprocessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

fruitprocessor(10, 7);
const readyToServe = fruitprocessor(9, 4);
console.log(readyToServe);

// -----------------------------------------------------------

// Function Declaration VS Function Expression:

// Function Declaration:

function calcAge(birthYear) {
  return 2024 - birthYear;
}

console.log(calcAge);
// this is called function declaration, because we are just declaring the funtion using "function" keyword.

// Function Expression:

const age = function (birthYear) {
  return 2024 - birthYear;
};

// This is the function without name. Such functions are called as "Anonymus Functions".
// this is called Function expression. Because, as expression produces value.
// And here in this case we are storing the value produced by the expression.

// The major difference between Function Declaration and Function Expression is that, We can call Function Declartion before its Declaring it.

// -----------------------------------------------------------

// Arrow Function:

// Called Arrow Function because we use => arrow.
const age2 = (birthYear) => 2024 - birthYear;
console.log(age2(2000));

// Helpful when we have one parameter and one line of code. otherwise it becomes complicated to manage.

// For muliple parameters and multiple lines of code:
const yearsUntilRetirement = (birthYear, firstname) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstname} have ${retirement} years to retirement`;
};

console.log(yearsUntilRetirement(2000, "Rumaesa"));

// -----------------------------------------------------------

// Functions calling other Function:
const fruitCutting = (fruit) => fruit * 5;

function Juicer(apples, oranges) {
  const applePieces = fruitCutting(apples);
  const orangePieces = fruitCutting(oranges);
  return `Juice is made of ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
}

console.log(Juicer(2, 5));

// -----------------------------------------------------------
/*
  CHALLENGE #1
  
  Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
  
  Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
  
  A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
  
  Your tasks:
  
  Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).
  
  Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).
  
  Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).
  
  Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
  
  Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
  
  TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
  
  TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
  
  */

// SOLUTION:

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(scoreDolphins, scoreKoalas) {
  if (scoreDolphins > scoreKoalas * 2) {
    console.log(`Dolphins Win (${scoreDolphins} vs. ${scoreKoalas}`);
  } else if (scoreKoalas > scoreDolphins * 2) {
    console.log(`Koalas Win (${scoreKoalas} vs. ${scoreDolphins}`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(scoreDolphins, scoreKoalas);
