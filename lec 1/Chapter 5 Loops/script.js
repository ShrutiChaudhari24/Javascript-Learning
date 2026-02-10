// whenever we want to repeat something we use loop

// for, while, do-while 

// for
// whenever we know 
// kaha se jaana hai -> kaha tak jana hai -> kaise jana hai
// we use for loop 
// eg :- we have to go from 1 to 40 

// eg :- print from 1 to 100
// for(start; end change){}

for( let i = 1; i <= 100; i++){
    console.log(i);
}

// while
// whenever we know 
// kaha sae jana hai -> kab rukna hai -> kaise jaana hai
// we use while loop
// eg :- tab tak chalo jab tak hello na aajaye
// while(end)
let j = 1; // start
while(j != 101){
    console.log(j);
    j++;
}


// we use do while loop when we wnt to run the loop atleast once even if the condition of while is false
// do-while
// do{

// }
// while(end);
let k = 12 
do{
    console.log(k);
    k++;
}
while(k < 2)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// break, continue
//break -> Exit loop completely (when we want to break any loop) 
for(let i = 1; i <= 200; i++){
    if(i === 32){ 
        break;     //this loop print till 31 only
    }
    console.log(i);
}

// continue -> Skip current iteration and move to next (when we want to skip any particular condition and continue the other after that condition)
for(let i = 1; i <= 200; i++){
    if(i === 32){ 
        continue;     //this loop skip 32 only and print till 200
    }
    console.log(i);
}

// when we learn arrays we will learn this
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for-of, for-in, forEach for arrays

// when we learn objects we will learn this
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// for-in, Object entries for Objects


