// for of

["", "", ""][({}, {}, {})];

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num); // o/p-> 1 2 3 4 5
}

// <---------------------------------------------------------------------------------->

/* 'greet' is just a name given to the iterator. You can give it a name as 'i', 'j' .. anything */

const greetings = "Hello World";

for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

/* o/p->  Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is  
Each char is W
Each char is o
Each char is r
Each char is l
Each char is d */

// <---------------------------------------------------------------------------------->

// Maps - Values are unique and stays in order only. This how we set values inside Map.

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fra", "France");
map.set("ESP", "Spain");
map.set("IN", "India"); // intentionally giving duplicate values, to verify that maps only registers unique values

console.log(map); /* Output-> {
    'IN' => 'India',
    'USA' => 'United States of America',
    'Fra' => 'France',
    'ESP' => 'Spain'
  } */

for (const key of map) {
  console.log(key);
  /* Output -> [ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fra', 'France' ]
[ 'ESP', 'Spain' ]
*/
}

/* But I want to print with key and values using for of method. We will simply give square brackets
 [] in the for of loop.

 Here "Object" refers to the datatype where we are applying loop and not the JS objects in usual

 for(const [ key, value] in the Object){
 }
*/

for (const [key, value] of map) {
  console.log(key, ":-", value);

  /*
       Output -> IN :- India
                USA :- United States of America
                Fra :- France
                ESP :- Spain
    */
}

// <---------------------------------------------------------------------------->

/* for of loops are NOT iterable on Objects Here is the example you see :- */

const myObject = {
  game1: "NFS",
  game2: "Desert Storm",
};

for (const [key, value] of myObject) {
  console.log(key, ":-", value);  // O/p-> TypeError: myObject is not iterable
}
