// Use querySelectorAll to select all buttons with class ".buy-now."
let buynow = document.querySelectorAll(".buy-now");
console.log(buynow);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// T1. Select the heading of a page by ID and change its text to "welcome to India"
let heading  = document.querySelector("# heading");
heading.textContent = "Welcome to India";
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Select all <li> elements and print their text using a loop
//let lis = document.querySelectorAll("li");
// lis.forEach(function (val){
//    console.log(val.textContent); 
// });

// another way
let lis = document.querySeelectorAll("li");
for(let i = 0; i < lis.length; i++){
    console.log(lis[i].textContent);
} 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// What is difference between innerText, textContent, and innerHTML?
// innerText and textContent are quite similar they change the text inside the HTML Tag
h1.textContent = "<i>"; // ye text hi ye kar dega
h1.innerHTML = "<i>"; // converts this tag

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// When should we use textContent instead of innerText?
// when we also want to display the hidden content and textContent is faster than innerText 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Select a paragraph and replace its contents with:
{/*<b> Updated </b> by JavScript */}

let p = document.querySelector("p");
p.innerHTML = "<b> Updated </b> by JavScript";

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// How do you get src of an image using JavaScript?
let img = document.querySelector("img");
console.log(img.src);
console.log(img.getAttribute("src"));// second way

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// What does SetAttribute() do?
document
    .querySelector("img")
    .setAttribute(
        "src", // link
    );

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Select a link and update its href to point to https://google.com
let b = document.querySelector("b");
b.href = " https://google.com"; 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Add a title attribute to a div dynamically
let div = document.querySelector("div");
div.setAttribute("title","some info");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Remove the disable attribute from a button
let btn = document.querySelector("button");
btn.removeAttribute("disabled");

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// what does createElement() do? What's returned?
let h1 = document.createElement("h1");
console.log(h1);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==

// what's the difference between appendChild(), and prepend()
// appendChild()
// Adds a node at the end (last child) of a parent.
// prepend()
// Adds content at the beginning (first child) of a parent.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// can you remove an element using removeChild() ?
document.querySelector("div").removeChild(elementNode);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a new list item <li> New Task </li> and add it to the end of a <ul>
let ul = document.querySelector("ul");
let li = document.createElement("li");

li.textContent = "New Task";

ul.appendChild(li);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Create a new iamge element with a placeholder source and add it at the top of a div
let img1 = dociment.createElement("img1");
img1.setAttribute("src",//line
);
img1.classList.add("placeholder");
document.querySelector("div").prepend(img1);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Select the first item in a list and delete it from the DOM.

let ul1 = document.querySeelctor("ul1");
let li = document.querySelector("li");

ul.removeChild(li);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


