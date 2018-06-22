/*===== 1 EXERCICE ====*/

// CONSOLE.LOG LANGUAGES YOU KNOW
console.log("Hello world");
console.log("Hola, mundo");
console.log("Salut, monde");

/*=====  2 EXERCICE ====*/
// 2). Consider the following code:

console.log('I\'m awesome'); // you need backslash to escape to turn this character into string

/*=====  3 EXERCICE ====*/

// 3) 3. 3. Declare a variable x and initialize it with an integer, using these exact steps:
// 3.1 First, declare your variable x (do not initialize it yet).
// 3.2 Add a console.log statement that explains in words what you think the value of x is

let x;
console.log("the value of x will be undifined because we haven't assinged a value to this variable");

// 3.3 Add a console.log statement that logs the value of x.
// 3.4 Now initialize your variable x with an integer.
// 3.5 Next, add a console.log statement that explains what you think the value of x is.
// 3.6 Add a console.log statement that logs the value of x.
// Steps to be taken:

console.log(x);
let x = 4;
console.log("the value of x is not defined because we must declare variables first before console.log");


/*=====  4 EXERCICE ====*/

// 4)  4. Declare a variable y and assign a string to it.
// 4.1 Write a console.log statement in which you explain in words what you think the value of the string is.
// 4.2 Now console.log the variable y.
// 4.3 Now assign a new string to the variable y.
// 4.4 Just like what you did before write a console.log statement that explains in words what you think will be logged to the console.
// 4.5 Now console.log y again.

let y = "HackyourFuture";
console.log("string are the way to hold text values")
console.log(y);
let y = "a different string";
console.log("we already assigned y to a string?"); //I am not 100% what is happening here
console.log(y);

/*==== 5 QUESTION ====*/
// 5. How do you round the number 7.25, to the nearest integer (i.e., whole number)?
// 5.1 Declare a variable z and assign the number 7.25 to it.
// 5.2 console.log z.
// 5.3 Declare another variable a that has the value of z but rounded to the nearest integer.
// 5.4 console.log a.
// 5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
// 5.6 console.log the highest value.


let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);

let b = Math.max(z, a);
console.log(b);

/*==== 6 QUESTION ====*/
// 6. Arrays
// 6.1 Declare an empty array. Make sure that the name you choose indicates 'plurality', because an array is capable of containing more than one element. (See Naming conventions).
// 6.2 Write a console.log statement that explains in words what you think the value of the array is.
// 6.3 console.log your array.
// 6.4 Create an array that has your favorite animals inside (see if you can find a good name that exactly describes what this variable will hold).
// 6.5 Log your array.
// 6.6 Add a statement that adds Daan's favorite animal ('baby pig') to the existing array.
// 6.7 Log your new array!

let plurality = [];
console.log("is the way to hold different values of different types in one variable");
console.log(plurality);

let animals = ["tiger", "dog", "utter", "panda"];
console.log(animals);
animals.push("baby pig");
console.log(animals);

// More strings
// Let's consider the following string: let myString = "this is a test".
// 7.1 Add the string to your file and console.log it.
// 7.2 Find a way to get the length of myString.
// 7.3 console.log the length of myString.

let myString = "this is a test";

console.log(myString.length);   

// 8. Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
// 8.1 First declare at least four variables and assign them different data types.
// 8.2 For each variable write a console.log statement that logs the value
// I PLAYED WITH THIS CHALLENGE
let number = prompt("Hey hackyourfuture class, is number 6 === to number 8? yes or not?");
let secondNumber = 8;
let string = "I am a super string";
let iamNull= null;
let thisIsTrue = true;

if(number === "yes"){
    console.log("OH! YES, SAME TYPE, YOU DID IT WELL")
} else{alert("Oh! that's wrong! sorry dude")}

// 9. If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
// 9.1 Add at least 3 console.log statements in which you show that you understand what % does.

let x = 7;
x = x % 3;
console.log(x);
console.log("It will be 1 because 1 is the remainder of the operation");// I think I see it something like 3 + 3 = 6 ; leftover = 1; But I am not sure if this is the correct approach;

// 10. Write a program to answer the following questions:
// 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
//yes you can have different types in an array
let differentTypes = [`hello, I am an array with different types such as this number ${x} or`, null, true, false, 8, 9];
console.log(differentTypes);
// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
if(6/0 === 10/0){
    console.log("yes")
} else{console.log("not equal")}
// 10.3 Add console.log statements to the above program in which you show that you understand the concepts (just like you've done in the above assignments).
console.log("the result is undifined because you can  not devide by 0, 0 times any number is 0")


