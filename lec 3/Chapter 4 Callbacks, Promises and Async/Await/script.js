// Synchronous vs Asynchronous Javascript

// JS ka code normally line by line execute hota hai
// Isko synchronous execution bolte hain

console.log("hey1");
console.log("hey2");
console.log("hey3");
console.log("hey4");

// Output:
// hey1
// hey2
// hey3
// hey4


// --------------------------------------------------

// Async example

console.log("hey1");
console.log("hey2");

setTimeout(() => {
    console.log("hey3");
}, 2000);

console.log("hey4");

// Output:
// hey1
// hey2
// hey4
// hey3

// hey3 baad me print hoga kyoki setTimeout async hai
// aur 2000 milliseconds (2 seconds) wait karega


// Synchronous code:
// jo line by line execute hota hai

// Asynchronous code:
// jo apna kaam complete hone ke baad execute hota hai


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Callback Pattern

function kuchhDerBaadChalunga(fnc) {
    setTimeout(fnc, Math.floor(Math.random() * 5) * 1000);
}

kuchhDerBaadChalunga(function () {
    console.log("hey");
});


// Agar ek function ko dusre function me parameter ki tarah pass kare,
// to us parameter wale function ko callback function bolte hain.


function profileLekarAao(username, cb) {

    setTimeout(() => {

        let data = {
            _id: 101,
            username: username
        };

        console.log("Profile fetched");

        cb(data);

    }, 2000);
}


function saarePostLekarAao(id, cb) {

    setTimeout(() => {

        cb({
            userId: id,
            posts: ["hey", "hello", "good morning"]
        });

    }, 3000);
}


// First callback

profileLekarAao("Shruti", function (data) {

    console.log("Callback received:", data);

});


// Callback Hell Example

profileLekarAao("Shruti", function (data) {

    console.log(data);

    saarePostLekarAao(data._id, function (posts) {

        console.log(posts);

    });

});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Promises: resolve, reject, then, catch

//Promises :- aap ek promise banaate ho jo ki do states mein se ek state mae jaa sakta he and wo yaa tho resolve hoga ya tho reject hoga ab wo kya hoga ye tho waqt batayega par humein dono kae liye code likhna padta hai
let pr = new Promise(function(res, rej){
    setTimeout (() => {
       let rn = Math.floor(Math.random()*10);
       if(rn > 5) res("resolved with "+ rn);
       else rej("resolved with "+ rn);
    }, 3000);
}); 

pr.then(function(val){
    console.log(val);
})
.catch(function(val){
    console.log(val);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// async/await  syntax, error handling with try-catch
async function abcd(){
    try{
        let val = await pr;
        console.log(val);
    }catch (err){
        console.log(err);
    }
}

abcd();

