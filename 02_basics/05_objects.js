 const course = {
    courseName : "JS-concepts",
    price : "499",
    courseInstructor : "Sandeepan",
 }

 // Object destructure

 const { courseInstructor} = course
 console.log(courseInstructor)   // O/p-> Sandeepan

 // JSON- JavaScript Object Notation. Below is how the JSON data looks like, when we get data from API

//  {
//     "name" : "Sandeepan",
//     "courseName" : "JS-concepts",
//     "price" : "free"
//  }