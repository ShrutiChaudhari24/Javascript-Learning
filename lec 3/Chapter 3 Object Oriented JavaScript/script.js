// ===============================================
// CONSTRUCTOR FUNCTION - BISCUITS
// ===============================================

function CreateBiscuits(name, price, qty, company, category) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.company = company;
    this.category = category;
}

// Objects
let biscuit1 = new CreateBiscuits(
    "Oreo",
    10,
    5,
    "Cadbury",
    "Chocolate Biscuit"
);

let biscuit2 = new CreateBiscuits(
    "Dark Fantasy",
    20,
    3,
    "Parle",
    "Chocolate Filled"
);

console.log(biscuit1);
console.log(biscuit2);


// ===============================================
// CONSTRUCTOR FUNCTION - PENCIL
// ===============================================

function CreatePencil(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
}

// Prototype Method
CreatePencil.prototype.write = function(text) {
    let h1 = document.createElement("h1");

    h1.textContent = text;
    h1.style.color = this.color;

    document.body.append(h1);
};

// Another Prototype Method
CreatePencil.prototype.erase = function() {
    document.querySelectorAll("h1").forEach(function(elem) {
        elem.remove();
    });
};

// Objects
let pencil1 = new CreatePencil(
    "Nataraj",
    10,
    "black",
    "Nataraj"
);

let pencil2 = new CreatePencil(
    "Doms",
    15,
    "red",
    "Doms"
);

console.log(pencil1);
console.log(pencil2);

// Using Methods
pencil1.write("Hello from Pencil 1");
pencil2.write("Hello from Pencil 2");


// ===============================================
// CLASS - HOUSE
// ===============================================

class CreateHouse {

    // Constructor
    constructor(name, company, price, color) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    // Method
    write(text) {
        let h1 = document.createElement("h1");

        h1.textContent = text;
        h1.style.color = this.color;

        document.body.append(h1);
    }

    // Method
    erase() {
        document.querySelectorAll("h1").forEach(function(elem) {
            elem.remove();
        });
    }
}

// Objects
let house1 = new CreateHouse(
    "Ghar",
    "Ambuja",
    "$10,00,000",
    "yellow"
);

let house2 = new CreateHouse(
    "Villa",
    "UltraTech",
    "$20,00,000",
    "blue"
);

console.log(house1);
console.log(house2);

// Using Methods
house1.write("Welcome to House 1");
house2.write("Welcome to House 2");

// To erase all h1 tags after 5 seconds
setTimeout(() => {
    house1.erase();
}, 5000);

// extends, super

class User{
    constructor(name, address, username, email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "User"; 
    }

    checkRole(){
        console.log(`you are a ${this.role}`);
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name}:${text}`;
        document.body.appendChild(h1)
    }
}

class Admin extends User{
    constructor(name, address, username, email){
        super(name, address, username, email);
        this.role = "admin";
    }
    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        });
    }
}

let u1 =new User("Shruti", "Pune", "async123", "hey@hehey.com","user");
let a1 = new Admin("admin1","India", "adminnn","adsghagdhs@jshjdh.com");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Prototypal inheritance vs classical inheritance

// classical inheritance - java, cpp sub mae hota hai vo just dheaka matlab extend keyword ka use kar kae
// classes banana aur unhe extend kardena is a classical inheritance

// inheritance in normal all programming languages -> class sae class inherit karna

// prototypal inheritance srf JS mae hoti hai
// in JS phele class hoti hi nahi thi tho
// prototypal inheritance - object sae object inherit karna

// demo of prototypal inheritance
let coffee = {
    color: "dark",
    drink: function(){
        console.log("good good good");
    },
};

let arabiataCoffee = Object.create(coffee); // yaha coffee ka prototype aur arabiataCoffee kae prototype combine ho gaye
arabiataCoffee.taste = "bitter";
arabiataCoffee.drink();
console.log(arabiataCoffee);

// ek object hai hum chaye tho uski sari properties/methods ko inherit kara sakte hai doosre object mae
// syntax of prototypal inheritance
// let a = {};
// let b = Object.create(a); using this create() method