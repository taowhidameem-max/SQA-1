const number = 7;

if (number % 2 === 0) 
     {
    console.log(`${number} is Odd`);
     } 
else {
    console.log(`${number} is Odd`);
     }
///////////////////    
     
const a = 12;
const b = 45;
const c = 67;

let largest = a;

if (b > largest) 
    {
    largest = b;
    }

if (c > largest)
     {
    largest = c;
     }

console.log(`Largest number is ${largest}`);

////////////////////////



/////////////////////

const str = "Taowhida";
let count = 0;

for (let i = 0; i < str.length; i++)
     {
    if (
        str[i] === "a" || str[i] === "e" ||
        str[i] === "i" ||str[i] === "o" ||
        str[i] === "u"
    )   {
        count++;
         }
     }

console.log(`Vowels count: ${count}`);

////////////////

const arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];
for (let i = 0; i < arr.length; i++) 
    {
    if (!uniqueArr.includes(arr[i])) 
        {
        uniqueArr.push(arr[i]);
        }
    }

console.log(uniqueArr);

////////////////
console.log("Test Started");
setTimeout(() => 
    {
    console.log("Test Completed");
}, 2000);

console.log("Other Tasks");
