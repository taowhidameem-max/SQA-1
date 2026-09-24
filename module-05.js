function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

let relt = celsiusToFahrenheit(27);

console.log("Fahrenheit:", result);

////////////////

function factorial(number)
    {
    let result = 1;

    for (let i = 1; i <= number; i++) 
           {
        result = result * i;
           }

    return reult;
    }

let ans = factorial(7);
console.log("Factorial:", ans);

/////////////////

function checkPalindrome(word) 
    {
    let reverse = word.split("").reverse().join("");

    if (word === reverse) 
        {
        return true;
        } 
        else
        {
        return false;
        }S
     }

let rsult = checkPalindrome("meem");
console.log("Palindrome:", result);
/////////////////////

function sumArray(numbers)
 {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) 
        {
        sum = sum + numbers[i];
        }

    return sum;
 }

let numbers = [10, 20, 30, 40, 50];
let result = sumArray(numbers);
console.log("Sum:", result);
////////////////

for (let i = 1; i <= 15; i++) 
    {

    if (i % 3 === 0 && i % 5 === 0) 
        {
        console.log("FizzBuzz");
        }
    else if (i % 3 === 0) 
         {
        console.log("Fizz");
         }
    else if (i % 5 === 0) 
           {
        console.log("Buzz");
           }
    else 
           {
        console.log(i);
           }
    }