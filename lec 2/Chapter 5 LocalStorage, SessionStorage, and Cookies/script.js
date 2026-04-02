// localStorage -> aapke browser kae ander data store karna jo ki browser band hone pae bhi delete nahi hoga

// sessionStorage -> ye aapka data temporarily store karta hai matlab ki Tab banad hua data gaya

// cookies -> ye bhi data store karta hai and aapka data browser kae cookies naam ki property main save hota hai and ye cookies concept kam data ya light data kae liye hota hai

// localStore
// store kaise kare
// data fetch kaise kare
// remove kaise kare
// update kaise kare

// store kaise kare localStorage("kisname sae save karna hai", "kya value store karna hai")
localStorage.setItem("name", "Shruti");

// data fetch kaise kare
let val = localStorage.getItem("name");
console.log(val);

// remove kaise kare
localStorage.removeItem("name");

// update kaise kare
localStorage.setItem("name", "Shruti");
localStorage.setItem("name","abc");

// Session Storage
// similar to localStorage just we have to do in browser itself

// cookies
// browser mae chhota data store karne kae liye cookies ka istemal hota hai

// cookies ~4kb
// localStorage sessionStorage ~5Mb

// cookies mein jo bhi data store karoge wo data page reload par automatically server par jayega
