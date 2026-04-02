// Any interaction performed on a web page in the browser triggers an event.

// When something happens on the screen and you want to respond to it,
// you need to know how to handle events.

// An event means that some action has occurred.

// An event listener is used to detect (listen to) an event // and execute a specific response (reaction) when it happens.

// eg in HTML we have created one h1 tag in that we have written apple when we see apple in browser and when we click double click on apple (this is event) it turns red colour (this is event handling)
let h1 = document.querySelector("h1");

h1.addEventListener("click", function (){
    h1.style.color = "red";
});

// eg when we click on paragraph it must turn green
let p = document.querySelector("p"); // select the paragraph first

p.addEventListener("click", function(){ // then realize what will happen if particular thing will happen so i event listner if click happens then what we want to do write that inside the function
    p.style.color = "green";
});

// writing a function outside is good practice because if we want to fremove any event we can remove it easily
function dblclick (){
    p.style.color = "yellow"; 
}

p.addEventListener("dblclick",dblclick);


// first select the element on which we have to create a particular event
// syntax of event listner
// element.addEventListener("event name", function(){
//     // what we want to do if particular event happens that thing we have to mention here
// });

// how to remove the event listner 
p.removeEventListener("dblclick", dblclick); 

// common events : click, input, change, sumbit, mouseover, keyup
// there are many events we can not memorize them so whenever there is need we can google or gpt it

// input event
let input = document.querySelector("input");
input.addEventListener("input", function(){
    console.log("typed");
});

let inp = document.querySelector("input");
inp.addEventListener("input", function(data){
    console.log(data);
});

let inpu = document.querySelector("input");
inpu.addEventListener("input", function(dets){
    if(dets.data !== null){
        console.log(dets);
    }
});


// change event := 
let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function(dets){
    device.textContent =`${dets.target.value} Device Selected`;
});

// sumbit event
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function(dets){
    dets.preventDefault();
    
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);

    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;
    let h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;
    let p = document.createElement("p");
    p.textContent = inputs[3].value;

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach(function(inp){
        if(inp.type !== "submit"){
            inp.value = "";
        }
        
    })
});

// mouseover
let abcd = document.querySelector("#abcd");

abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "yellow";
});

abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "aquamarine";
})

// mousemove
// window.addEventListener("mousemove",function(dets){
//     abcd.style.top = dets.clientY + "px";
//     abcd.style.left = dets.clientX + "px";
// });


// keyup
document.getElementById("search").addEventListener("keyup", function() {
    let value = this.value.toLowerCase();
    console.log("Searching for:", value);
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  what is event object
// The event object contains all the details about the event that just happened
// document.addEventListener("click", function(event) {
//     console.log(event);
// });
// When you click anywhere, the browser creates an event object and passes it to the function.
// What does the event object contain?
// It has lots of useful information 👇

// 1. event.target
// document.addEventListener("click", function(event) {
//     console.log(event.target);
// });

// 👉 Tells which element was clicked

// 2. event.type
// console.log(event.type);

// 👉 Returns the type of event (click, keyup, etc.)

// 3. event.key (for keyboard events)
// document.addEventListener("keyup", function(event) {
//     console.log(event.key);
// });

// 👉 Shows which key was pressed (e.g., a, Enter)

// 4. Mouse position (event.clientX, event.clientY)
// document.addEventListener("click", function(event) {
//     console.log(event.clientX, event.clientY);
// });

// 👉 Gives the position of the mouse click

// ⚡ Real-Life Example
// <input type="text" id="name">
// document.getElementById("name").addEventListener("keyup", function(event) {
//     console.log("Typed:", event.target.value);
// });

// 👉 Here:
// event → contains info about the key press
// event.target.value → gives current input value
// 🎯 Why is it important?

// Without the event object, you won’t know:

// Which key was pressed
// Which element triggered the event
// Where the click happened
// 🧩 Key Point

// 👉 The event object is automatically provided by the browser — you just need to receive it as a parameter.

// 💡 Shortcut Understanding
// Think of it like:
// 📦 Event object = “Information package about what just happened”

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event bubbling and capturing

// bubling
// jispae event aayega ager uspar listner nahi hua to hamaara event uske parent par listner dhundhega aur aisa karte karte upar ki taraf move karega

document.querySelector("#nav")
.addEventListener("click", function(){
    alert("clicked");
});

// capturing
// jab bhi ap click karte ho ya koi bhi event raise karte ho tho aapka jo flow doo phases mae chalta hai:

// phase 1: event top level element sae niche ki taraf aayega
// phase 2: event raised element sae parent ki tarafjayega

// aur phele phase 1 hoti hai

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent clicked (capturing)");
  },
  true //enables capturing
);

document.getElementById("child").addEventListener(
  "click",
  () => {
    console.log("Child clicked");
  }
);

