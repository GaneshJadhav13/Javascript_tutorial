//ex

//let a='10';
t1=typeof(a);
console.log("\n type of a is ",t1);
t=typeof(+a);

console.log("\n type of a is", t)


// +, -, !, typeof, ++,-- these all are unary operattors
// these works of single values
/*
Unary operators are simple but powerful. They're used for:

Type conversion

Toggling values

Object manipulation

Incrementing/decrementing values
*/

let a = "10";
let b = true;

// Unary Plus (+)
console.log(+a);       // 10 (string → number)
console.log(+b);       // 1 (true → 1)

// Unary Negation (-)
console.log(-a);       // -10
console.log(-b);       // -1

// Increment (++)
let x = 5;
console.log(++x);      // 6 (pre-increment)
console.log(x++);      // 6 (post-increment, prints first then adds 1)
console.log(x);        // 7

// Decrement (--)
let y = 3;
console.log(--y);      // 2
console.log(y--);      // 2
console.log(y);        // 1

// Logical NOT (!)
let isLoggedIn = false;
console.log(!isLoggedIn); // true

// typeof
console.log(typeof 42);       // "number"
console.log(typeof "hello");  // "string"
console.log(typeof true);     // "boolean"

// void (rare use)
console.log(void 0); // undefined

// delete (for object properties)
let obj = { name: "Grj", age: 21 };
delete obj.age;
console.log(obj); // { name: "Grj" }

