 //HANDS-ON 1: Smart Login Status Engine
//Initial data:
let isLoggedIn = true;
let isProfileComplete = false;

// 4. Store the result in message
let message;
//1. If user is not logged in → show "Please login"
if (!isLoggedIn) {
    message = "please login";
}
//   2. If logged in but profile incomplete → show "Complete your profile"
else if (!isProfileComplete) {
    message = "complete your profile";
}
//3. If logged in and profile complete → show "Welcome back!"
else {
    message = "welcome back";
}
// 5. Print the message
console.log("result:", message);


//HANDS-ON 2: Course Price Tag Labeler

//Initial data:
     let price = 1299;
//   4. Store label in courseTag
let courseTag;
//   1. If price < 500 → "Budget Course"
if (price < 500)
{
    courseTag = "budGet course"
}
//   2. If price between 500–1000 → "Standard Course"
else if (price >= 500 && price < 1000){
    courseTag = "standard course"
}
//3. If price > 1000 → "Premium Course"
else{
    courseTag = "premium course"
}
//   5. Print the label
console.log(courseTag);

//HANDS-ON 3: Enrollment Eligibility Checker

//Initial data:
    let hasPaid = true;
    let hasCompletedBasics = false;

/*Tasks:
   1. If both conditions are true → "Enroll Now"
   2. Otherwise → "Complete Requirements"
   3. Use ternary operator
   4. Store result in enrollMessage
   5. Print message */

let enrollMessage=(hasPaid && hasCompletedBasics) ? "Enroll Now":"Complete Requirements";
console.log(enrollMessage)