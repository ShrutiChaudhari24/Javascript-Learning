// arrays we create when we want multiple entities eg - array to animals in city so it contains multiple animals like dog, cat, cow etc etc..
// Objects we create tab jab we want single entity ki sari details eg :- object of dog this contains all the details of dog only

// in arrays we initialize array using square brackets but in objects we use curly brackets
// let obj = {};

// This is how we create objects  -> key - value structure
let obj = {
    name: "Shruti",
    age : 21,
    degree: "BE",
    branch: "CSE",
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Dot vs bracket notation

// how to access the Objects -> using ObjName. or ObjectName['what we want']
console.log(obj.age);
console.log(obj['age']);

// but why two ways are available to access object

let aa = "name";
obj.aa; // here what we are thinking is ki obj kae ander "aa" nam ki property dhundo but vo tho exist hi nahi karti now you are telling nahi mae to ye khaena chati hu ki obj mae jo aa hai n uss ki value hai name tho name dhundo obj kae ander (aa convert nahi hoga)
// but but dot kae baad hum jo bhi likhte hai uss ka matlab hota hai literly matab dot kae baad jo bhi hai vo hi chiye tho yaha tho obj mae vo aa name ki property hai hi nahi tho  
console.log(obj.aa); // ess ka o/p :=undefined aayega

// but what if we access like this (ager humey convert karwana hai tho)
console.log(obj[aa]);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nesting and deep access
// this is nesting
const user = {
    name:"Shruti",
    address:{
        city:"abcdefgh",
        pin: 432100,
        location:{
            lat: 23.2,
            lan: 77.4,
        },
    },
}; 
// lets say we want to access lat
// this is deep access
console.log(user.address.location.lat);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Object destructuring
// lets say we don't want to write user.address.location.lat like this so we use Object destructuring
let {lat, lan} = user.address.location;
console.log(lat);
console.log(lan);

// so in future we dont need to write 
// user.address.location.lat to access lat and user.address.location.lann to access lan

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// looping : for-in, Object.keys, Object.entries

let employee = {
    name : "Shruti",
    age : 21,
    email: "abc@xyz.com",
};

// for-in loop 
for(let key in employee){  // where key is a variable which is key of each elemnt present in object we can give any name like num etc
    // console.log(key);  //o/p:-  // name
    //                             // age
    //                             // email
    // console.log(employee[key]);

    console.log(key, employee[key]);
}

// Object.keys
console.log(Object.keys(employee));  // [ 'name', 'age', 'email' ] it gives an array of all the object keys

// Object.entries
console.log(Object.entries(employee)); // [ [ 'name', 'Shruti' ], [ 'age', 21 ], [ 'email', 'abc@xyz.com' ] ] it gives array of arrays

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Copying objects: spread, Object.assign, deep clone
let object1 = {
    name: "Shruti",
    age: 21,
    email: "pqr@abc.com",
};

// spread
let object2 = {...object1};
console.log(object2);

// object.assign // old 
let object3 = Object.assign({},object1);
console.log(object3);

let obj2 = Object.assign({price: Infinity}, obj);  // in this way we created new property and also assign price as infinity 
console.log(obj2);

// deep clone
// let usercpy = {...user};
// usercpy.address.city = "xyzpqr";

// console.log(usercpy);
// console.log(user); // even if we have used a spread operator but in nested objects if we copy like this it will referencing that also not copy thats wahy user location also get changed after changing usercpy location

// so to actually copy it we use deep clone
// JSON.stringify(user); // this convert object into string 
// JSON.parse(user); // it again convert it into object

let usercpy = JSON.parse(JSON.stringify(user));  // this creates actully copy 

console.log(usercpy);
usercpy.address.city = "vgsgadyadg";
console.log(usercpy);
console.log(user);  // this time no affect on original

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Optional chaining, computed properties

// Optional chaining
console.log(user.address.city); // this is correct that's why we are able to access it 
// but what if in future  
// const user = {
//     name:"Shruti",
//     addresses:{                         // this filed get changed
//         city:"abcdefgh",
//         pin: 432100,
//         location:{
//             lat: 23.2,
//             lan: 77.4,
//         },
//     },
// }; 

// so we do like this
console.log(user?.addresses?.city);  //  this will give undefined as o/p this is how exception is handled 

// computed properties
let role = "admin";

let object = {
    name: "shruti",
    age : 21,
    email: "acgshsahd@.com",
    address:{
        city:"ababbabab",
    },
    [role] :"shruti",
};
console.log(object);

// o/p := 
// {
//   name: 'shruti',
//   age: 21,
//   email: 'acgshsahd@.com',
//   address: { city: 'ababbabab' },
//   admin: 'shruti'
// }