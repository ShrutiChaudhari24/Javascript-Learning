// JSON foormat means javascript object notation

// fetch is the built in function in JS jo uss kae ander URL hota hai ye uss ka data leke aata hai

// fetch is promised based so ess ko use karne kae 2 tarike hai 
// ager fetch resolve huya tho then chalega aur ager reject huya tho catch chalega 
// aur hum dono ko handle karenge

fetch("https://randomuser.me/api/")
.then(function(rawdata){ // phele then kae ander raw data aata hai jisko hum use nahi kar sakte tho humey ussey JSON format mae convert karna padta hai
    return rawdata.json();
})
.then((data)=>{
    console.log(data.results[0].name.first);
})
.catch((err) => {
    console.log(err);
});