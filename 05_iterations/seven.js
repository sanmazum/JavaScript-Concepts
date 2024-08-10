// map- method -> It returns a value by default.

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((num) => num + 10);

console.log(newNums); // o/p-> [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Chaining concept.
// point to notice -> `upnNum` holds the updated value of the first method.
// in first map -> numbers got multiplied by 10 and array - [10,20,30,40,50,60,70,80,90,100]
// in second map-> upName holds the multiplied array and then adds 1 in each.
// So final results -> [  11, 21, 31, 41,  51, 61, 71, 81, 91, 101]


const chainedNums = myNumbers.map((num) => num * 10).map((upNum) => upNum + 1);
console.log(chainedNums); // [  11, 21, 31, 41,  51, 61, 71, 81, 91, 101]

// There is no limit of chaining. You can do as much as you want. I'm doing one more filter method here.
const chainedNums2 = myNumbers.map((num) => num * 10).map((upNum) => upNum + 1).filter((n) => n >= 40);
console.log(chainedNums2); // [  41, 51,  61, 71,81, 91, 101]

