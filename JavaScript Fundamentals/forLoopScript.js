"use strict";

for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weight repitition ${rep} 🏋🏼‍♂️ `);
}

//------------------------------------------------

// Looping Array:
const rumi = ["Rumaesa", "Developer", 24, ["Sameer", "Lyba", "Alisha"]];

console.log(rumi);
for (let i = 0; i < rumi.length; i++) {
  console.log(rumi[i]);
}
console.log("______");

const rumiType = [];

for (let i = 0; i < rumi.length; i++) {
  console.log(typeof rumi[i]);
  rumiType.push(typeof rumi[i]);
}

console.log(rumiType);

const years = [2023, 1999, 1987, 2000, 1999];
const age = [];

for (let i = 0; i < years.length; i++) {
  const calculatedAge = 2024 - years[i];
  console.log(calculatedAge);
  age.push(calculatedAge);
}

console.log(age);

// Continue and Break:

/*
Continue: it is used to exit the current iteration and move to the next iteration.
Break: it is used to completely terminate the execution and exit from the loop.
*/

// continue:

console.log("--------- ONLY STRING ----------");
for (let i = 0; i < rumi.length; i++) {
  if (typeof rumi[i] !== "string") continue;
  console.log(rumi[i], typeof rumi[i]);
}

// break:

console.log(`--------- IF NUMBER IS FOUND EXIT THE LOOP ----------`);
for (let i = 0; i < rumi.length; i++) {
  if (typeof rumi[i] === "number") break;
  console.log(rumi[i], typeof rumi[i]);
}

// ----------------------------------------
// Looping Backward:

console.log(rumi);

console.log("--------- Backward Looping ---------");
for (let i = rumi.length - 1; i >= 0; i--) {
  console.log(rumi[i]);
}

console.log(rumi.length);

// Loop Inside of Loop:
// Challege:
// Perfrom 3 exercise 5 times:

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-------------- Performing exercise ${exercise} ---------------`);
  for (let rep = 1; rep <= 5; rep++) {
    if (exercise === 1) {
      console.log(`🏋🏼‍♂️ ${rep}`);
    }
    if (exercise === 2) {
      console.log(`🧎🏼‍♀️ ${rep}`);
    }
    if (exercise === 3) {
      console.log(`🤸🏼‍♀️ ${rep}`);
    }
  }
}
