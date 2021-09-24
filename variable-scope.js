// Is this creating a new variable or reassigning an existing variable?
let appleStorage = 10;    // Instruction A

function EatApples()
{
  // Is this creating a new variable or reassigning an existing variable?
  appleStorage = 0;       // Instruction B
}

function BuyApples()
{
  // Is this creating a new variable or reassigning an existing variable?
  let appleStorage = 20;  // Instruction C
}

console.log("You have " + appleStorage + " apples.");

EatApples();

console.log("You have " + appleStorage + " apples.");

BuyApples();

// Why does this say we have 0 apples when we should have 20?
console.log("You have " + appleStorage + " apples.");

// 1) Modify either the A, B, or C instruction in place to change the
//      scope of the variable it is assigning to. After your change,
//      the last "console.log" should print "You have 20 apples."