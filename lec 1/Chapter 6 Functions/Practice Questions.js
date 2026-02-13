// 1) Write a BMI calculator := weight in kg height in m 
function BMI (weight, height){
   return weight / (height * height);
}

console.log(BMI(40, 1.3).toFixed(2)); 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2) Create a reusable discount calculator using closure
// clousure is a function which returns another function
function discountCalculator(discount){
    return function(price){
        return price - price * (discount / 100) ;
    }
}

let discounter = discountCalculator (10); 

// to make it reuseable
let tenOff = discountCalculator(10);
let twentyOff = discountCalculator(20);

console.log(tenOff(500));    // 450
console.log(twentyOff(500)); // 400

console.log(discounter(200)); // 180

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3) Build a counter using closure
function counter(){
    let count = 0;
    return function (){
        count++;
        return count;
    };
}

let c = counter();
console.log(c());   //1
console.log(c());   //2
console.log(c());   //3
console.log(c());   //4

let d = counter();
console.log(d());   //1
console.log(d());   //2
console.log(d());   //3
console.log(d());   //4

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 4) Create a pure function to transform a value
function double (val){
    return val * 2;
}
console.log(double(2)); // 4
console.log(double(15)); // 30

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 5) Use IIFE to isolate variables
(function (){
    const password = "secret password";
    console.log(password);
})();

console.log(password);  // ReferenceError: password is not defined we cannot access it because it is a isolate variable