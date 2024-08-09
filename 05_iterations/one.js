// for loop ->


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(index); // ReferenceError: array is not defined


for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element); // o/p-> 0,1,2,3,4,5,6,7,8,9    
}


for (let i = 0; i < 10; i++) {
    console.log(`Outer loop value : ${i}`);
   for (let j = 0; j < 10 ; j++) {
    console.log(`inner loop value : ${j} and outer loop ${i}`);
   }
    
}   

/* 
 O/P-> This output will help to visualise how nested for loops actually work.

Outer loop value : 0
inner loop value : 0 and outer loop 0
inner loop value : 1 and outer loop 0
inner loop value : 2 and outer loop 0
inner loop value : 3 and outer loop 0
inner loop value : 4 and outer loop 0
inner loop value : 5 and outer loop 0
inner loop value : 6 and outer loop 0
inner loop value : 7 and outer loop 0
inner loop value : 8 and outer loop 0
inner loop value : 9 and outer loop 0
Outer loop value : 1
inner loop value : 0 and outer loop 1
inner loop value : 1 and outer loop 1
inner loop value : 2 and outer loop 1
inner loop value : 3 and outer loop 1
inner loop value : 4 and outer loop 1
inner loop value : 5 and outer loop 1
inner loop value : 6 and outer loop 1
inner loop value : 7 and outer loop 1
inner loop value : 8 and outer loop 1
inner loop value : 9 and outer loop 1
Outer loop value : 2
inner loop value : 0 and outer loop 2
inner loop value : 1 and outer loop 2
inner loop value : 2 and outer loop 2
inner loop value : 3 and outer loop 2
inner loop value : 4 and outer loop 2
inner loop value : 5 and outer loop 2
inner loop value : 6 and outer loop 2
inner loop value : 7 and outer loop 2
inner loop value : 8 and outer loop 2
inner loop value : 9 and outer loop 2
Outer loop value : 3
inner loop value : 0 and outer loop 3
inner loop value : 1 and outer loop 3
inner loop value : 2 and outer loop 3
inner loop value : 3 and outer loop 3
inner loop value : 4 and outer loop 3
inner loop value : 5 and outer loop 3
inner loop value : 6 and outer loop 3
inner loop value : 7 and outer loop 3
inner loop value : 8 and outer loop 3
inner loop value : 9 and outer loop 3
Outer loop value : 4
inner loop value : 0 and outer loop 4
inner loop value : 1 and outer loop 4
inner loop value : 2 and outer loop 4
inner loop value : 3 and outer loop 4
inner loop value : 4 and outer loop 4
inner loop value : 5 and outer loop 4
inner loop value : 6 and outer loop 4
inner loop value : 7 and outer loop 4
inner loop value : 8 and outer loop 4
inner loop value : 9 and outer loop 4
Outer loop value : 5
inner loop value : 0 and outer loop 5
inner loop value : 1 and outer loop 5
inner loop value : 2 and outer loop 5
inner loop value : 3 and outer loop 5
inner loop value : 4 and outer loop 5
inner loop value : 5 and outer loop 5
inner loop value : 6 and outer loop 5
inner loop value : 7 and outer loop 5
inner loop value : 8 and outer loop 5
inner loop value : 9 and outer loop 5
Outer loop value : 6
inner loop value : 0 and outer loop 6
inner loop value : 1 and outer loop 6
inner loop value : 2 and outer loop 6
inner loop value : 3 and outer loop 6
inner loop value : 4 and outer loop 6
inner loop value : 5 and outer loop 6
inner loop value : 6 and outer loop 6
inner loop value : 7 and outer loop 6
inner loop value : 8 and outer loop 6
inner loop value : 9 and outer loop 6
Outer loop value : 7
inner loop value : 0 and outer loop 7
inner loop value : 1 and outer loop 7
inner loop value : 2 and outer loop 7
inner loop value : 3 and outer loop 7
inner loop value : 4 and outer loop 7
inner loop value : 5 and outer loop 7
inner loop value : 6 and outer loop 7
inner loop value : 7 and outer loop 7
inner loop value : 8 and outer loop 7
inner loop value : 9 and outer loop 7
Outer loop value : 8
inner loop value : 0 and outer loop 8
inner loop value : 1 and outer loop 8
inner loop value : 2 and outer loop 8
inner loop value : 3 and outer loop 8
inner loop value : 4 and outer loop 8
inner loop value : 5 and outer loop 8
inner loop value : 6 and outer loop 8
inner loop value : 7 and outer loop 8
inner loop value : 8 and outer loop 8
inner loop value : 9 and outer loop 8
Outer loop value : 9
inner loop value : 0 and outer loop 9
inner loop value : 1 and outer loop 9
inner loop value : 2 and outer loop 9
inner loop value : 3 and outer loop 9
inner loop value : 4 and outer loop 9
inner loop value : 5 and outer loop 9
inner loop value : 6 and outer loop 9
inner loop value : 7 and outer loop 9
inner loop value : 8 and outer loop 9
inner loop value : 9 and outer loop 9 */

let myArray = ["flash" , "Superman", "Spiderman"]
console.log(myArray.length); // o/p-> 3

for (let index = 0; index < myArray.length; index++) {
    const printArr = myArray[index];
   console.log(printArr); // o/p-> flash, Superman , Spiderman
     
}


// Keywords -> break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        break ;  // This breakes the entire control flow.    
    }
    console.log(`value of i is ${index}`);    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue ;  // continue -> condition is ignored and control flow remains continued. Basically skips the condition once.
    }
    console.log(`value of i is ${index}`);    
}