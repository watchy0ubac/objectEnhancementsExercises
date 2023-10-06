//In this exercise, you'll refactor some ES5 code into ES2015. Write your code in the sections with a comment to "Write an ES2015 version"

// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }
const createInstructor = (firstName, lastName) => {
  return {
    firstName,
    lastName,
  };
};

//Computed Property Names
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

//ES2015 version
// let favoriteNumber = 42;

// const instructor = {
//   firstName: "Colt",
//   [favoriteNumber]: "That is my favorite!",
// };

//Object methods
// var instructor = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }

//ES2015 version
const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};

//Write a function which generates an animal object. The function should accept 3 arguments
//species: the species of an animal ('cat','dog')
//verb: a string used to name a function ('bark', 'bleet')
//noise: a string to be printed when above function is called ('woof', 'baa')
//Use one or more of the object enhancements we've covered

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}
