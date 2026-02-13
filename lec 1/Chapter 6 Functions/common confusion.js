// 1) arrow Vs regular function : this context
// when to use arrow function and when to use normal function
// -> whenever we are creating functions we can use fat arrow function .
// only at one situation we cannot use them the situation is :-
//       We should not use arrow functions as object methods when we need this.
//          Because arrow functions don’t have their own this.

// Jab hume object ke andar this use karna ho, tab arrow function use nahi karna chahiye  normal function use karni chahiye.

const obj = {
    value: 42,
    regular: function () {return this.value; },
    arrow: () => this.value
};
console.log(obj.regular()); // 42
console.log(obj.arrow());   // undefined

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//2) when Function hoisting happen and what is the impact of TDZ in hoisting
greet();   // works
function greet(){} 

greet();  // error :=  SyntaxError: Identifier 'greet' has already been declared
const greet = () => {};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3) what is difference between closures and higher order functions
// -> both returns function but in closure returning function will use some variable of parent function
