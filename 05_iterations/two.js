// while loop 

let index = 0

while (index < 10) {
    console.log(`value of index is ${index}`);
    index = index + 2 ; 
}

/* O/p->  value of index is 0
value of index is 2
value of index is 4
value of index is 6
value of index is 8 */


let myArray = ["flash" , "Superman", "Spiderman"]
let arr = 0 
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr+1;
    
}
/* o/p-> value is flash
value is Superman
value is Spiderman */



// Do-while loops. first work then check condition

let score = 1

do {
    console.log(`Score is ${score}`);
    score++    
} while (score <=10);

/* o/p-> Score is 1
Score is 2
Score is 3
Score is 4
Score is 5
Score is 6
Score is 7
Score is 8
Score is 9
Score is 10 */


let myBalance = 102

do {
    console.log(`Balance is ${myBalance}`);
    myBalance++    
} while (myBalance <=100);  // o/p-> alance is 102. Because it does the work first and then checks condition.
