function one(){
     const username = "Sandeepan"

     function two(){
        const website = "youtube"
        console.log((username));
        
     }
    //  console.log(website);  // ReferenceError: website is not defined -> Arey Sir, website kaha access kar rahe ho? Scope toh function two() mey hi tha uska.

     two()  // o/p-> after commenting line 9 , o/p-> sandeepan
     
}

one()


if (true) {
    const usrName = "Kohli"
    if (usrName === "Kohli") {
        const wbsite = "netflix"
        console.log(usrName + wbsite);    // after commenting line 27, o/p-> Kohlinetflix
    }
    // console.log(wbsite);  // ReferenceError: wbsite is not defined
}

// console.log(usrName); //  after commenting line 24, this also gives output -> usrName is not defined


// ++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++

function addOne(num){
    return num+1
}
addOne(5)

// now if you take addOne2() before declaration like below, you will not get any error.

addOne2(5)
function addOne2(num){
    return num+1
}




// This addTwo is called Function expression - holding function in variuable
const addTwo = function(num){
    return num+2
}
addTwo(5)



// however if you access addTwo2() before function expression, you get a Reference error-> cannot access 'addTwo2' before initialization. See the example below :-
addTwo2(5)
const addTwo2 = function(num){
    return num+2
}
