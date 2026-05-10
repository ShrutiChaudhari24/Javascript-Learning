// scope hai kae aap created variables and functions kaha tak use kar sakte ho

function abcd(){
    let a = 12;
    var b =  10;
}

// console.log(b); //Uncaught ReferenceError: b is not defined

// functional scope - function kae ander hi use ho sakti hai
// global scope - poore code mae kahi bhi use ho sakti hai
// block scope - {} curly braces mein hi use ho sakti hai

// ager aapka code kisi bhi {} kae ander nahi hai tho aapka code global hai

// ager function + {} hai tho functional scope

// for, if, while etc other tahn function then it is fuctional scope

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// execution context: memory creation & execution phase

// js sabse phele jaise hi aapka function dheakta hai sabsae 
// pahle js baanaata hai exectution context, ye ek process hai jo 
// ki do different phases mae chalata hai, memory phase and doosra ka name hai execution pahse

function  xyz(){
    var a = 12;
    var b = 13;
    var c = 14;


    // jab bhi js koi function dheakta hai vo 1 dabba bana deta hai (hypothically) jis ko hum exectution context bolte hai
    // ...... variables stored (memory phase)

    // yaha code chata hai (execution phase)
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// lexical scope vs dynamic scope

// in js we use - lexical scoping -> ki aap kaha per physically available ho ye poori tarah sae depend karta hai i aap kya access kar paaoge
function pqrs(){
    let a = 12;
    function defg(){
        console.log(a);
    }// we can access a inside defg because it is physically present hai
}


// dynamic scoping -> kaha sae call kar rahe ho uspe depend karega ki kya value miligi
// js is not scoped dynamically
let a = 12;

function wxyz(){
    console.log(a);
}

function yxz(){
    let a = 13;  // ager js dynamically scoped hoti tho ye a ki global value ko print nahi karta ye a = 13 print karta ye 12 hi print kar raha hai ess liye js is lexically Scoped
    wxyz();
}
yxz();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Closure definition and how variables are preserved
//  closure are functions that are inside any parent function and that functions return and the returning function use the parent function variable
// closure are functions that are inside any parent function and that functions return and the returning function use the parent function variable

function hello(){
    let a = 12;
    return function(){
        console.log(a);
    };
}// this whole thing line 73 to 78 is a closure

// fayda :- 
// private variables bana sakte hai 
// global pollution rok sakte hai

// ye sach hai fnc kae kahtam hone ape aapka fnc and uske variables kahtam hojaate hai, 
// par jab bhi closure banta hai tho aapka fnc aur uske variables ka ek backlink banaya jaata hai
// aur uska naam hota hai [[environment]] ie copy ban gayi

//  Use cases: private counters, encapsulation
function countforMe(){
    let cnt = 0;
    return function(){
        cnt++;
        console.log(cnt);
    };
}

let fnc = countforMe(); // jab first time ye function call hoga tab uss ki ek copy banegi then agle sae jo kam karna hai vo hoga
fnc(); // 1
fnc(); // 2
fnc(); // 3

let fnc2 = countforMe(); // parent function jab bhi chelega new cnt banega returning function uss cnt ko increase karega 
fnc2(); // 1
fnc2(); // 2
fnc2(); // 3

// encapsulation
// This code uses a closure to maintain a private variable (click) and demonstrates encapsulation by restricting direct access to it.
// Encapsulation (in your code)
// The variable click is private
// It cannot be accessed directly from outside the function
// It can only be modified through the returned function

// This is called encapsulation (data hiding)
function clickLimiter(){
    let click  = 0;
    return function(){
        if(click < 5){
            click++;
            console.log(`clicked : ${click} times`)
        }else{
            console.log("Limit Exceeded, Try after some time");
        }
    };
}

let fun =  clickLimiter();
fun();
fun();
fun();
fun();
fun();
fun();
