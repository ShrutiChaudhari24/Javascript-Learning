// conditional check questions
// problem 1
let x = 10;
let y = 20;

if(x > 5 && y < 25){
    console.log("A");
}else{
    console.log("B");
}
// o/p := A

// problem 2
let isAdmin = true;
let isLoggedIn = false;

if(isAdmin || isLoggedIn){
    console.log("Access granted");
}else{
    console.log("Access denied");
}
// o/p := Access granted

// problem 3
let temp = 35;
if(!(temp < 30)){
    console.log("Hot");
}else{
    console.log("Pleasant");
}
// o/p := Hot;

// problem 4
let a = 0;
if(a){
    console.log("Truthy");
}else{
    console.log("Falsy");
}
// o/p := Falsy

// problem 5
let score = 78;

let grade = score >= 90 ? "A" : score >=75 ? "B" : score >= 60 ? "C" : "Fail";
console.log(grade);
// o/p := B

// problem 6
let points = 120;
let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze";
console.log(status);
// o/p := Gold

// problem 7
let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "allow" : "deny";
console.log(access);
// o/p := deny

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Increment decrement questions

// problem 1 
let z = 5;
z++;
console.log(z);
// o/p := 6

// problem 2
let b = 7;
++b;
console.log(b);
// o/p := 8

// problem 3
let w = 3;
let c = w++; // phele assign huya hoga then increment
console.log(w, c);
// o/p := w = 4 , c = 3

// problem 4
let p = 4;
let q = ++p; // increment then assign
console.log(p, q);
// o/p := p = 5 q = 5

// problem 5
let m = 10;
console.log(m--);// o/p := 10
console.log(m); // o/p := 9 

// problem 6
let n = 5;
let result = n++ + ++n; //  
console.log(result);
// o/p := 5 + 7 = 12

let likes  = 100;
function likePost() {
    return ++likes;
}
console.log(likePost());
console.log(likes);
// o/p := 101
       // 101

// problem 7
let count = 5;

if(count-- === 5){ // 5 === 5
    console.log("Matched");
}else{
    console.log("Not matched");
}
// o/p := Matched