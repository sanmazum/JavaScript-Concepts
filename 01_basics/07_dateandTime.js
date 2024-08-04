// Dates

let myDate = new Date()

console.log(myDate); // 2024-08-04T13:16:03.804Z

console.log(myDate.toString())  // Sun Aug 04 2024 13:16:48 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) // Sun Aug 04 2024
console.log(myDate.toLocaleString()) // 8/4/2024, 1:18:48 PM
console.log(typeof myDate) // object ( This is an important question in terms of interview)


let myCreatedDate1 = new Date(2023, 0, 23)
let myCreatedDate2 = new Date(2023, 0, 23,5,3)  // giving more arguements will extend till timings
console.log(myCreatedDate1); // 2023-01-23T00:00:00.000Z
console.log(myCreatedDate1.toDateString()); // Mon Jan 23 2023

console.log(myCreatedDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM

// giving date in the form of mm-dd-yyyy - we follow in india like this

let date1 = new Date("01-14-2023")

console.log(date1.toLocaleString()) // 1/14/2023, 12:00:00 AM

// giving date in the form of yyyy-mm-dd 

let date2 = new Date("01-15-2023")
console.log(date2.toLocaleString()) // 1/15/2023, 12:00:00 AM

//-----------------------------TimeStamp--------------------------------------


let myTimeStamp =  Date.now()
console.log(myTimeStamp);  // 1722778308298- milisecond value from jan 1 1970  till current date

console.log(date1.getTime()); //1673654400000- We get the millisecond value after after doing the getTime() method in Date object

console.log(Math.floor (Date.now()/ 1000)); // conversion of milisecond into Seconds [Imp for interview]

let newDate = new Date ()

console.log(newDate)  // 2024-08-04T13:38:35.624Z
console.log(newDate.getMonth()) // 7 -> in JS month starts with 0. Like 0-Jan, 1-Feb, 2-March ........
console.log(newDate.getMonth()+ 1 ) // 8 -> Sometimes in Production code developer write it like this so that the user is not confused for the month. As developer, we know months/Days in JS starts with 0.

//customising the date with toLocaleString, we can also define the timezone we need- it's very important.
newDate.toLocaleString('default' , {
    weekday : "long",
    // timeZone : '' ,
})





