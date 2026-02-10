// level 1 questions

// Q1. Print numbers from 1 to 10 using a for loop.
for(let i = 0; i <= 10; i++){
    console.log(i);
}

// Q2. Print numbers from 10 to 1 using a while loop.
let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}

// Q3. Print even numbers from 1 to 20 using a for loop.
for(let j = 1; j <= 20; j++){
    if(j%2 === 0){
        console.log(j);
    }
}

// Q4. Print odd numbers from 1 to 15 using a while loop.
let j = 1;
while(j != 16){
    if(j % 2 === 1){
        console.log(j);
    }
    j++;
}

// Q5. Print the multiplication table of 5 (ie., 5 x 1 = 5 --- 5 x 10 = 50)
for(let i = 1; i <= 10; i++){
    console.log("5 x " + i + " = " + (5 * i));
}

// Q6. find the sum of numbers from 1 to 100 using a loop.
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log(sum);

// Q7. Print all numbers between 1 to 50 that are divisible by 3.
for(let i = 1; i <= 50; i++){
    if(i%3 === 0){
        console.log(i);
    }
}

// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd.
// eg :- ("1 is odd", "2 is even", ...)
let val = prompt("give a number");
for(let i = 1; i <= val; i++){
    if(i % 2 === 0){
        console.log(i + " is even");
    }else{
        console.log(i + " is odd");
    }
}

// Q9. Count how many numbers between 1 to 100 are divisible by both 3 and 5
let count = 0;
for(let i = 1; i <= 100; i++){
    if(i%3 === 0 && i%5 === 0){
        count++;
    }
}
console.log(count);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// level 2 questions using of break and continue

// Q1. Stop at first Multiple of 7
//      write a loop from 1 to 100 that:
//      prints each number
//      stops completely when it finds the first number divisible by 7
for(let i = 1; i <= 100; i++){
    console.log(i);
    if(i%7 === 0){
        break;
    }
}

// Q2. Skip Multiples of 3
// Write a loop from 1 to 20 that:
//      skips numbers divisible by 3
//      Prints all others

// use continue

// Expected output:
// 1 2 4 5 7 8 10 11... (no. 3, 6, 9, etc.)
for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
} 

// Q3. Print First 5 Odd Numbers Only

// write a loop from 1 to 100 that:
//      print only 5 odd numbers
//      Then stops the loop

// use both if, continue, and a counter + break

// expected output:
// 1 3 5 7 9
let countOdd = 0;
for(let i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(i);
        countOdd++;
        if(countOdd === 5){
            break;
        }
    }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// we will see this questions after completing array etc
// Print pattern questions
// Reverse a string using loop
// Sum of even/odd numbers from array

