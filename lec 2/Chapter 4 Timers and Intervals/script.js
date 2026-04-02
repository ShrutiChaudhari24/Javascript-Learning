// In JavaScript, timers and intervals are used to execute code after a certain delay or repeatedly over time. They are part of the browser’s timing functions and are very important for things like animations, auto-updates, and delayed actions.

// ek easa function jo accept karta hai koi dusra function with the timer

// 5 sec baad cheleda ek bar chelega
setTimeout(function(){
    console.log("Hello world");
}, 5000)

// har 5 sec mae chelega bar bar chelega
setInterval(function(){
    console.log("Hello world");
}, 5000)

// clearTimeout()
let tm =  setTimeout(function(){
    console.log("hey");
},3000);

clearTimeout(tm);
