const name = "Sandeepan"
const repoCount = 12

console.log(name + repoCount + "Value")   // Not recommended now a days as it's a bad practice

console.log(`Hello my name is ${name} and my github repo count is ${repoCount}`) // recommended approach using string literals

// Another way of declaring String 

const gameName = new String('sanmazum-sm')
console.log(gameName);  // [String : 'sanmazum']
console.log(typeof gameName); // object

console.log(gameName[0]);  // prints-> s
console.log(gameName.__proto__); // to access the prototype( prints--> {})

console.log(gameName.toUpperCase()); // print-> SANMAZUM
console.log(gameName.charAt(2)); // which character is at index 2 (prints---> n)
console.log(gameName.indexOf('n')); // at which index a particular character is present (prints-> 2)

const newString = gameName.substring(0, 4) // argument takes (start index, end index), last value isn't included which is 4. Can't use negative values in index
console.log(newString) // prints -> sanm

const anotherString = gameName.slice(-8 , 4) // we can give negative index to splice as well
console.log(anotherString)  // prints -> m , in case of negative index, it starts from the end of the string and gives and array.

const newString1 = "    sanmazum    "
console.log(newString1); // prints -> sanmazum with space from front and end both
console.log(newString1.trim()); // prints -> sanmazum without space.


const url = "https//sandeepan.in/sandeepan%20mazumdar"

const replacedURL = url.replace('%20', '-')

console.log(replacedURL);  // prints-> https//sandeepan.in/sandeepan-mazumdar

const checkIncludesMethodInURL = url.includes('sandeepan') // asking question to string whether sandeepan is present in the url or not
console.log(checkIncludesMethodInURL); // prints-> true


console.log(gameName.split('-')) // prints on the basis of '-' ------> [ 'sanmazum', 'sm' ]


