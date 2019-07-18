// console.log("hello");
// console.warn("this is a warning");
// console.error("this is a error")
//console.something is going to print to the console

//in js this is a single line comment
/* in js this is a multi line comment */
/* 
    Javascript is NOT java
        JavaScript has nothing to do with Java
    A few things to know about js
        it is a programming language
        it is a scripting language
        it is interpreted
            the browser will run js line by line
        it is loosely typed
        it is dynamic

*/

/* 
    js is loosely typed
        because variables can hold and have 
        transferred to them any datatype

    myVar=true
    myVar="this string"
*/

/* 
    datattypes in js
        string, boolean, number, object, null, undefined
*/

/* 
    how can we declare a variable?
        var x= 454;
        y=5;
    as of es2015, es6
        let z=2
        const a=3

    const does not change

    Scope
        Global      is accessible throughout the program
        Function    is accessible throughout the function
        Local       is accessible throughout the block of code "{}"
*/
//variable names
//  cant use a reserved keyword
/*      let var = 4
    only caracters that can begin a variable is: _,$,letters

//  variable and function names: camelCase
//  Global variable and constant names: UPPERCASE
*/
// let v1=5;
// let v;

//  Operators
//      unary, binary, ternary
/* 
            unary works with one operand
    typeof returns the type of the argument
    isNaN   returns a boolean whether the argument is a number
    !   not operator (negation)
    -x  flips the sign of the number
    +x  returns the same number, or converts to a number
    ++x pre-increment
    x++ post-increment
    --x pre-decrement
    x-- post-decrement

            binary works with two operands
    +   addition also string concatenation if at least one operand is a string
    -   subtraction
    *   multiplication
    /   division
    **  exponent
    %   modulus
    +=  addition assigment
    -=  subtraction assignment
    *=  multiplication assignment
    /=  division assignment
    **= exponent assignment
    %=  modulus assignment
and &&  logical and operator
or  ||  logical or operator 
xor ^   exclusive or
    <   less than
    >   greater than
    <=  less than or equal to
    >=  greater than or equal to
    =   assignment operator
    ==  comparison operator
    === strict comparison
    !=  not equal to (negate double equals)
    !== not strictly equal to (neggate triple equals)
    ,   separates assignments
        ternary works with three operands
    '?', ':'    checks a condition and returns one of two values
        [condition]?[if true]:[if false]

*/



/* 
    js falsey values
        false
        undefined
        null
        0
        ""
        NaN

    JS Truthy Values
        anything not falsey
*/

//      control flow

//  if statement
//  if something is true, then do something
// if(x){
    //     console.log(x);
    // }
    
    // if-else statement
//      if something is true, then do something, else, do something else
// if(x){
//     console.log(x)
// } else{
    //     console.log("x is false")
    // }
    
    //if else if else statement
    //  provides options for multiple outcomes
    // if(fargo%3==0){
        //     console.log('divisible by three')
// }else if(fargo%3==1){
    //     console.warn("fargo is not ready for this trip")
// }else{
    //     console.error('fargo is gone')
    // }
    
    let fargo= 210;
    //  switch statement
// switch (fargo % 10) {
//   case 0:
//     console.log("fargo is ready");
//   default:
//     console.log("where did fargo go?");
//   case 1:
//     console.warn("fargo does not want to go");
//     break; //break will break out of the flow
//   case 5:
//     console.error("this is wrong man");
// }

//Loops
//  A loop will perform operations during each iteration

/* 
for([initialization][semicolon][condition][semicolon][incrementation]){
    logic
}
*/

// for(let x = 10; x<=50; x++){
//     console.log(x)
// }

//moral of the story, watch out for infinite loops

let abeAge=210;

//if i dont know how many times I am going to run an operation,
//  i use a while loop
// while(fargo!=abeAge){
//     console.log(fargo);
//     fargo++;
// }
// console.log("fargo is abes age")

//a do while
//  difference is it runs at least once
// do{
//     console.log('fargo is: '+fargo);
//     fargo++;
// }while(fargo<=abeAge)

// console.log('fargo is abes age')

//another keyword for you all to know *drumroll* :
//function
// use the function keyword to declare a function
// give the function a name and set the parameters
// inside block of code we give the logic for the function
function func(){
    return 'func';
}
//  We then invoke or call the function by its name and arguments
//  when we declare a function, the variables inside the parenthesis
//      are called parameters
//  when we put values inside the parenthesis during invokation
//      they are called arguments
func();
function fun2(num, garbage){
    return num+garbage;
}

function myfunc4(num){
    for(let i=0; i<5;i++){}
    for(var j=0;j<5;j++){}
    console.log(num);
    console.log(j)
}

/* 
    var has global and function
    let and const have global, function, and local scope
*/

// let myVar=3;                //global scope
// const myVar=3               //global scope
var myVar =3                //global scope
function newFunc(){
    // const itHappens=true;   //function scope
    // let itHappens=true      //function scope
    var itHappens=true      //function scope
    if(itHappens){
        // let panic="yes";    //local scope
        // const panic="yes";  //local scope
        var panic="yes"     //function scope
        // panic="yes"         //global scope sssshhhhhhh
    }
    console.log(panic);
}

let newArr=[]//arrays can hold multiple values
let kangaroo=[4,3,2,1];
/* a data structure consisting of a collection of elements
    (values or variables), each value has a certain index,
    indices begin at 0.*/
/* 
We can use properties and methods of arrays by using the dot operator
    to access them.
*/

let thisArr=[5,20,"mongoose",19,"bravo",false, NaN];

// function loopThruArr(arr){
//     for(let x=0; x<arr.length;x++){
//         console.log(arr[x])
//     }
// }

//this is know as a for of loop
//  we create a variable that will hold each element of the array
function loopThruBetter(arr){
    for(let x of arr){
        console.log(x);
    }
}

//this is a for in loop
//  we create a variable that will hold the indices of the array
function loopThruBetter2(arr){
    for(let x in arr){
        console.log(x);
    }
}

//we now talk about object
//  an object is a set of states and behaviors
// we can access an objects properties with dot or subscript notation
//      boat.name           dot
//      boat['name']        subscript
let boat={
    name: "SS silence",
    color: "silver",
    length: 25,
    float:true,
    numOfHoles: 0,
    drive: function (){
        return `these are backticks and my boat has ${this.numOfHoles} 
            many holes and we are thinking of drilling more`
    },
    drillHoles: function (){
        console.log(this.drillHoles.name)
        this.float=false;
        this.numOfHoles++;
    }
}

// this is the hard way of doing a long string
// "we have "+this.numOfHoles+" holes in "+
//             "this boat and are thinking about drilling more"

//IIFE
//  Immediately Invoking Function Expression
// (function fun(){
//     return 3;
// })()

// (function (num){
//     return num;
// })(5500)

//OOP
// Pillars
//  inheritance polymorphism    encapsulation   abstraction
//closure is the way we can achieve encapsulation with js
let ufo4=(function (){
    console.log("hello from the outside");
    let mia=0;
    return function(){
        console.log("hello from the inside");
        return ++mia;
    }
})()
