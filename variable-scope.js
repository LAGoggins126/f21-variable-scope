// Is this creating a new variable or reassigning an existing variable?
let appleStorage = 10;    // Creating a new variable

function EatApples()
{
  // Is this creating a new variable or reassigning an existing variable?
  appleStorage = 0;       // reassigning an exsisting variable
}

function BuyApples()
{
  // Is this creating a new variable or reassigning an existing variable?
  appleStorage = 20;  // creating a new variable
}

console.log("You have " + appleStorage + " apples.");

EatApples();

console.log("You have " + appleStorage + " apples.");

BuyApples();

// Why does this say we have 0 apples when we should have 20?
// Because you already have a variable with the name
console.log("You have " + appleStorage + " apples.");

// 1) Modify either the A, B, or C instruction in place to change the
//      scope of the variable it is assigning to. After your change,
//      the last "console.log" should print "You have 20 apples."