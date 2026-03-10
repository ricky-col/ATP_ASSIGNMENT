/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss
*/
let date1 = new Date();


// Year
let year = date1.getFullYear();
const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
let month = months[date1.getMonth()];
let date = date1.getDate();
const days = [
  "Sunday","Monday","Tuesday","Wednesday",
  "Thursday","Friday","Saturday"
];
let day = days[date1.getDay()];

let hours = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", day);
console.log("Time:", hours, minutes, seconds);

// 3. Display the date in this format: DD-MM-YYYY HH:mm:ss
console.log(date1.getDate()+"-"+date1.getMonth()+"-"+date1.getDate()+" "+date1.getHours()+":"+date1.getMinutes()+":"+date1.getSeconds());


/*
Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid
*/


let enrollmentDeadline = new Date("2026-01-20");
let enrollmentDate = new Date("2026-01-21")
let res = enrollmentDate < enrollmentDeadline ? "Enrollment Open" : "Enrollment Closed";
console.log(res);
let input = new Date("2026-11-10");
m = input.getMonth()+1;
d = input.getDate();
if(m == 2){
    if(0 < d > 29){
        console.log("valid");
    }
}
if(m % 2 === 0){
    if(0 < d <= 30){
        console.log("valid");}
    else{console.log("invalid")};}
else{
    if(0 < d <= 31)
    {
        console.log("valid");
    }
    else{console.log("invalid");}
    }


//console.log(msG);



/*
Assignment 3: Age Calculator (Intermediate)
-------------------------------------------
Input:
    let dob = "2000-05-15";


Tasks:
        1. Calculate exact age in years*/

let dob="2000-05-15";
let dobSplit=dob.split("-");
let dobYear=parseInt(dobSplit[0]);
let dobMonth=parseInt(dobSplit[1]);
let dobDate=parseInt(dobSplit[2]);
let Obj=new Date(dobYear,dobMonth-1,dobDate);
let currentDate=new Date();
let ageYears=currentDate.getFullYear()-Obj.getFullYear();
let ageMonths=currentDate.getMonth()-Obj.getMonth();
let ageDays=currentDate.getDate()-Obj.getDate();
if(ageMonths<0 || (ageMonths===0 && ageDays<0)){
    ageYears--;
}
console.log("Exact Age is :",ageYears,"years");