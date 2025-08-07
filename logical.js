let a = 10;
let b = 5;
let c = 15;

// --- Logical AND (&&) ---
console.log("---- Logical AND ----");
console.log(a > b && a < c); // true && true → true
console.log(a > c && b < a); // false && true → false

// --- Logical OR (||) ---
console.log("---- Logical OR ----");
console.log(a > b || b > c); // true || false → true
console.log(b > c || a < b); // false || false → false

// --- Logical NOT (!) ---
console.log("---- Logical NOT ----");
let isLoggedIn = false;
console.log(!isLoggedIn);    // !false → true

let isOnline = true;
console.log(!isOnline);      // !true → false

//Logical AND
console.log(5 > 3 && 7 > 2); // true
console.log(5 > 3 && 7 < 2); // false


// logical OR
console.log(5 < 3 || 7 > 2); // true
console.log(5 < 3 || 7 < 2); // false

// logical not
let isStudent = true;
console.log(!isStudent); // false


let age = 20;
let hasID = true;


//ex
if (age >= 18 && hasID) {
  console.log("You can enter the club.");
} else {
  console.log("Access denied.");
}
