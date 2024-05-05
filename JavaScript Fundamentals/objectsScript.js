"use strict";

// -----------------------------------------------------------
// Introduction to Objects
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
]; // array

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
}; //object

/* 
  Object is a key value pair.
  syntax: objectName { variable(property): value, variable(property): value}
  diff between Array and Object:
  ** In object order of the value does not matter when we want to retrieve the value.
*/

// -----------------------------------------------------------

// Dot vs Bracket Notation:
/*
 * Retreive data in object.
 * Change data in object.
 */

// Retrieving Data from Object using Dot and Bracket Notation:

const rumi = {
  firstName: "Rumaesa",
  surname: "Ansari",
  age: 2024 - 2000,
  job: "developer",
  friends: ["Sameer", "Alisha", "Lyba"],
};

// retrieving value using Dot Notation.
console.log(rumi.firstName); // (. operator)

// retrieving value using Bracket Notation.
console.log(rumi["firstName"]);

// Diff: We can also specify expression in bracket notation.

const nameKey = "Name";
console.log(rumi["first" + nameKey]);

/*
const interestedIn = prompt(
  "What do you want to know about Rumi? choose between firstname, surname, age, job, friends"
);


console.log(interestedIn);
console.log(rumi[interestedIn]);

if (rumi[interestedIn]) {
  console.log(`${interestedIn} : ${rumi[interestedIn]}`);
} else {
  console.log(
    "Wrong input. Please choose between firstname, surname, age, job, friends ?"
  );
}
*/

// Adding Data into the object using Dot and Bracket Notation:

rumi.location = "Mumbai";
rumi["twitter"] = "@RumaesaAnsari";

console.log(rumi);

// Challenge:
// "Rumaesa has 3 friends, and her best friend is called Sameer" Dynamic "DONT HARD CODE!"'
console.log(
  `${rumi.firstName} has ${rumi.friends.length} friends, and her best friend is called ${rumi.friends[0]}.`
);

// -----------------------------------------------------------
// Object Methods:

const rumii = {
  firstName: "Rumaesa",
  surname: "Ansari",
  birthYear: 2000,
  job: "developer",
  friends: ["Sameer", "Alisha", "Lyba"],
  hasDrivingLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${2024 - this.birthYear} old ${
      this.job
    }, and she ${
      this.hasDrivingLicense ? " has a " : "dont have "
    } driving license.`;
  },
};

console.log(rumii.getSummary());

const jonass = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(jonass.getSummary());
console.log(rumii.age);

// --------------------------------------------------

// CHALLENGE:

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

*/

// SOLUTION:

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
