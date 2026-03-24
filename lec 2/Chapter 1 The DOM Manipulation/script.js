// DOM Tree structure : node, element, text, comment

// DOM means (Document Object Model)
// whatever the HTML we write har ek chij ek node hoti hai
// eg := <html> this is one node 
//     /       \
//   head     body
//               \
//               div       eg := we have created div inside body
//              /   \
//            h1     p     inside div we may have h1 tag p etc
//            /       \
//         .....      ....   and so on

// ye nodes jo hum dheakte hai ye nodes hi basically hamerae elements ko lae kae aage badhtae hai
// DOM -> basically jitna bhi hum hamerae web page mae dheak rahe hai vo DOM hai

// DOM Manipulation -> jo bhi website humey dikh rahi hai uss mae changes karna is basically DOM Manipuation
// DOM Manipulation padhnae kae liye humey ye sab samajhna padega
// 1) html sae element select karna :- jab hum koi element select karenge tab hi tho uss mae koi change kar payenge
// 2) text badalna
// 3) html badalna
// 4) css badalna 
// 5) koi attribute badalna 
// 6) event listeners add karna


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//1) Selecting elements from html :- this are used to select the elements before changing 
// getElementById, getElementByClassName, querySelector, querySelectorAll, 
//Now a days this are use querySelector, querySelectorAll

// in css how we change any thing we write like this h1{}  and we do whatever we want
// in Javascript we select like this
// document.querySelector
// document.getElementById -> from this we only select element by its id only
// document.getElementsByClassName -> from this we select multiple elements by their respective class name because ek class mae bhot sare elements ho sakte hai

// getElementById is used to select HTML element by its id
let a = document.getElementById("abcd");  // yaha kya huya hai hum nae <h1 id = "abcd" >Hello!!</h1> ess puri chij ko  ek element ko ess 'a' nam ke variable mae save kar liya hai aur abb ager humey uss per kuch bhi perform karna hai tho hum uss variable ki madat sae kar sakte hai
console.dir(a);

// getElementsByClassName is used to select HTML elements from their class name
let b = document.getElementsByClassName("demo");
console.dir(b);

// querySelector :- we will use this most of the times 
let c = document.querySelector("h1"); // query selector always select the first element 
console.dir(c);

// querySelectorAll :- using querySelectorAll we will get array like structure not array NodeList means it will select all the elements not only first element
let d = document.querySelectorAll("h1");
console.dir(d);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// from this after selection of element manipulation starts 

// first type of manipulation is manipulating the text 
//2) Text/content access: innerText, textContent, innerHTML
let h1 = document.querySelector("h1");
console.dir(h1);
h1.innerText = "hey hello"; // text change karta hai
h1.textContent = "I like to play chess"; // text badalta hai
h1.textContents = "abcdefghijklmnopqrstuvwxyz"; // thisdoesnot work
h1.innerHTML = "I am fine"; // text nahi badalta HTML dalta hai
// matlab kisi kae ander humey HTML dalna hai tho ye use karenge 
h1.innerHTML = "<i>hey</>";  // this will look italic hey
// h1.hidden = true;

// how to approch :- kese manipulate karna hai??
// -> ager kisi ko manipulate karna hai phele uss ko access karo using secectors like querySelector etc 
// -> then console.dir() maro dheako kaha jo text humnae likha hai vo hai hum ko uss mae vo element ki vo property pakdo jo humey manipulate karni hai 
// uss ki value vo rakho jo humey rakhni hai ho gaya manipulation


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

//3) Attribute manipulation: getAttribute, setAttribute, removeAttribute
// attribute means extra information about an element.  // <tagname attribute="value">
// eg :- <a href="https://google.com">Visit Google</a>  
// Here:
// <a> → element (anchor tag)
// href → attribute
// "https://google.com" → attribute value

// what is attribut manipulation?? -> this href ki value badalna is attribut manipulation
let x = document.querySelector("a");
// Note :- kisi a tag ko ager hum href na dae tho uss ka href jo hamere page ka url hota hao wahi uss ka href ban jata hai
// abhi hamere a tag ka href hamere page ka URL hi hai
// if we want to change 
x.href = "https://www.google.com";
console.dir(x);

// now we will see different way to do that we can directly change attribute using setAttribute and getAttribute
// element.setAttribute(name, value);
let img = document.querySelector("img");   // jab tak humney set nahi ki thi humey hamere web pae broken Image likha dikh raha tha
img.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1771512198657-603100c5aba0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);

// to get the value of attribute
let y = document.querySelector("a");
console.log(y.getAttribute("href"));

// to remove the value of attribute
let z = document.querySelector("a");
z.removeAttribute("href");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

//4) Dynamic DOM manipulation: createElement, appendChild, removeChild, prepend

// createElement := html mae jo element nahi bhi hai ussey bana dena 
// appendChild := ek element pae ek extra element add karna
// removeChild := ek element sae ek element hata dena 
// prepend := kisi element ki surawat mae kuch add karna
let h2 = document.createElement("h2");
let h11 = document.createElement("h11");
h2.textContent = "Hellllloo";
h11.textContent = "heloo";
 // ess sae hum direct screen pae print karwa sakte hai 
document.querySelector("body").append(h2); // append baad mae add karta hai prepend phele add karta hai
document.querySelector("body").prepend(h11); // prepend surawat mae add karta hai

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

//5) Style updates via .style and classList (add, remove, toggle)
// Js sae CSS badalna 
let h3 = document.querySelector("h3");
// h3.style.color = "red";
// h3.style.backgroundColor = "yellow";
// h3.style.fontFamily = "Gilroy";
h3.classList.add("helloo");// to add any class
h3.classList.remove("helloo"); // to remove any class
h3.classList.toggle("helloo"); // toggle ager lagi hoti hai class tho hata deta hai aur ager hati hoti hai tho laga deta hai 
console.dir(h3);
