// Q1. Create an Object for a student with name, age, and isEnrolled
let student = {
    name: "Shruti",
    age: 21,
    isEnrolled: true
};
console.log(student);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q2. Can an Object key be a number or boolean? Try this
const obj = {
    true : "yes",
    42: "answer"
};
console.log(obj);// ans -> yes o/p:= { '42': 'answer', true: 'yes' }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q3. Access the value of "fisrt-name" from this object:
const user = {
    "first-name" :"Shruti"
};
// console.log(user.first-name); gives error
console.log(user["first-name"]);  // o/p := Shruti

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q4. Given a dynamic key let key = "age", how will you access user1[key]?
let key = "age"
const user1 = {
    age: "ababab",
};
console.log(user1[key]);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q5. From the object below print the latitude:
const location = {
    city: "AAAAAAA",
    coordinated: {
        lat: 23.2,
        lng: 77.4,
    },
};
console.log(location.coordinated.lat);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q6. what will happen if coordinates is missing? How can you prevent errors?
// ->  we will prevent errors by basically going for optional chaining

console.log(location?.coordinate?.lat);  // we will not get error instead we get undefined

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q7. Destructure the city and lat from the location object above.
let {city} = location;
let {lat} = location.coordinated;
console.log(lat);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q8. Destructure the key "first-name" as variable called firstName.
let {"first-name": firstName} = user;
console.log(firstName);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q9. Use for-in to log all keys in this object:
const course = {
    title: "JavaScript",
    duration: "4 weeks",
};

for(let key in course){
    console.log(key);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q10. Use Object.entries() to print all key-value pairs
Object.entries(course).forEach(function(val){
    console.log(val[0] + ": " + val[1]);
});
// o/p := 
// title: JavaScript
// duration: 4 weeks

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q11. Copy this Object using spread operator
const original = {a: 1, b: 2};
const cpy = {...original};
console.log(cpy);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q12. What is problem with this
const obj1 = {info: {score: 80}};
const clone = {...obj1};
// clone.info.score = 100;
// console.log(obj1.info.score); // this pass reference not only copy so because of this clone.info.score = 100; obj1 score also become 100
// if we want the copy then we do deep clone

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q13. Deep clone obj1 safely
const obj2 = {info: {score: 80}};
let newobj = JSON.parse(JSON.stringify(obj1));
newobj.info.score = 100;
console.log(newobj.info.score);  // 100
console.log(obj1.info.score); // 80

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q14. Rewrite this safely using optional chaining

const person = {};
// console.log(person.profile.name); // this gives error
console.log(person?.profile?.name); // undefined

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q15. Use a variable to dynamically assign a property

const keey = "role";
let objeect = {
    name: "Shruti",
    [keey]: "admin",
};
console.log(objeect);
