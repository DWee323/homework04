//the constant variable name can be NAME (all caps) to indicate it is a constant value - I'm making it 'name' since that is how it is written in the instructions (Ali will pick on me for being again too anal, but eh, that's me)
const name = "Diane";

let age = 31;

age *= 5;
console.log(age);

//Create a constant variable called last_name with the value of your last name.
const last_name = "Wee";

/*
Create a variable called full_name that concatinates you first and last name (using the previous variables). The variable value should be your last name, a comma and space, then first name. Output full_name to the console. For example, my name would output Karbassi, Ali.
*/

//Full name is required to be last name, first.
var full_name = last_name + ", " + name;
console.log(full_name);

/*
Leave a single-line comment above the full_name stating, "Full name is required to be last name, first."
*/

/*
Create an array called fruits with the initial value of "Apples", "Oranges", "Pears", "Bananas", and "Cherries". Hint: Don't create then update the array.
*/
var fruits = [
    "Apples",
    "Oranges",
    "Pears",
    "Bananas",
    "Cherries",
];

/*
Using an if...else statement, to check the size of the fruits array. 

If it's less than 5, 
output to the console "Only a few fruits!". 

If it's more than 5, 
output to the console, "Nice list of fruits.". 

If the list is any other size, output "FRUUUITS!!".
*/

if (fruits.length < 5) {
    console.log("Only a few fruits!");
} else if (fruits.length > 5){ 
    console.log("Nice list of fruits.");
} else {
    console.log("FRUUUITS!!");
};

/*
Using a switch statement, output to the console the first item in the fruits array's price (only price, nothing else). Apples: $0.99; Oranges: $1.05; Pears: $1.50; Bananas: $0.49; Cherries: $3.01; The output we should see in the console should be "$0.99". Note: I want to see the whole switch statement, such that if I change the fruits's first item, the output price will work.
*/
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

console.log(name, age, fruits);