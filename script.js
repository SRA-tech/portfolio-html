// // Create a sample calculator
// // Arethmatic operation
/*console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);*/
// // Manually change everything
/*console.log("5 + 2 = " + (5 + 2));
console.log("5 - 2 = " + (5 - 2));
console.log("5 * 2 = " + (5 * 2));
console.log("5 / 2 = " + (5 / 2));
console.log("5 % 2 = " + (5 % 2));*/
// Using variable input from user using prompt()
// Number() function use to convert in number
// // To convert number to string use toString x = 20; x.toString(); output: "20"
// // Any number string could be converted but any character cannot be converted as number
// // parseInt(25), parseFloat(25.50)
// const firstNumber = Number(prompt('Enter first number'));
// const secondNumber = Number(prompt('Enter second number'));

// console.log(firstNumber + " + " + secondNumber);
// String literal way print syntax (`${value/variable}`)
// console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
// console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
// console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
// console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
// console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);

// // Assignment
// let x = 5;
// let y = 3;
// x += y; // x = x + y; // x = 5 + 3; // x = 8;
// x -= y; // x = x - y; // x = 8 - 3; // output x = 5; 
// console.log(x);

// x *= y; // x = x * y; // x = 5 * 3; // x = 15;
// x /= y; // x = x / y; // x = 15 / 3; // x = 5;
// x %= y; // x = x % y; // x = 5 % 3; // output x = 2; 
// console.log(x);
// // Unary and Binary operator
// let a = 30;
// let b = -a;// Unary minus operator
// console.log(b); // Output -30
// // post Increment 
// let c = 5;
// c++; // Increment by 1 c now 6
// c++; // C now 6 + 1 = 7
// console.log(c); //Output: 7
// // post increment quize: 1
// let e = 6;
// let f; //(Undefined variable)
// f = e++; // increment declared
// f = e++; // increment applied
// f = e++; // increment applied
// console.log(f); // output: 8
// console.log(e); // output: 9
// // post increment quize: 2
// let g = 6;
// let h; //(Undefined variable)
// h = ++g; // g = 7 (increment declared and prompt applied)
// h = g; // g = 7 (increment not declared)
// h = g++; // g = 7 (increment declared)
// h = ++g; // g = 9 (increment declared and prompt applied)
// console.log(h); // output: 9
// console.log(g); // output: 9

// // post decrement
// let d = 5;
// d--; // decrement by 1
// d--; // d now 4 - 1 = 3
// console.log(d); // output: 3
// // post-pre increment and decrement combination quize: 1
// let i = 6;
// let j;
// j = ++i; //7 (increment declared and prompt applied)
// j = --i; //6 (decrement declared and prompt applied)
// j = i--; //6 (increment declared)
// j = ++i; //6 - 1 + 1 = 6 (decrement applied and increment prompt applied)
// j = i; // 6
// console.log(j); // output: 6
// console.log(i); // output: 6

// const marks = Number(prompt("Enter your number: "));

// if(marks > 100 || marks < 0){
//     console.log("Invalid Marks");
// }
// else if(marks < 0){
//     console.log("Invalid Marks");
// }
// else if(marks >= 80){
//     console.log("Passed with letter marks");
// }
// else if(marks >= 60){
//     console.log("Passed with First Division");
// }
// else if(marks >= 45){
//     console.log("Passed with Second Division");
// }
// else if(marks >= 33){
//     console.log("Passed with Third Divition");
// }
// else{console.log("Unable to Passed, result is failed");}
// // Find largest number
// const num1 = 50;
// const num2 = 60;
// const num3 = 40;
// if(num1 > num2 && num1 > num3){
//     console.log(`Largest number = ${num1}`);
// }
// else if(num2 > num1 && num2 > num3){
//     console.log(`Largest number = ${num2}`);
// }
// else if(num3 > num1 && num3 > num2){
//     console.log(`Largest number = ${num3}`);
// }else{console.log(`Numbers are equal`);}

// // vowel and consonent program using logical operater
// let letter = prompt("Enter your letter: ")
// letter= letter.toLowerCase(); // let can be reassigned

// if(letter == "a" ||
// letter == "e" ||
// letter == "i" ||
// letter == "0" ||
// letter == "u"){
//     console.log("Vowel");
// }
// else{
//     console.log("Consonent");
// }

// Switch(accept a variable as a parameter) use 4 keyword(switch, case, break, default)
// const days1 = parseInt(prompt("Enter your number: "));
// //days = days.toLocaleLowerCase();
// switch(days1){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Teusday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Number");
// }
// // Swith code optimization
// const days = parseInt(prompt("Enter your number: "));
// //days = days.toLocaleLowerCase();
// switch(days){
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         console.log("Weekday");
//         break;
//     case 6:
//     case 7:
//         console.log("Weekend");
//         break;
//     default:
//         console.log("Invalid Number");
//         break;
// }

