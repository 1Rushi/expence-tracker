
//function clickme() 
   // document.getElementById("para").innerText = "you clicked me!";

// variable in javascript
var name = "john";  //string
var age = 25;       //number
//hosting example:
console.log(greeting);  //undefined,because of hosting
var greeting = "hello!";

//data types 
var number = 42;      //number
var name = "alise";   //string
var isloggedIn = false;   //boolean
var x;              //undefined
var y = null;         //null

//operators
//Arithmetic operators
// (Addition)
var sum = 5 + 6;
console.log(sum);       //output:12 

// (subtraction)
var difference = 10 - 4;
console.log(difference);    //output:6

// (multiplication)
var product = 4 * 3;
console.log(product);       //output:12

// (division)
var quotient = 20 / 5;
console.log(quotient);      //output;4

// (modulus - reminder)
var reminder = 7 % 3;
console.log(reminder);      //output;1

// (++increment)
var num = 5;
num++;
console.log(num);           //output;6

// (--decrement)
var num = 5;
num--;
console.log(num);           //output:4

//comparison operator
   // (== equal to)
   console.log(5 == "5");     //output:true

   //  === (strict equal to)
   console.log(5 === "5");      //output:false

   //  != (not equal to)
   console.log(5 != "6");     //output:ture

   //  !== (strict not equal to )
   console.log(5 !== "5");     //output:ture

   //  > (greater than)
   console.log(7 > 5);          //output:true

   //  < (less than)
   console.log(3 < 4);          //output:true

 //logical operator
   //  && (logical AND)
   console.log(true && false);        //output:false

   // || (logical OR)
   console.log(true || false);        //output:true

   // !(logical NOT)
   console.log(!true);                //output:false

 //assingment operator
   // =(Assingment)
   var x = 10;
   console.log(x);                    //output:10

   // +==(add and assign)
   var x = 5;
   x += 3;                              //equivalent to x=x+3
   console.log(x);                     //output:8

   // -==(subtract assign)
   var x = 10;
   x -= 4;                              //equivalent to x=x-4
   console.log(x);                     //output:6

   // *==(multiply and assign)
   var x = 6;
   x *= 2;                              //equivalent to x=x*2
   console.log(x);                     //output:12

   // /=(divide and assign)
   var x = 20;
   x /= 4;                               //equivalent to x=x/4
   console.log(x);                     //output:5

//object
   var car = {
      brand: "toyota",
      model: "corolla",
      year: 2020,
      getInfo: function () {
         return this.brand + " " + this.model;
      }
   };
   console.log(car.getInfo());         //output:"toyota coralla"

//arrays
   var colors = ["red","green", "blue"];
   console.log(colors[0]);             //output:"red"

//function
// function declaration

    function greet(name)
    {
      console.log("hello," + "!")
   };

   greet("alice");                 //output:"hello, alice"

   // 2 function expression

   var sayGoodbye = function(name)
    {
      console.log("Goodbye," + name + "!");
   };

   sayGoodbye("bob");             //output:"Goodbye, bob!"

//parameters
   function add(a, b) {
      return a + b;
   }

   var sum = add(5, 3);
   console.log(sum);           //output:8

//return
   function multiply(x, y) {
      return x * y;
   }

   var product = multiply(4, 5);
   console.log(product);       //output:20

//control flow
   // 1. if statement 
   var age = 20;
   if (age >= 18) {
      console.log("Adult")
   }

   // 2. if...else statement
   var age = 16;
   if (age >= 18) {
      console.log("adult");
   } else {
      console.log("minor");
   }

   // 3. if..else if..else statement
   var score = 85;

   if (score >= 90) {
      console.log("Grade:A");
   } else if (score >= 75) {
      console.log("Grade:B");
   } else if (score >= 60) {
      console.log("Grade: C");
   } else {
      console.log("Grade: F");
   }

//switch statement
   var fruit = "apple";

   switch (fruit) {
      case "apple":
         console.log("apple is selected");
         break;
      case "banana":
         console.log("banana is selected");
         break;
      default:
         console.log("unkown fruit");
   }

