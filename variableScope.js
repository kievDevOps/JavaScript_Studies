//  variable scope = where a variable is recognized and accessible (local vs global)

let x = 3;

function1();
function function1() {
  let x = 1;
  console.log(x); // This will print 1
}

function function2() {
  let x = 2;
  console.log(x); // This will print 2
}

console.log(x); // This will print 3 because x is a global variable
