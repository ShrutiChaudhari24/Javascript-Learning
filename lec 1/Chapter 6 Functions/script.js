// Functions are the most important 

// What are Functions?
// Functions are blocks of reusable logic.
// Instead of repeating the same task again and again, wrap it in a function and reuse it with
// different inputs.
// Think of a function like a vending machine:
// Input: you give money + item code
// Output: it gives you the item
// Logic: hidden inside

// they are used to make code readable, reliable, reduce bulkyness , when we want to perform particular task at specific time we use function
// function runs only when we call them

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1) Functions declarations, expressions, and arrow functions

// syntax :=  
// function functionName(){
        // body of function
// }

// when we want to call function we can call it
function wish(){
    console.log("Happy new year");
}

if(true){
    wish();
}

// difference types to make function
// phele ek variable bana lo aur uss variable ki value hi function hai ess case mae humey function name likhne ki jarurat nahi hai
let fnc = function (){
    console.log("Hello")
};

fnc();

// function declaration or function statements
function abcd(){

}

// function expression
let myfunc = function abcd(){
    
};

// arrow functions aka (fat arrow function)
let myfun = () => {
    console.log("Heyyyy")
};

myfun();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2) Parameters Vs arguments

// this function is without Parameter and argument 
function print (){
    console.log("I like to play chess");
}

print();

// If we want that if whenweve we call the function it will show the different sports name
function printS (sportName){  //sportName is parameter
    console.log(`I Like to play ${sportName}`);
}

printS("golf");
printS("Cricket");
printS("Badminton");  // golf , Cricket , Badminton are arguments

function add(v1, v2){  // v1, v2 are the parameters
    console.log(v1 + v2);
}
add(3,5); // 3,5 are the arguments

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3) Default, rest and spread parameters 

function addition (v1, v2){
    console.log(v1 + v2);
}
addition();  // we have not send the arguments in it ie. value of v1 and v2 
// so the output we get is NaN ie Not a number 
// NaN output tab hi aata hai jab hum kisi ease numbers ka koi operation karte hai jo ki number hi nahi hai

// but ess mae hameri kya galti ki user nae value nahi di 
// -> ess liye hum use karte hai default parameters ka
function sum (v1 = 0, v2 = 0){  // here we have send the default parameters as 0 and 0 we can send any default value 1, 2, 5.. 
    console.log(v1 + v2);
}
sum();

function xyz(...val){   // when we don't know how many number of arguments will user send in this case we have to make that much parameters so we use this ... (only 3 dots) this will create array this is called as rest parameters
    console.log(val);    // in simple terms jab arguments kai saare ho tho humey utne hi parameters banaane padenge, issey bachne kae liye, hum rest ka use karte hai (...) this is rest and spread parameter
}                         // but when we call it rest and when we call it as spread ?? -> ager ... function kae parameter space mae lage tho vo rest operator hai and ager vo arrays nd objects mae lage to vo spread operator hai
xyz(1,2,3,4,5,6,7,8,9,10);

let nums = [1, 2, 3];
console.log(sum(...nums)); // Spread

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 4) Return values and early returns

// return
function hey(){
    return 12;
}
let val = hey();
console.log(val);

// early return already seen in if else

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//5) First-class funtions (assign to varibles, pass as arguments, return from other functions)
// -> basiaclly it is a concept that we can treat the functions as a value

// first class functions -> ease functions jin ko values ki tarah treat kar sakte hai,
//                       -> argumets ki tarah pass kar sakte hai 
//                       -> aur kisi aur functions mae return bhi karwa sakte hai 

// eg :- 
function ijk (val){
    val();
}
ijk(function (){
    console.log("heyHiiHello");
});


// JavaScript treats functions as values:
//               Assign to variables
//               Pass as arguments
//               Return from other functions

function shout(msg) {
return msg.toUpperCase();
}
function processMessage(fn) {
console.log(fn("hello"));
}
processMessage(shout);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//6) Higher-order funtions
// -> wo function jo ki return kare ek function ya fir accept kare ek function apne parameter mae
function hof(value){
  // this is a higher order function because it is accepting a function as a parameter
}
hof(function(){

})

// or if it is returning a function
function pqr(){
    return function(){

    }
}
pqr();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//7) Pure Vs impure functions

// easa function jo ki bhar ki value ko na badle vo hai pure function
let a =  24;
function pure(){
    console.log("My name is Shruti");
}

// easa function jo ki bhar ki value ko badledae vo hai impure function
function impure(){
    a++;
    console.log(a);
}
impure()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//8) Closures and lexical scoping

// closures -> ek function jo return kare ek aur function aur return hone waala function hamesha use karega parent function ka koi variable
// Closures = when a function remembers its parent scope, even after the parent has finished.

function bcd(){
    let a = 121;
    return function (){
        console.log(a);
    }
}
let op = bcd();
op();

function outer() {
let count = 0;
return function () {
count++;
console.log(count);
};
}
let counter = outer();
counter(); // 1
counter(); // 2
// Even after outer is done, counter still remembers count 

// lexical scoping := physical position ka scope
function pqrs(){
    let a = 24;   // we can access a inside pqrs
    function defg(){
        let b = 29;  // we can access a inside defg
        function ghij(){
            let c = 46;  // we can access a inside ghij 
        }
    }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//9) IIFE (Immediately Invoked Function Expressions)
(function(){

})(); // create a function invoke that function inside brackets immediately call that function

// eg :- 
(function () {
console.log("Runs immediately");
})();
// Used to create private scope instantly 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//10) Hoisting differences between declaration and expression 
// Hoisting -> declare karne sae phele access karn is hoisting we have seen in variables same with functions

// this is not allowed in other languages but in JS it is valid

//2) but before that we are calling it
play();

//1) declared a function
function play(){
    console.log("Lets have a chess match");
}

// but if we do like this like we are making function expression then we will get error := ReferenceError: Cannot access 'count' before initialization
count();

let count = function(){
    console.log("one two three...");
}