// Q1. Create an array with 3 fruits and print the second fruit
let fruits = ["Banana", "Apple", "Orange"];
console.log(fruits[1]);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q2. Add "Mango" at the end and "Pineapple" at the beginning of this array :
fruits.push("Mango"); // added mango at the end
fruits.unshift("Pineapple"); // added Pineapple at the beginning
console.log(fruits);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q3. Replace "Banana" with "kiwi" in the array above
fruits.splice(1,1,"Kiwi");
console.log(fruits);
// splice(startIndex, deleteCount, newItem)
// So here:
// 1 → start from index 1
// 1 → remove 1 element
// "Kiwi" → insert "Kiwi" at that position
// Since "Banana" is at index 1, it will be replaced with "Kiwi".

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q4. what is difference between .push() and .unshift()?
// -> push insert the element at end position while as unshift insert element at front position

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q5. Remove the last item from fruits array using a method
fruits.pop();
console.log(fruits);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q6. Insert "Red" and "Blue" at index 1 in this array
let colours = ["Green", "Yellow"];
colours.splice(1,0,"Red","Blue");
// colours.splice(1,0,"Red");
// console.log(colours);
// colours.splice(1,0,"Blue");
console.log(colours);
// actually splice is used to remove the elements but if we use it like this like splice(1,0,elementwe want to insert) 
// what it actually so is it remove 0 element from index 1 and inser new element 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q7. Extract only the middle 3 element from this array
let items = [1,2,3,4,5,6];
newarr = items.slice(1,4);
console.log(newarr);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q8. Sort this array alphabetically and then reverse it:
let names = ["Zara", "Arjun", "Mira", "Bhavya"];
names.sort().reverse();
console.log(names);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q9. Use .map() to square each number:
let  arr = [1,2,3,4];
let squarearr = arr.map(function(val){
    return val*val;
});
console.log(squarearr);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Q10. Use .filter() to keep numbers greater than 10:
let brr =[5,12,8,20,3];
let filterbrr = brr.filter((val) => {
    return val > 10;
});
console.log(filterbrr);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q11. Use .reduce() to find the sum of this array:
let givenArr = [10,20,30];
let sum = givenArr.reduce(function(accumulator, val){
    return accumulator + val;
},0);
console.log(sum);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Q12. Use .find() to get the first number less than 10;
 let num = [12, 15, 3, 8, 20];
 let search = num.find(function(val){
    return val < 10;
 });
 console.log(search);

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q13. Use .some() to check if any studen has scored below 35;
let marks = [90, 89, 72, 32, 78];
let isAnyStd = marks.some(function(val){
    return val < 35;
});
console.log(isAnyStd); 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q14. Use .every() to check if all numbers are even:
let numbers = [2,4,6,8,10];
let check = numbers.every(function(val){
    return val % 2 === 0;
});
console.log(check);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q15. Destructure this array to get firstName and LastName
let fullName = ["Shruti", "Chaudhari"];
let [firstName, lastName] = fullName;
console.log(firstName);
console.log(lastName);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q16. Merge two Arrays using spread operator
let a =  [1,2];
let b = [3,4];

let c = [...a, ...b];
console.log(c);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q17. Add "India" to the start of this array using spread:

let countries = ["USA", "UK"];
countries = ["India", ...countries];
console.log(countries);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Q18. Clone this array properly (not by reference)
let number = [1,2,3];
let cpy = [...number];
console.log(cpy);