// Vowel and Consonent check
// const letter = prompt("Enter a number: ")
// let lowerCaseLetter = letter?.toLocaleLowerCase();

// switch (lowerCaseLetter) {
//     case "a":
//     case "e":
//     case "i":
//     case "0":
//     case "u":
//         console.log("Vowel");
//         break;

//     default:
//         console.log("Consonent");
//         break;
// }
// for(initialize, condition, check) check starting point and ending point and condition value
// let count = 0; 
// for(let count = 1; count <=5; count++){
//     console.log("Bangladesh" + count);
// }
// Program a sum value 1 + 2 + ...5 output = 15
// let sum = 0;
// for(let i = 1; i <=5; i++){
//     sum = sum + i;
// }
// console.log(`${sum}`); // Show result Output: 15
// console.log(`sum : ${sum}`); // Show result Output: sum : 15
// console.log(`sum = ${sum}`); // Show expected result Output: sum = 15

// Program a sum value 1 + 4 + 7 + 10 output = 22
// let sum1 = 0;
// for(let j = 1; j <=10; j = j+3){
//     sum1 = sum1 + j;
// }
// console.log(`Sum1 = ${sum1}`);
// Program find even numbers and sum them up 1 to 10 even number start from 2
// let sumEvenNumber = 0;
// for(let evenNumber = 2; evenNumber <= 10; evenNumber +2){
//     sumEvenNumber = sumEvenNumber + evenNumber;
// }
// console.log(`Sum of even numbers: ${sumEvenNumber}`);
//print even number 1 to 10 using loop with if condition
// let even = 0;
// for(let even = 1; even <=10; even++){
//     if(even % 2 === 0){
//         console.log(`Even numbers are = ${even}`);
//     }
// }
// Loop using for, while, do while loop
// console.log(`Print 1 to 10 using for loop`);
// for( let a = 1; a <= 10; a++){
//     console.log(a);
// }
// console.log(`\n\nPrint 1 to 5 using while loop`);
// let b = 1;
// while (b <= 10) {
//     console.log(`b`);
//     b++// while loop keep on looping until condition becone false
// }
// console.log(`\n\nPrint 1 to 5 using do while loop`);
// let c = 1;
// do{
//     console.log(`c = ${c}`);
//     c++
// }while(c <= 5);
// Hoisting in JS
// let greeting = "Hello World"; // variable declared before function scope
// function sayHello() {
//     //let greeting = "Hello World";
//     console.log(greeting);
// }
// sayHello();
// Break and Continue
// let number = 5;
// while (true) {
//     if(number == 100){
//         break;
//     }
//     number++
//     if(number % 2 ==! 0){
//         continue;
//     }
//     console.log(number);
// }
// // closureFn() are functions that have access from an outer function, 
// //even after the outer function has finished executing. 
// //They "remember" the environment in which they were created.
// function outer(params) {
//     let outerVar = ("Hello");
//     function inner(params) {
//         console.log(outerVar);
//     }
//     return inner;
// }
// let closureFn = outer();
// closureFn();

//Duplicate value Java Script: 
// const array = [1, 2, 3, 2, 4, 5, 4, 5]; 
// const duplicates = array.filter((item, index) => array.indexOf(item) !== index); 
// console.log(duplicates);

// Reverse string using split(), reverse() and join() methods
// let rev = "Hello World";
// const str = rev.split('').reverse().join('');
// console.log(str);

// // Reverse string using spread operator
// let str1 = "I love America"
// const str2 = [...str1].reverse().join('');
// console.log(str2);

// let fizzBuzz1 = function (n) { 
  
//     const arr = [] 
//     for (let i = 1; i <= n; i++) { 
//         if (i % 15 === 0) arr.push("FizzBuzz") 
//         else if (i % 3 === 0) arr.push("Fizz") 
//         else if (i % 5 === 0) arr.push("Buzz") 
//         else arr.push(i.toString()) 
//     } 
//     return arr 
  
// }; 
// console.log(fizzBuzz1(15))
// Output??
// let a = 10;
// let b = 11;
// console.log(a++); 10
// console.log(b++); 11
// console.log(a--); 11	
// console.log(b--); 12
// console.log(a);  10
// console.log(b);  11 
// console.log(++a); 11
// console.log(++b); 12

// const person = {
//     name: "Syed",
//     gender: "male",
//     age: 52
// }
// for (const key in person) {
//      {
//      console.log(person[key]);   
//     }
// }

// let a = 10;
// let b = 11;
// console.log(a++); 
// console.log(b++); 
// console.log(a--); 
// console.log(b--); 
// console.log(a);  
// console.log(b);  
// console.log(++a); 
// console.log(++b); 



     










