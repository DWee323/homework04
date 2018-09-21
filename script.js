//the constant variable name can be NAME (all caps) to indicate it is a constant value - I'm making it 'name' since that is how it is written in the instructions (Ali will pick on me for being again too anal, but eh, that's me)
const name = "Diane";

let age = 31;

age *= 5;
console.log(age);

const last_name = "Wee";

//Full name is required to be last name, first.
var full_name = last_name + ", " + name;
console.log(full_name);

var fruits = [
    "Apples",
    "Oranges",
    "Pears",
    "Bananas",
    "Cherries",
];

if (fruits.length < 5) {
    console.log("Only a few fruits!");
} else if (fruits.length > 5){ 
    console.log("Nice list of fruits.");
} else {
    console.log("FRUUUITS!!");
};

//I am not quite sure of what the last task means.
var askFruit = prompt("Enter a fruit item.");
switch (askFruit) {
    case fruits[0]:
        console.log("$0.99");
        break;
    case fruits[1]:
        console.log("$1.05");
        break;
    case fruits[2]:
        console.log("$1.50");
        break;
    case fruits[3]:
        console.log("$0.49");
        break;
    case fruits[4]:
        console.log("$3.01");
        break;
};