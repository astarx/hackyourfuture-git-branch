// -----------------1------------------
console.log('I\'m awesome');  
//I'm awesome;

// -----------------2------------------

var a=["Hallo","Hola","Hello","Bonjour","مرحبا"];
let i=0;
while(i<a.length){
console.log(a[i]+' World');
i++;}
// Hallo World 
// Hola World 
// Hello World 
// Bonjour World 
// مرحبا World

// -----------------5------------------
var z=7.52;
var y=Math.round(z);
if(z<y)
console.log('z is smaller than y');
else console.log('z is bigger than y');

// z is smaller than y

// -----------------6------------------
var animals=["Dog Hokamaro","Cat Nonos","Sparrow Bisi"]
animals[animals.length]="baby pig";
animals;

// Array(4) [ "Dog Hokamaro", "Cat Nonos", "Sparrow Bisi", "baby pig" ]

// -----------------7------------------

let myString="this is a test";
console.log(myString);
console.log(myString.length);

// this is a test
// 14

// -----------------8------------------
var firstArray=[2,4,"text"]
var decondArray=[3,"text",null]

for(let m=0;m<firstArray.length;m++){
if(typeof(firstArray[m])==typeof(decondArray[m])){
console.log('Same Type');}
else
console.log('Not the same');}

// Same Type
// Not the same
// Not the same

// -----------------9------------------
console.log(50%8);      //2
console.log(-50%8)      //-2
console.log(-5%49)      //-5

// -----------------10------------------

if(7/0===2/0)
console.log('Yes we Can Compare Infinities')

// Yes we Can Compare Infinities