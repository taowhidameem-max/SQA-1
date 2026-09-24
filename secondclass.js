let x = 5;
let y = 6;
let w = 10;

let sum = (x + y)*w;

console.log(sum);

console.log("john" + " " +"DOE")
let a,b,c;
a=5;
b=6;
c=a+b;
console.log(a,b,c);

let m = "John dDoe";

let p = 0;
console.log (p);

const PI = 3.141592653589793;
console.log (PI);
let text11 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
console.log (text3);

let text1 = "What a very ";
text1 += "nice day";
console.log (text1);

let age= 12;
if(age<0)
    {
        console.log("cno way to  drive");
    }
 else if(age<18)
 {
    console.log("cann't drive");
 }   

 else
    {
    console.log(" can drive");
 }

let time=7;
let greeting;
 if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

//////////////////////////
let dayyNumber = Number(prompt("Enter a number between 0 and 6:"));
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log(day);

///////////////

switch (new Data(0).getDay())
{
case 4:
case 5:
    text= "soon weekend";
    break;
case 0:
case 6: 
    text = "its weekend";
    break;
default:
    text= "next";

}
console.log(Day);
/////////
let dayyyNumber = Number(prompt("Enter a number between 0 and 6:"));
let dayy;

switch (dayNumber) {
    case 0:
        day = "Sunday";
        break;

    case 1:
        day = "Monday";
        break;

    case 2:
        day = "Tuesday";
        break;

    case 3:
        day = "Wednesday";
        break;

    case 4:
        day = "Thursday";
        break;

    case 5:
        day = "Friday";
        break;

    case 6:
        day = "Saturday";
        break;

    default:
        day = "Invalid number";
}

console.log(day);

/////////////
let i = 5;
let text = "";

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

console.log(text);

/////////////////
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let j = 0;

let textt = "";
for (; j < len; ) {
  textt += cars[j] + "<br>";
  j++;
}

console.log(len);
console.log(textt);
////////
let xx = 123e5;    // 12300000
let yy = 123e-5; // 0.00123
console.log(xx);
console.log(yy);
////
let xxx = (0.2 * 10 + 0.1 * 10) / 10;
console.log(xxx);
////////////
let x4 = "10";
let y4 = "20";
let z = x4 + y4;
console.log("z");
//////
let x5 = 10;
let y5 = 20;
let z5 = x5 + y5;
console.log(z5);
///////////////
function sayHello() {
  return "Hello World";
}

let a1 = sayHello();
let b1 = sayHello();
let c1 = sayHello();
console.log(sayHello());
console.log(sayHello());
console.log(sayHello());


