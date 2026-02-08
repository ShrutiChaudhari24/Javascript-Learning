// var, let, const - line-by-line comparision

mynumber = 10; // bug in JS this is allowed in js but this is not good practice

// decleration vs initialization
var name; // declaration means just creating the variable
var name = "john"; // initialization means assigning a value to a variable for first time 

// var := used to store values that may change in future but as it is not blocked scope we can change it in anywhere within function so not a good practice so we will avoid it
var c;
var a = 12;
var a = 24; // we can redeclare it and error will not come
var username = "shruti";
var b = ((23*12-89)%45)*122;
console.log(b);

// let := is used to store values which may change in future , it is block scoped
let x;
let y = 12;
y = 45;
let z = 80*67*12;
let char = 'a';
let myname = "shruti";
console.log(z,y,char,myname);

// const := is used to store values which never change they are fixed eg := value of PI
const PI = 3.14;
// const p // this will give you error because const has to always initialize with some value -> SyntaxError: Missing initializer in const declaration
// console.log(p); 
const account_number = 404;


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// scope := scope means ap ka dayra kaha tak hai (global, block, functional)
// means if we have decalred a variable what is the area upto which we can use that variable

var num =  2429; // global scope (the variable which is not inside any curly braces)

function abcd() {
    var a = 12;  // functional scope we can use this variable within function only
}

// block scope
{
    let cd = 89;  // any variable which is inside any braces is block scope this braces can be of loop or if-else etc
    var op = 1000;
   
}
    op = 120000;   // var does not respect block that's why it is not block scoped only function scoped which makes it bad practice
    //console.log(cd); // this gives error cd not define because it is block scoped

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// reassignment and redeclaration

var xyz = 12; // decleration and initialization
xyx = 32; // reassignment

var xyz = 232 // redeclaration is allowed

let abc = 12;
abc = 32;

// let abc = 2432; redeclation of let variable is not allowed in JS

// redeclaration is possible with var but not possible with let

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Temporal Dead Zone (TDZ) imp for interview

// 2)but before decalring that we are using it
// console.log(mynum);
// 1)suppose we are creating one variable 
let mynum = 12;

// if we are doing like this with any other programming language we will get one error that variable not defined but in JS we got this error := Cannot access 'mynum' before initialization
// JS already knows that it is there but it cannot access it because it is accessed before declaration
// so TDZ is that much area in which JS knows that variable exist but JS is not able to give value to us
// variable create hone kae phele ka jitna area hai vo hai temporal dead zone
// it is for let and const only, var has bydefault its value undefined so first it prints undefined then updated to 67 
console.log(zxy);
var zxy = 67;
// TDL is not in var

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Hoisting imapct per type
// Hoisting -> ek variable ko jab js mae banatae hai to wo 
// variable do hisso mae toot jata hai and uska declare part 
// upar chala jata hai and uska initialization part neeche reh jata hai

var a = 12; // ye line

// easse tooti hai
var a = undefined;  // ye top pae chala jata hai
a = 12;

// thats why we can able to access var even if its TDZ

// Note := hoisting 3no mae hoti hai kyoki even if jab hum let aur const mae phele value print karte hai tho 
// error ye aata hai Cannot access before initialization 
// ye nahi aata Cannot access before declaration 
// which means JS ko pata tho hai ki variable declare huya hai aur vo tho tab hi pata laga hoga n jab declration wala part top pae gaya hoga


// var -> hoist hota hai -> vaue set is undefined
// let -> hoist hota hai -> no value set
// const -> hoist hota hai -> no value set




