// Operators are used to perform operations

// Arithmatic + - * / % 
console.log(1+2);
console.log(1-2);
console.log(1*2);
console.log(1/2);
console.log(1%2); 
console.log(2**3);  // exponentiation here 2 power 3 o/p := 8

// comparision < > <= >= == ===  gives o/p as true or false
console.log(2>1);
console.log(2<1);
console.log(2>=1);
console.log(2<=1);
console.log(2==1);
console.log(2===1);
console.log(2 != 1);
console.log(2 != '2');
console.log(2 !== '2'); // strict comparision

console.log(2 == '2'); // o/p := true // == does not check type (not scrict comparision)
console.log(2 === '2'); // o/p := false // === also checks type (strict comparision)

// logical && || !
console.log(12 > 6 && 5 < 8); // if both condition are true then only true
console.log(12 > 6 || 5 > 8); // any of one condition is true then true
console.log(!1); //  !1 = 0 ie false


// assignment = += -= *= /= %= use to assign value
let a;
a = 100; 
console.log(a);
console.log(a += 3);
console.log(a -= 3);
console.log(a *= 3);
console.log(a /= 3);
console.log(a %= 3);

// unary + -  ++ -- ! typeof
console.log(+"2"); // 2 (number) ess sae string number mae convert ho jayegi
console.log(-"2"); // o/p := -2 (number)
let y = 1; 
console.log(y++); // o/p := 1 and after that it increment by 1 and become 2 
console.log(++y); // o/p := 3 first it increment then displayed
console.log(y--);
console.log(--y);
console.log(!2);
console.log(typeof(2));

typeof(null);  // typeof null ka type object batana hai which is wrong
let arr = [12,3,2,3,2,2]; 
typeof(arr); // typeof array ka type object batana hai which is wrong
// so to check this confusion we will use instanceof
// syntax of instanceof := variable_name instanceof class_name;
console.log(arr instanceof Array);
console.log(null instanceof Object);

// instance of only works with reference datatypes not on primitives



// ternary ?:
// condition ? true hui ka code : false hui ka code
(2 < 1) ? console.log("hey") : console.log("hello");
