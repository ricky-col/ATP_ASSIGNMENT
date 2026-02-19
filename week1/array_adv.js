//ASSIGNMENT 1:

//You are building a shopping cart summary for an e-commerce website.

//Test Data :
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];



//Use filter() to get only inStock products

let instock = cart.filter(element => element.inStock===true);
console.log(instock);

//Use map() to create a new array with:  { name, totalPrice }

let totalprice = cart.map(element => ({ name: element.name, totalPrice: element.price * element.quantity }));
console.log(totalprice);

//Use reduce() to calculate grand total cart value

let andtotal = cart.reduce((acc,element) => acc + (element.price))
console.log(andtotal);

//Use find() to get details of "Mouse"

let findd = cart.find(element => element.name === "Mouse");
console.log(findd);

//Use findIndex() to find the position of "Keyboard" */

let finddd = cart.findIndex(element => element.name ==="Keyboard");
console.log(finddd);



// ASSIGNMENT 2:
// Student Performance Dashboard

// Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed (marks ≥ 40)
let passedStudents = students.filter(element => element.marks >= 40);
console.log("Passed Students:", passedStudents);

/* 2. map() to add a grade field
      ≥90 → A
      ≥75 → B
      ≥60 → C
      else → D
*/
let result = students.map((element) => {
  if (element.marks >= 90) return { ...element, grade: 'A' };
  else if (element.marks >= 75) return { ...element, grade: 'B' };
  else if (element.marks >= 60) return { ...element, grade: 'C' };
  else return { ...element, grade: 'D' };
});
console.log("Students with Grades:", result);

// 3. reduce() to calculate average marks
let averageMarks = students.reduce((sum, student) => {
  return sum + student.marks;
}, 0) / students.length;

console.log("Average Marks:", averageMarks);

// 4. find() the student who scored 92
let student92 = students.find(student => student.marks === 92);
console.log("Student who scored 92:", student92);

// 5. findIndex() of student "Kiran"
let kiranIndex = students.findIndex(student => student.name === "Kiran");
console.log("Index of Kiran:", kiranIndex);


// ASSIGNMENT 3:
// Employee Payroll Processor

// Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT department
let res1 = employees.filter(emp => emp.department === "IT");
console.log("IT Employees:", res1);

// 2. map() to add netSalary (salary + 10% bonus)
let res2 = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + emp.salary * 0.10
}));
console.log("Employees with Net Salary:", res2);

// 3. reduce() to calculate total salary payout
let res3 = employees.reduce((total, emp) => {
  return total + emp.salary;
}, 0);
console.log("Total Salary Payout:", res3);

// 4. find() employee with salary 30000
let res4 = employees.find(emp => emp.salary === 30000);
console.log("Employee with salary 30000:", res4);

// 5. findIndex() of employee "Neha"
let res5 = employees.findIndex(emp => emp.name === "Neha");
console.log("Index of Neha:", res5);




//ASSIGNMENT 4:

//Movie Streaming Platform

//You are working on a movie recommendation system.

//Test data:
/*Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"*/

// Hands-on 4

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() only "Sci-Fi" movies

const sciFiMovies = movies.filter(ele=> ele.genre === "Sci-Fi");
console.log(sciFiMovies);

// 2. map() to return:
  //          "Inception (8.8)"
const formattedMovie = movies.filter(ele => ele.title === "Inception").map(ele => `${ele.title} (${ele.rating})`);

console.log(formattedMovie);

//    3. reduce() to find average movie rating
const averageRating = movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length;
console.log(averageRating);

//  4. find() movie "Joker"
const jokerMovie = movies.find(movie => movie.title === "Joker");
console.log(jokerMovie);

//    5. findIndex() of "Avengers"*/
const avengersIndex = movies.findIndex(movie => movie.title === "Avengers");
console.log(avengersIndex);


//ASSIGNMENT 5: 

//Bank Transaction Analyzer

//You are building a bank statement summary.

//Test data:

/*Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000 */

// Hands-on 5
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
//    1. filter() all credit transactions
const creditTransactions = transactions.filter(t => t.type === "credit");
console.log(creditTransactions);

//    2. map() to extract only transaction amounts
const amounts = transactions.map(t => t.amount);
console.log(amounts);

//  3. reduce() to calculate final account balance
const finalBalance = transactions.reduce((balance, t) => {
  return t.type === "credit" ? balance + t.amount : balance - t.amount;
}, 0);

console.log(finalBalance);

//    4. find() the first debit transaction
const firstDebit = transactions.find(t => t.type === "debit");
console.log(firstDebit);

//    5. findIndex() of transaction with amount 10000 */
const index = transactions.findIndex(t => t.amount === 10000);
console.log(index);




