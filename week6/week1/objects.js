const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};
//Read and print the user’s name and email
console.log("name:",user.name);
console.log("email:",user.email);

//Add a new property lastLogin: "2026-01-01"
user.last_loGin = "2026-01-01";
//Update role from "student" to "admin"
user.role = "admin";
//Delete the isActive property
delete user.isActive;
//Use Object.keys() to list all remaining fields 
console.log(Object.keys(user));

//Scenario : Marks are stored subject-wise for a student.

//Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let total = 0;
let hi = 0;
let highestMarks;


for(let i in marks){
    total+=marks[i];
    if(marks[i]>hi){
        hi = marks[i];
        highestMarks = i;
    }
}
//Calculate total marks
console.log("Total Marks:",total);
//Calculate average marks
console.log("Average Marks:",total/4);
//Find the highest scoring subject
console.log("hiGhest scorinG subject:",highestMarks);
//Add a new subject computer: 90 */
marks.computer = 90;


//Assignment 3: Application Settings Controller

//Scenario : A web app stores user preferences as settings.

//Test data:
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};


//Tasks :
   // 1.Toggle theme between "light" and "dark"
  settings.theme = settings.theme === "light" ? "dark" : "light";
   // 2. Turn autoSave to true
  settings.autoSave = true;
   // 3. Remove the notifications setting
  delete settings.notifications;
   // 4. Freeze the settings object so it cannot be modified
  Object.freeze(settings);