//looping statement
   // 1. for loop

   for (var i = 0; i < 5; i++) {
         console.log(i);         //output:0,1,2,3,4
      }

   // 2. while loop
   
   var count = 0;
   while (count < 3) {
      console.log(count);
      count++;
   }

   // 3.do...while loop

   var i = 0;
   do {
      console.log(i);
      i++;
   } while (i < 3);

// datas and times

   // 1.creating dates

   // current date and time

   var now = new Date();
   console.log(now);         //output:currtent date and time

   // specific date and time:
   var specificDate = new Date(2024, 9, 20, 14, 30);
   //year,month (0-based),day,hour,minute
   console.log(specificDate);      //output:sun oct 20 2024 14:30:00

   // using date string
   var dateFromString = new Date("October 20,2024 14:30:00");
   console.log(dateFromString);  //output:sun oct 20 2024 14:30:00

//date method
      // 1. getFullYear()     // Gets the year.

      var year = now.getFullYear();
      console.log(year); // Output: 2024

      // 2. getMonth()     // Gets the month (0-based, so January is 0).

      var month = now.getMonth();
      console.log(month); // Output: 9 (October)

      // 3. getDate()       //Gets the day of the month.

      var day = now.getDate();
         console.log(day); // Output: 20

      // 4. getDay()      //Gets the day of the week (0 = Sunday, 6 = Saturday).

      var weekday = now.getDay();
      console.log(weekday); // Output: 0 (Sunday).

      // 5. getHours()       // Gets the hour.
      
      var hours = now.getHours();
      console.log (hours); // Output: 14

      // 6. getMinutes()        //Gets the minutes.

      var minutes = now.getMinutes();
      console.log(minutes); // Output: 30

      // 7. setDate()           //Sets the day of the month.

      now.setDate(15);
      console.log(now);   // Changes the date to the 15th of the current month

      // 8. setMonth()          //sets the month(0-based)
      now.setMonth(11);
      console.log(now);   //change the month to december (11th month)

//Formatting dates
//  toDateString()        //return the date portion as a human-readable string.
 console.log(now.toDateString());   //output: "sun Oct 20 2024"

//  toTimeString()  
//        //returns the time portion as a string 
 console.log(now.toTimeString());   //output: "14:30:00 GMT+0000(Coordinated Universal Time)"

 toLocalDataString()       //return a localized date string
 console.log(now.toLocalDataString());   //output: "10/20/2024" (format may vary)

 toLocalTimeString()       //return a localized time string
 console.log(now.toLocalTimeString());   //output: "2:30:00 PM" (format may vary)

toISOString()           //return the date as astring in IOS 8601 format
console.log(now.toISOSString());       //output : "2024-10-20T14:30:00.000Z"

//Date Calculations

var oneDay =24*60*60*1000;    //one day in milliseconds
var tomorrow =new Date(now.getTime() + oneDay);
console.log(tomorrow);        //output: Date and time for the next day

//ERROR HANDLING (try..catch)
try{
   var x=y;    //y is not defined
}catch (error) {
   console.log("An error occurred:" + error.message);
}

//ARRAY METHORD (ES5)
push()      // Adds one or more elements to the end of an array.

var arr = [1, 2, 31]
arr.push(4);
console.log(arr);  // Output: (1, 2, 3, 4]

pop ()                   //Removes the last element from an array.

var arr = [1, 2, 3];
arr.pop();
console.log(arr); // Output: [1, 2]

shift()        //Removes the first element from an array.

var arr = [1, 2, 3];
arr.shift();
console.log(arr); // Output: [2,3]

unshift()        //Add one or more element to the begining of an array

var arr = [1, 2, 3];
arr.shift();
console.log(arr); // Output: [2,3]

slice ()          //Return a shallow copy of a portion of an array

var arr = [1,2,3,4,5];
var sliced = arr.slice(1,4);
console.log(sliced);    //output: [2,3,4]

