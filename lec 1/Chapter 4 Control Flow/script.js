// if else , else if
if(12 > 5){
    // this will execute
}else{
    // this will execute
}

// if we have to put more that 2 conditions
let loggedin , admin;
if(loggedin && admin){

}
else if(loggedin){ // we can make n number of else if blocks

}
else{

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==
// switch-case
switch(3){      // switch can accept any value or condition, whichever the case matches the value or condition get executed
    case 1: 
        break;
    case 2:
        break;
    case 3:
        console.log("hey");
        break;
    default:
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// early return pattern
function getVal(val){
    if(val < 25) return 'A';
    else if (val < 50) return 'B';
    else if(val < 75) return 'C'; 
    else return 'D';
}

console.log(getVal(89));