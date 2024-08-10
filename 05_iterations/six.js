const coding = ["JS", "rb", "py", "java", "cpp"];

const values = coding.forEach((item) => {
  console.log(item); // o/p -> JS, rb, py, java, cpp
});
console.log(values); // o/p-> undefined. forEach doesn't return anything, even if you give return mannually.Understand it below example

// Now let's consider another array and try to return the values

const animals = ["Cow", "dog", "monkey", "Tiger"];
const animalValues = animals.forEach((animal) => {
  console.log(animal); // o/p-> Cow,dog, monkey,tiger
  return animal;
});

console.log(animalValues); // o/p-> undefined. Still getting undefined after returning manully

// <----------------------------------------------------------------------------------------------->

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter returns a value

let numGreaterThanFour = myNums.filter((num) => num > 4);
console.log(numGreaterThanFour); // o/p-> [ 5, 6, 7, 8, 9, 10 ]

let numberGreaterThanSeven = myNums.filter((num) => {
  return num > 7;
});

console.log(numberGreaterThanSeven); // o/p-> [] . Without return keyword, when you are using curly braces in callback fn.
// o/p -> [ 8, 9, 10 ]. With return keyword while using curly braces in filter because scope is opened.

// Now if you want to use forEach for the same filter. How we can do that?

const numGreateThanOne = [];
myNums.forEach((num) => {
  if (num > 1) {
    numGreateThanOne.push(num);
  }
});

console.log(numGreateThanOne); // o/p-> [2,3,4,5,6,7,8,9,10]


// Array of Objects -> Filter methods usage 

const books = [
  {
    title: "Book1",
    genre: "Fiction",
    publish: 1981,
    edition: 2004,
  },
  {
    title: "Book2",
    genre: "Non-Fiction",
    publish: 1991,
    edition: 2005,
  },
  { title: "Book3", genre: "History", publish: 1867, edition: 2002 },
  { title: "Book4", genre: "Romantic", publish: 1999, edition: 2015 },
  { title: "Book5", genre: "History", publish: 1947, edition: 2017 },
  { title: "Book6", genre: "History", publish: 2000, edition: 2017 },
];

const userBooks = books.filter((bk) => bk.genre === "History");
const userBooks2 = books.filter((year) => year.publish >= 2000);

console.log(userBooks);
/*
o/p of userBooks-> [
  { title: 'Book3', genre: 'History', publish: 1867, edition: 2002 },
  { title: 'Book5', genre: 'History', publish: 1947, edition: 2017 }
]
*/

console.log(userBooks2); 

/*
Output of userBookes2 = [ { title: 'Book6', genre: 'History', publish: 2000, edition: 2017 } ]
*/