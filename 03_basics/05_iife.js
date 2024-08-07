// IIFE -> Immediately Invoked Function Expressions(IIFE) - we use this, when we immediatley want this function to run without any pollution from global scope

// IIFE can be written as -> ()(); Example ->


//named iife :- 
(function chai(){
    console.log('Db connected'); //Db connected 
    
})();

// without semicolon above for iife, we ran into error. so that's mandatory because code doesn't understand when to end. 

// Whenever you write two iifes, always remeber to give semicolon to the first iife so that the code executes and no error comes up.


//simple iife-> 
( () => {
    console.log("Lets learn JS together"); // Lets learn JS together
} )();


// passing parameter in iife
( (name) => {
    console.log(`Lets learn JS together ${name}`); // Lets learn JS together Sandeepan
} )("Sandeepan")

