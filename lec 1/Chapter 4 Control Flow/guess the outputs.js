// problem 1
let x = 2;
switch (x){
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}
// Output : Two, Three (bug if break is missing)
// Note := whenever you write any case make sure that you have to must mention the break

// problem 2
let y = 10;

if (y > 5)
  if (y < 15)
    console.log("A");
  else
    console.log("B");
else
  console.log("C");
// o/p := A

// problem 3
let a = 0;

if (a)
  console.log("True");
else if (a == false)
  console.log("False");
else
  console.log("Nothing");
// o/p := False

// problem 4
let num = 7;

switch (num % 3) {
  case 0:
    console.log("Zero");
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
  default:
    console.log("Default");
}
// o/p := One 

// problem 5
let b = "5";

if (b === 5)
  console.log("Strict");
else if (b == 5)
  console.log("Loose");
else
  console.log("No Match");
// o/p := Loose

// problem 6
let marks = 85;

let grade = marks > 90 ? "A" :
            marks > 80 ? "B" :
            marks > 70 ? "C" : "D";

console.log(grade);
// o/p := B

// problem 7
let c = null;

if (c == undefined)
  console.log("Equal");
if (c === undefined)
  console.log("Strict Equal");
else
  console.log("Not Strict");
// o/p := Not Strict 

// problem 8
let n = 5;

if (n++ > 5)
  console.log("Greater");
else if (++n > 6)
  console.log("Now Greater");
else
  console.log("Still Small");

console.log(n);
// o/p := Now Greater
      //  7

// problem 9
let val = "2";

switch (val) {
  case 2:
    console.log("Number 2");
    break;
  case "2":
    console.log("String 2");
  default:
    console.log("Default");
}
// o/p := String 2 
    //    Default     beacause break nahi likha hai 



