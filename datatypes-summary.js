// On the basic of memory allocation and access
// Primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol(make unique value), BigInt

const score = false // Boolean
const score1 = 11.3 // Number

// console.log(score === score1);

const isliggedIn = false
const outsideTemp = null
let useeEmail; // Undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 78985451255541122155n; 

// Reference (Non Primitive)

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];


let myObj = {
    name: "udbhav",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber); // undefined
console.log(typeof outsideTemp); // object
console.log(typeof score1); // number
console.log(typeof myFunction); // Object function
console.log(typeof myObj); // object
console.log(typeof heros); // object



/*

JavaScript has a range of data types, divided into two main categories: primitive and non-primitive.

1. Primitive Data Types
These are basic data types in JavaScript, and they are immutable
(their values cannot be changed directly). Each variable holds its own value.

String: Represents text data.
let name = "John";

Number: Represents both integer and floating-point numbers.
let age = 25;
let price = 9.99;

BigInt: Represents integers with arbitrary precision. Used for
very large numbers beyond the safe limit of the Number type.

let bigNumber = 1234567890123456789012345678901234567890n;

Boolean: Represents logical values, either true or false.
let isStudent = true;

Undefined: A variable that has been declared but not assigned a value.
let x;
console.log(x);  // undefined

Null: Represents the intentional absence of any object value.
null is often used to signify "no value.
let y = null;

Symbol: A unique and immutable data type often used as object keys to avoid naming conflicts.
let sym = Symbol("description");


2. Non-Primitive (Reference) Data Types
These data types are mutable, and variables store references (pointers) to the actual values.

Object: Used to store collections of data and more complex entities. 
Objects include properties in the form of key-value pairs.
let person = { name: "Alice", age: 30 };

Array: A special type of object used to store ordered lists of values.
let numbers = [1, 2, 3, 4];

Function: Functions are objects in JavaScript and can be stored in variables, 
passed as arguments, and returned from other functions.
function greet() {
  console.log("Hello");
}

*/ 

/*
JavaScript is a dynamically typed language. This means:

Variables are not bound to a specific type, and their types can change at runtime.

You don't need to declare a type when you declare a variable. 
The type is determined based on the value assigned to it.

For example:
let x = 10;        // x is a number
x = "Hello";       // x is now a string

In contrast, statically typed languages (like TypeScript, Java, or C++) require variable types to be 
defined at compile-time and do not allow type changes at runtime.

 */








// JavaScript is a dynamically typed language. This means:

// Variables are not bound to a specific type, and their types can change at runtime.
// You don't need to declare a type when you declare a variable. The type is determined based on the value assigned to it.
// For example:

// javascript
// Copy code
// let x = 10;        // x is a number
// x = "Hello";       // x is now a string
// In contrast, statically typed languages (like TypeScript, Java, or C++) require variable types to be defined at compile-time and do not allow type changes at runtime.


