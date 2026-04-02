// select h1
let h1 = document.querySelector("h1");

window.addEventListener("keydown", function (dets){
    if(dets.key === " "){
        h1.textContent = "Space";   
    } else {
        h1.textContent = dets.key;
    }
});

// file upload logic
let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function(){
    fileinp.click();
});

fileinp.addEventListener("change", function(dets){
    const file = dets.target.files[0];
    if(file){
        btn.textContent = file.name;
    } 
});

