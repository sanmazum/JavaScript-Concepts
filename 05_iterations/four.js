const obj = {
  js: "JavaScript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

/* Now since in objects `for of` loop didn't work, so we use `for in` loop for that */

for (const key in obj) {
  console.log(key);

  /* Output -> js
                cpp
                rb
                swift 
    */

  // Now I want to take out the object , and we can do like below and we get the values printed :-
  //  console.log(obj[key]);  // O/p-> JavaScript, C++, ruby ,  swift by apple

  console.log(`${key} is the shortcut for ${obj[key]}`);

  /* O/p->
        js is the shortcut for JavaScript
        cpp is the shortcut for C++
        rb is the shortcut for ruby
        swift is the shortcut for swift by apple
 */
}

const programming = ["JS", "rb", "py", "java", "cpp"];

// For Arrays -> Keys start with 0,1,2,3,4

for (const key in programming) {
  //  console.log(key); // o/p-> 0,1,2,3,4
  // to extract values, we do liks this
  console.log(programming[key]); // o/p-> JS,rb,py,java,cpp
}



const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fra", "France");
map.set("ESP", "Spain");

for (const key in map) {
  console.log(key); // No output -> Because Maps are not iterable.
}
