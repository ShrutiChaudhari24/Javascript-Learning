// Q1. What's the difference between function decleration and expression in terms of hoisting
// hoisting -> access before decleration

// function call before decleration can work properly without any error eg:=
add(3,4);

function add(val1, val2){
    console.log(val1 + val2);
} 

// but function expression will give a error
// error msg :- ReferenceError: Cannot access 'sum' before initialization
// eg :=

// sum(5,5);
// let sum = function(val1, val2){
//     console.log(val1+val2);
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q2. give o/p
greet();
function greet(){
    console.log("Hello!");
}
// o/p := Hello!

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q3. convert this function into arrow function
        // function multiply(a, b){
        //     return a * b;
        // }
let multiply = (a, b) => {   // remove function word put let functionName = (parameters) => {// body of function};
    return a * b;
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q4 : -identify parameter and argument
function welcome(name){
    console.log(name);
}
welcome("Shruti");
// parameter = name and argument = Shruti

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q5 :- how many parements these function has and how many arguments user can pass
function demo (a,b,c){}
demo(1,2);
// o/p := these functions has 3 parameters and max user can pass 3 arguments but here user has passed only 2 arguments so thirs argument is undefined

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q6 :- Predict o/p
function sayHi (name = "Guest"){
    console.log("Hi", name);
}
sayHi();
// o/p := Hi Guest

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q7. what doess the ... operator means in parameters
// ans => this means we can pass n number of arguments ie . rest operator 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q8. Use rest parameter to accept any number of scores and return the total
function getScore(...scores){
    let total = 0;
    scores.forEach(function(val){   // arrays mae loop easae chalta hai
        total = total + val;
    });
    return total;
}
console.log(getScore(10,12,14,18));  // this is array

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  Q9. fix this function using early return
// function checkAge(age){
//     if(age < 18){
//         console.log("Too young");
//     }else{
//         console.log("Allowed");
//     }
// }

function checkAge(age){
    if(age < 18)  return "Too young"; 
    return "Allowed";
}

console.log(checkAge(21));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q 10. what is the return value of this function
function f(){
    return;
}
console.log(f()); //  undefined

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q 11. What it mean when we say "Function are first-class citizens?"
// when we treat functions like values means we can pass them as argument and return them in other function like a value

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q 12. Can you assign a function to a variable and then call it? Show how
let myFun = function(){
    console.log("I am a function which is assign to a variable");
};
myFun(); // this is how it is called

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q13. Pass a function into another function and execute it inside
function abcd(val){
    val();
}
abcd(function(){    // ess ka matlab hai let val = abcd () 
    console.log("hey");
})

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q14. What is a higher order Function
// -> ek easa function jo return kare dusra function ya fir ek easa function jo accept kare dusra function as a argument
// dono mae sae ager ek bhi condition true hai tho it is higher order function
// eg :- 
function xyzw(){
    return function abcd(){

    };
}

// or 
function pqrs(val){
    val();  // this is a higher order function because it is accepting function as argument
}
pqrs(function abcd (){

});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q15. Identify which is higher order function
[1, 2, 3].map(function(x){
    return x * 2;
});
// map is higher order function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q16. Is this pure or impure function
let total = 0;
function addToTotal(num){
    total += num;
}
// this addToTotal is a impure function because it is changing the outer value total

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q17. convert the above function into a pure function
// let total = 0;
// function addToTotal(num){
//     total += num;
// }
let total_ = 0;
function addToTotal(num){
    let newTotal = total_;
    newTotal += num;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q18. What is a closure ? When it is created
// -> ek easa function jo return kare ek aur function aur ander wala function bhar wale function ko use kare (uss ki kisi value ko use kare)
function myClosureFun (){
    let val;
    return function (){
        console.log(val);
    };
} 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q19. What is Output
function outer(){
    let count = 0; 
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer(); // outer ko call kiya aur uss ki value counter function ko dae di matlab jo outer function hai uss ka name counter hai
counter(); // humney counter ko call kiya 1st time tho ander wala function chala aur print huya 1
counter(); // then again ander wala function chala aur counter badh kae ho gaya 2 
// o/p := 1
//        2

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q.20 Convert this normal function into IIFE
// function init (){
//     console.log("Initialized");
// }

// just wrap the whole function into circular brackets and immediately after that () write this to immediately call this function
(function init (){
    console.log("Initialized");
})();

// Q21. What is the use of IFFE? Name one real-world use case
// use case := when we want to create private variable
// eg := 
let myvar = (function (){
    let score = 0;
    return {
        getScore: function() {
            console.log(score);
        },
        setScore: function(val){
            score = val;
        },
    };
})();

console.log(myvar.getScore());
console.log(myvar.setScore(5));
console.log(myvar.getScore());

// Q22. what will be the output here and why?
// greeet();

// var greeet = function () {
//     console.log("Hi");
// };

// ans =>  TypeError: greeet is not a function

// Q23. what will be the output here and why?
greett();
function greett(){
    console.log("Hi!!")
}


// o/p := Hi!!

