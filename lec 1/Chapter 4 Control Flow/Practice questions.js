// student grade categorizer

// write a function getGrade(score) that:
//   -> takes a student's marks (0 to 100)
//   -> Returns the grade based on this logic:
//  90-100 A+
//  80-89 A
//  70-79 B
//  60-69 C
//  33-59 D
//  0-32 Fail
// Anything else    Invalid marks


function getGrade(score){
    if (score >= 90 && score <= 100) return "A+";
    else if (score >= 80 && score <= 89) return "A";
    else if (score >= 70 && score <= 79) return "B";
    else if (score >= 60 && score <= 69) return "C";
    else if (score >= 33 && score <= 59) return "C";
    else if (score >= 0 && score <= 32) return "Fail";
    else return "Invalid Marks";
}

// let score = Number(prompt("Enter your score: "));  if we are running in browser take input like this
console.log(getGrade(98));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Rock-papper-sscissors logic
function rock_Paper_scissors(user, computer){
    if(user === computer) return "draw";
    
    if(user === "rock" && computer === "scissor") return "user wins";
    if(user === "paper" && computer === "rock") return "user wins";
    if(user === "scissor" && computer === "paper") return "user wins";

    // if(user === "scissor" && computer === "rock") return "computer wins";
    // if(user === "rock" && computer === "paper") return "computer wins";    
    // if(user === "paper" && computer === "scissor") return "computer wins";
    return "computer wins";

}

let result = rock_Paper_scissors("rock", "scissor");
console.log(result);
console.log(rock_Paper_scissors("rock", "rock"));
console.log(rock_Paper_scissors("rock", "paper"));