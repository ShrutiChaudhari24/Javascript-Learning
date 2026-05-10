// this keyword special keyword hai, kyuki jaise ki baaki saare keywords ki value same ratha hai this ki value ya nature badal jata hai ess baat sae ki aap usey kaha use kar rahe ho


// this in global scope, function, method, event handler, class

//1) global scope mae this ki value hoti hai window
console.log(this);

// 2 function mae this ki value window hi hai
function abcd (){
    console.log(this);
}
abcd();

// method mae this ki value pura object hota hai
let obj = {
    name: "Shruti",
    age: 21,
    favGame: "Chess",
    sayName: function(){ // easa function jo object kae ander ho ussey hum method kethae hai
        console.log(this);
    },
};
obj.sayName();

// event handler mae this ki value who hi hoti hai jis mae addEventListner laga hai
document.querySelector("h1").addEventListener("click",function(){
    console.log(this.style.color ="red");
});

// class mae this ki value hamesha ek blank object hoti hai
class Abcd{ // first letter must be capital
    constructor(){
        console.log("heyhe");
        this.a = 12;
    }
} 

let val = new Abcd(); // val is the instance of Abcd class 

// summery
// this ki value
// global - window
// function - window
// method with es5 function - object
// method with es6 arrow function - window 
// es5 function inside es5 method - window
// arrow function inside es5 method - object
// event handler - element
// class - blank object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Arrow functions and lexical this
let myobj = {
    name: "Shruti",
    sayName: () => {
        console.log(this);
    },
};
myobj.sayName();







// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// manual binding: bind, call, apply
// call apply bind
// function ko call karte waqt aap set kar sakte ho ki uski this ki value kya hogi
function greet(city, country) {
    console.log(this.name + " from " + city + ", " + country);
}

let user = { name: "Shruti" };

// call
greet.call(user, "Pune", "India");

// apply
greet.apply(user, ["Mumbai", "India"]);

// bind
let g = greet.bind(user, "Delhi", "India");
g();


// 🧠 Final Summary
// 👉 call → call now
// 👉 apply → call now (array args)
// 👉 bind → call later
// 👉 All three → this control karte hai









// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

