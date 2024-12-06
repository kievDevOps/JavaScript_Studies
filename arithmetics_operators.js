//  Arithmetics operators = operands (values, variables, etc)
//  operators(+ - / *)

let students = 30;

students += 1; // 31
students -= 1; // 29
students *= 2; // 60
students /= 2; // 15
students **= 2; // 900
students %= 2; // 0

students++; // 31
students--; // 29

console.log(students);

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result); // 23
