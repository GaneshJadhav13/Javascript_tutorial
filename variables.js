// way 1 --> var 

var a = 10;
var a = 20; // this is allowed using var
// var can attach with window
// it is a function scoped  variable

function f1() {
    if (true) {
        var q = 10;
        // it is example of function scoped , this var q can be used outside of if block but cant be used outside of function

    }
}
// we can use var to declare variables with same name and different values

// we can reassign/redeclare var. 
// var  a is a global variable bcz we have declared it openly,(not within any function)
// var q is local/ function scoped variable bcz it is declared in function f1

// var a can be used in whole program but q cant be used in outside of function



// ****** way 2 --> let
// we can't reassign variable using let keyword,
// using let keyword redeclaration is not allowed

let s=90;
//let s=10; this is error


// way 3 --> const

const w=78;

//now value of w is fixed in this program , this cant be change 





