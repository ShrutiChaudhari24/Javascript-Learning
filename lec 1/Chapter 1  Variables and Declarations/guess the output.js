// problem 1
console.log(nm);
var nm = "shruti";   
// o/p := undefined 
// explaination := it looks like this -> var nm = undefined;
                                       // console.log(nm);
                                       // nm = "shruti";   

// problem 2
// console.log(age);
// let age = 21;   
// o/p error message := ReferenceError: Cannot access 'age' before initialization 
// explaination := here temperoral dead zone get activated

// problem 3 
var x = 1;
{
    var x = 2;
}
console.log(x);  // o/p := 2 because var does not respect braces it is not blocked scoped it is function scoped

// problem 4
let a  = 10;
{
    let a = 20;
    console.log("Inside:",a);
}
console.log("Outside:",a);
// o/p := Inside: 20
    //    Outside: 10
// let is blocked scoped

const person = {name: "Ram"};
person.name = "Ramu"; // allowed why => because const never told us that we cannot update the value const say we cannot reassign the value
// person = {}; // not allowed
// direct = not allowed // ek object kae ander ek property ki value change karte hai that is allowed because we are not reassigning it we are updating it
console.log(person);

// if we want we cannot even update the property of object we can use this
const obj = { name: "Shruti", age: 21 };
Object.freeze(obj);

obj.age = 22;   //  Won’t change
obj.city = "Khamgaon"; //  Won’t add
console.log(obj); // { name: "Shruti", age: 20 }


