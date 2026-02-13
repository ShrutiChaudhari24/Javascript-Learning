// In Js arrays are different from other programming language in other programming languages if we have made array of int we can only put integer values in array, array of character we can only put char values in array 
// but in JS arrays can hold different types of values 


// create, access, modify arrays
// we can put our values inside this square brackets []

// create
let arr = [2,3,6,8];
let marks = [10, 40, 52, 37, 92]; // 10 -> 0th index  
                                  // 40 -> 1st index  
                                  // 52 -> 2nd index 
                                  // 37 -> 3rd index 
                                  // 92 -> 4th index

// one more way to create array
let brr = new Array();  // but usually we do not use this

let myarray = ['a', "Shruti" , 21, true, obj = {age : 21}];

// access
// if we want to access any value of array
// we can access them using their index
// eg := 
console.log(arr[0]);
console.log(marks[5]);  // o/p := undefined because on 5th index we don't have any value
console.log(myarray[4]);

// modify
//  initially arr is [2,3,6,8] 
arr[2] = 12;
console.log(arr);  // [ 2, 3, 12, 8 ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Array methods : psuh, pop, shift, unshift, splice, slice, reverse, sort, map, filter, reduce, find, some, every 
arr = [2,3,4,5,6];
arr.push(188);
console.log(arr); // it insert the value at last position

arr.pop(); // it remove the last value value you inserted
console.log(arr);

arr.shift();
console.log(arr); // it remove the first value you inserted

arr.unshift(51);
console.log(arr); // it add the value in the 0th position

arr.splice(2,1); // (start index, kitni values delete karni hai)
console.log(arr);

let cpyarr = arr.slice(1,3);  // splice changes in the original array but slice make the copy of original array 
console.log(arr); // [ 51, 3, 5, 6 ] no change in original
console.log(cpyarr);  // slice // (start index, end index — end NOT included)

// Note := 
// 👉 splice() = "Original array ko kaat deta hai ✂️"
// 👉 slice() = "Original ka photo copy nikalta hai 📸"

marks.reverse(); // it reverse the whole original array
console.log(marks);

// es tarah sae likhne sae array sort tho hoga but ager vo numeric array tha tho vo string array mae conver ho jayega
marks.sort(); // arrange the original array in sorted order (ascending order)
console.log(marks); 

// so this is the correct way to sort the array if it is of numeric type if it is char or string array we can do directly .sort()
// if we want to sort in ascending order
let num = [11, 2, 25, 7, 8, 10];
let sor = numbers.sort(function(a,b){
    return a - b;
});

// if we want to sort in descending order
let numbers = [11, 2, 25, 7, 8, 10];
let sr = numbers.sort(function(a,b){
    return b - a;
});

// forEach := array kae har element kae liye function chalega aur har bar array ki har ek value kae liye ander ka function chalega
let array = [12, 32, 43, 54, 65];
let sum = 0;
array.forEach(function(val){
    sum = sum + val;
    console.log(val); 
    console.log(val + 5);
});
console.log(sum);

// map :- like for each b
// map srf tab use karna hai jab humko ek naya array banana hai pichle array kae data kae basis pae
// map dikhte hi saath mann mae ek blank array bana liya karo 

let newarray = array.map(function(val){
    return 12;
});
console.log(newarray);

// 👉 map() tab use karte hain jab hume purane array ke data ke basis par ek naya array banana ho.
// 👉 map() hamesha same length ka naya array return karta hai.
// 👉 forEach() kuch return nahi karta.

// jab bhi humey easa koi case dikh jaye jaha per ek array sae naya array banega and vo naya array kuch values ko rakhega tab map lagega

// filter is like map but vo array sae kuch elements hi lata hai aur kuch ko chod deta hai
// let crr = [1,2,3,4,5,6,7];
// crr.filter(function(val){
//     return true;   // ager return true likha tho hi vo value naye array mae jayegi nahi tho nahi jayegi
// });

// eg :=
let crr = [1,2,3,4,5,6,7];
let newcrr = crr.filter(function(val){
    if(val > 4) return true;   // ager return true likha tho hi vo value naye array mae jayegi nahi tho nahi jayegi
});
console.log(newcrr);  // [ 5, 6, 7 ]

// reduce
let drr = [1,2,3,4,5,6];
let ans = drr.reduce(function(accumulator, val){
    return accumulator + val;
},0);
console.log(ans);
// accumulator initial value 0 accumulator will remember its value

// find :- this accepts a function and find whaterver you want
let grr = [
    {id:1, key:1},
    {id:2, key:2},
    {id:3, key:1}
];
let va = grr.find(function (val){
    return val.key === 1;
});

// some -> this gives o/p either true or false if any one element of array matches the condition then it gives true else false
let hrr = [10, 20, 60, 90, 100];
 let any = hrr.some(function(val){
  return val > 85;
});
console.log(any); // o.p : -true because here 90 is greater that 85 also 100 is greater that 85

//every -> some ka just ulta sare elements should pass the condition
let irr = [67858, 81,1, 2390];
let anny = irr.every(function(val){
    return val > 10;
}); 
console.log(anny); // false := because all are not satisfying the condition

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Destructuring, spread operator

// Destructuring
let jrr = [1,2,3,4,5];
// let [a,b] = jrr; 
// console.log(a,b); //o/p :=  1 2
let [a,b, , c] = jrr; 
console.log(a,b,c); // o/p := 1 2 4


// spread operator :- use to copy the original array in some other array but only thing is that it will only copy it it will not reference it because of this even if we change the copy array this will not affect the original array
let scores = [1,2,3,4,5,6,7,8];
// let scores2 = scores; // this will reference the original array score ie. if we make any change in scores2 it will affect scores

// if we want that our original array will not get affected so we use spread operator
let scores2 = [...scores];
scores2.pop();
console.log(scores); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(scores2);// [1, 2, 3, 4, 5, 6, 7]
