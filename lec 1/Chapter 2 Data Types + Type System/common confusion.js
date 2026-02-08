// 1) why NaN is a number
console.log(typeof NaN === 'number'); // o/p := true
// because := whenweve we write NaN Js will treat it as a failed number operation thats why its type is number
// what is failed number operation := eg := if we multiply 2 with "shruti" this is failed number operation beacuse how can we multiply number with string

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2) undefined Vs null
let x;
console.log(x); // undefined -> this value is bydefault given by the JS engin
let y = null;
console.log(y); // null -> this value is provided by us 

// whenever we declare any variable in JS, its default value is undefined 
// in other programming languages they give garbage value but in JS it is undefined

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('5' + 1); // o/p :=  51
console.log('5' - 1); // o/p :=  4

// beacuse + operator is used for 2 purpose add and concatenate so whenever JS engine see + with string it think that it is a concatenation operation not add operation
// but - operator is used to do only one task ie subtractation 
