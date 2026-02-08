// datatypes := data ka type
// data can be anything  := 12, "shruti", true, [], {}, (), null, undefined, NaN, bigINT; 
// datatypes are mainly of two types in JS := 
// 1) primitive := jin mae brackets nahi hai 2) non primitive aka reference datatypes := jin mae brackets hai
// primitives can directly copy references can not directly copy


// primitives -> aisi sari values jinko copy karne par tumehe ek real copy mil jaaye
let a = 12;
let b = 12;

a = a + 12;
console.log("a:=", a ); // o/p : =24
console.log("b:=", b); // o/p := 12  // a ka 12 change huya hai b ka nahi

// copy mae change hota hai

// Primitive types (string, number, boolean, null, undefined, symbol, bigint)

// 1) string
// '' - single quotes , "" - double quotes,  `` - backticks this are the three ways to make strings
let myname = "Shruti";
let myFavGame = `Chess`;
const myFull_name = 'Shruti Chaudhari';

// 2) number := weather its a integer or a decimal (float) value we will say it is a number
let num = 12;
let mynum = 12.5;
let negNum = -2;
const accountNo = 12345678;

// 3) boolean := either true or false
let p = true;
let q = false;

// 4) null := null means humnae janbuze kar koi value nahi di means aage ja kae hum koi value dae bhi sakte hai uss mae per abhi currently humey nahi pata ki kya value hai
let selectedStudents = null;
selectedStudents = 'Shruti';

// 5) undefined := undefined means ki humney ek variable banaya aur usey value nahi di tho jo value by default mili vo hai undefined
let xyz;
console.log(xyz);  //o/p := undefined

//Note :=  null is given by us undefined is given bydefault from engine

// 6) symbol := it create unique immutable value
// future mae hum koi libraries use karenge ab is case mae un libraries
// mae kai baar kuch fields hoti hai jinse similar hum bhi banaa dete hai
// aur galti sae humaari banaai hui fields us library ki originl fields ko
// change kar deta hai
let user = {
    uid : 1,
    model: "phone"
}
user.uid = 12;  // this will override uid 
console.log(user); //o/p := { uid: 12, model: 'phone' }
// thats why we use symbol

let obj = {
    uid: 1,
    name: "shruti",
    age: 12,
    email: "abc@gmail.com"
};
let u1 = Symbol("uid");
obj[u1] = "001";

console.log(obj);  /* {
                            uid: 1,
                            name: 'shruti',
                            age: 12,
                            email: 'abc@gmail.com',
                            [Symbol(uid)]: '001'
                       } */

//Symbol is a primitive data type (introduced in ES6) used to create unique and immutable identifiers.
// Key Features := 
// Every Symbol() is unique, even if they have the same description.
// Mainly used as object property keys to avoid name collisions.
// Not enumerable in normal loops like for...in.

// 7) bigint
let abc = 156526453745827392173n;
abc = abc + 12n;
console.log(abc);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// reference -> inko copy karne par real copy nahi milegi but aapko reference milega -parent ka
// [] {} ()
let c = [1,2,3];
let d = c;
console.log(c); // o/p := [1,2,3]
console.log(d);  //here o/p :- is also [1,2,3] we think that it is same what is different the thing is here the value of c is also value of d matlab abb sae c ki jo value hogi vo d ki bhi value hogi abhi sae
// means any change in d also changes the value of c see below eg
d.pop();
console.log(c);
console.log(d);

// Reference types (arrays, objects, functions)
// reference mae change hota hai (original mae change hota hai)

// then how to copy := using spread operator when we study arrays we will see there

// 1) arrays
let arr = [100, 27890, 3121];
console.log(arr);

let brr = arr;
brr.push(1234567);
console.log(arr);  // brr = arr karne pae arr mae change ho jayega 

// objects
let myobj = {
    name: "shruti",
    place : "Khamgaon"
};
console.log(myobj);

// functions
function myfun(){
    console.log("Hello");
}
myfun();


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Dynamic typing
// -> js mae static typing nahi hai and yaha per hai 
// dynamic typing matlab aap data ko change kar sakte ho kyuki 
// yaha per dynamic data types hai

// in other programming language 
// int a = 12;
// then we can not do like this a = true

// but in js we have var, let and const
// so if we do this 
let pqr = 23232;
pqr = true;  // because in js we have not restricted that pqr only holds number value it can be modified in future  
pqr = 'shruti';
pqr = null;

// but static typing is good compare to dynamic typing

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// typeof quirks(eg., typeof null === 'object')
// typeof() is used to check datatype 
console.log(typeof(12));
console.log(typeof('Shruti'));

// typeof quirks
console.log(typeof(null)); // object
console.log(typeof(NaN)); // not a number ka type is number 
console.log(typeof(arr)); // object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// type coercion(== vs ===)
// type coercion -> concept jismae hamera ek type automayically convert hojayega
console.log("5" + 1);// o/p := 51  // + behaving like concatenation ager ek bhi operand string nikal gaya
// + 2 kam karta hai add or concatenation

// - ek hi kam kar sakta hai
console.log('4' - 1); // o/p := 3

let ghi = (NaN === NaN);
console.log(ghi);

console.log(2 == '2'); // true
console.log(2 === '2'); // false

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// truthy vs falsy values

// all the values which are 0, false, null, undefined, NaN, document.a this are falsy
// others are truthy

if(-1){ // true
    console.log("even it is -1 it is truthy value");
}


