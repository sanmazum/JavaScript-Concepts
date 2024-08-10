// forEach loop -> takes a callback function as parameter.

const coding = ["JS", "rb", "py", "java", "cpp"];

coding.forEach(function (val) {
  console.log(val); // o/p -> JS, rb, py, java, cpp
});

//callbacks are callback, be it normal or arrow function, works same

coding.forEach((item) => {
  console.log(item); //  o/p -> JS, rb, py, java, cpp
});

// we can pass a function to for each as well
// printMe() just prints the item

function printMe(item) {
  console.log(item); //  o/p -> JS, rb, py, java, cpp
}

coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);

  /* forEach can take index and array as parameter too apart from values
     o/p -> JS 0 [ 'JS', 'rb', 'py', 'java', 'cpp' ]
                rb 1 [ 'JS', 'rb', 'py', 'java', 'cpp' ]
                py 2 [ 'JS', 'rb', 'py', 'java', 'cpp' ]
                java 3 [ 'JS', 'rb', 'py', 'java', 'cpp' ]
                cpp 4 [ 'JS', 'rb', 'py', 'java', 'cpp' ]
    
    */
});

// Array of Objects -> Need to understand the iteration
const job = [
  {
    languageName: "JavaScript",
    jobName: "Js Developer",
  },
  {
    languageName: "Java",
    jobName: "Java Developer",
  },
  {
    languageName: "Python",
    jobName: "Python Developer",
  },
];

job.forEach((item) => {
  // this item has access to the each objects-> {}, which has property name.
  console.log(item.languageName); // o/p-> JavaScript,Java,Python
});
