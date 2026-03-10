//Assignment 1: Daily Temperature Analyzer
//Scenario : You are analyzing daily temperatures recorded by a weather app.

//Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];


//    1. filter() temperatures above 35
let temp = temperatures.filter(element => element>35);
console.log("Temperatures above 35:",temp);

//    2. map() to convert all temperatures from Celsius → Fahrenheit
let fah = temperatures.map(element => element + 32);
console.log("Temperatures in Fahrenheit:",fah);

//    3. reduce() to calculate average temperature
let avG = temperatures.reduce((Acc,element) => Acc + element)/5;
console.log("Average Temperature:",avG);

//    4. find() first temperature above 40
let findd = temperatures.find(element => element > 40);
console.log("temeprature eater than 40",findd);

//    5. findIndex() of temperature 28 */
let fin = temperatures.findIndex(element => element ===28);
console.log("index of 28 temperature:",fin); 

//Assignment 2: Online Course Name Processor

//Scenario : You are preparing a course list for display on a website.

//Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];

//    1. filter() courses with name length > 5
let course = courses.filter(element => element.length > 5)
console.log(course);

//2. map() to convert course names to uppercase
let co = courses.map(element => element.toUpperCase())
console.log(co);

//3. reduce() to generate a single string:
//            "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let c =  co.reduce((acc,element) => acc + "|" + element);
console.log(c);

//    4. find() the course "react"
let finddd = courses.find(element => element === 'react');
console.log(finddd);

//    5. findIndex() of "node"*/
let f = courses.findIndex(element => element==="node")
console.log(f);

//Assignment 3: Student Marks List
//Scenario : You receive marks from an exam system.

//Test data:
const marks = [78, 92, 35, 88, 40, 67];
//    1. filter() marks ≥ 40 (pass marks)
let pass = marks.filter(element => element>=40);
console.log("pass:",pass.length);

//    2. map() to add 5 grace marks to each student
let ace = marks.map(element => element + 5);
console.log("ace:",ace);

//   3. reduce() to find highest mark
let hi= marks.reduce((acc,element)=> acc > element?acc:element);
console.log("",hi);

//    4. find() first mark below 40
let fdd = marks.find(element => element < 40);
console.log("",fdd);

// 5. findIndex() of mark 92  */
let findddi = marks.findIndex(element => element===92);
console.log("",findddi);