splice ()      //add or remove element from an arry

var arr = [1,2,3,4];
arr.splice(2,1,5,6);
console.log(arr);    //output: [1,2,5,6,4]

concat ()      //joins two or more array into a new array

var arr1 = [1,2];
var arr2 = [3,4];
var combined = arr1.concat(arr2);
console.log(combined);     //output: [1,2,3,4]

forEach ()                  //  Executes a provided function once for each array element.

var arr = [1, 2, 3];
arr.forEach(function(item) {
console.log(item);
})

// Output: //1    //2    //3

map()           //   Creates a new array populated with the results of calling a function on every element.

var numbers =[11, 2, 3];
var doubled = numbers.map(function(num) {

return num * 2;
});
console.log(doubled);       // Output: 12, 5, 6]

filter()               //   Creates a new array with elements that pass a test.

var numbers = [1,2,3,4];
var filtered = numbers.filter(function(num) {
return num > 2;
});
console.log(filtered);         // Datput: [3, 4]

indexOf ()        //Return the first index of an element in an array,or-1 if not found

var arr = [1, 2, 3, 2];
console.log(arr.IndexOf(2));     // Output: 1
console.log(arr.IndexOf (4));    // Output: -1

reduce()          // Executes a reducer function on each element to produce a single accumulated value.

var numbers = [1,2,3,4];
var sum = number.reduce(function(total,num) {
   return total + num;
},0);
console.log(sum) ;      // Output: 10

// Strict Mode (ES5)
// Strict mode is a way to enforce stricter parsing and error handling in your JavaScript code. It helps catch common coding mistakes and unsafe actions like using undeclared variables.

"use strict";
var x = 3.14;      // Valid
y = 3.14;          // Erzor: y is not declared

//Advanced functions
// Higher-Order functions

function greet (name) {
return "Hello," + name;
}
function logMessage(fn, name) {
console.log (fn (name));
}
LogMessage(greet,"Alice");    // outputs "Hello, Alice"

//Callback Functions
// Callback functions are functions that are passed as arguments to other functions and are executed after the completion of that function,

function fetchData(callback) {
setTimeout (function() {
callback ("Data Loaded");
},2000);
}
function displayMessage(message) {
console.log (message) ;
}
fetchData (displayMessage);       // Output after 2 secondes: "Data loaded"

//Asynchronous functions

setTimeout (function() {
   console.log("Executed after 2 second");
}, 2000);

var count = 0;
var intervalId = setInterval (function() {
   console.log("Repeating every 1 second");
   count++;
   if (count === 3) {
      clearInterval(intercalId);       //stops the interval after 3executions
   }
}, 1000);

// DOM MAnipulation
// selecting Element

var element = document.getElementById ("header");
var items = document.getElementsByClassNane ("item");
var firstItem = document.querySelector(".item");
var allItems = document.querySelectorAll(".item");

//  Changing Content

var element = document.getElementById("header");
element.innerHTML = "new Header";

// Modifying Attributes

element.setAttribute("class", "newClass");
var attr = element.getAttribute("class");
element.removeAttribute("class");

// Adding/Removing Elements

var newDiv = document.createElement("div");
 document.body.appendChild (newDiv);
document.body.removeChild(newDiv);

// Event Handling

document.getElementById("button").addEventListener("click", function()
{
   console.log("Button clicked");
});

// Events
// Mouse Events

// <!-- HTML Example -->
//  <button onclick ="handleClick()">Click Me</button>

function handleClick()  {
console.log("Button clicked");
}


// Double-click and mouse enter/leave

//  ondblclick="handleDoubleClick()"
// onmouseenter="handleMenseEnter()" onmouseleave ="handleMouseLeave ()"
// style="padding: 10px; border: 1px solid #ccc;">
// Double-click or hover over me


function handleDoubleClick() {
console.log("Element double-clicked");
}
function handleMouseEnter() {
console.log("Mouse antared the element");
}
function handleMouseLeave() {
   console.log("Mouse left the element");
}

