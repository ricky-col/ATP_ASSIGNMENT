# we will discuss modules classes and async javaScript in this part 

## classes in javaScript
- JS is a Object Oriented Programming language and it supports the concept of classes
- JS also supports functional programming
- this is the reason why classes are not that popular in JS
- A class is a blueprint for creating objects with predefined properties and methods
- in react js 16.8 version something called hooks were introduced which allows us to use state and other features without writing a class
- if we want to move to typescript then we have to learn classes because typescript is more inclined towards OOP concepts but in that also it's not mandatory to use classes as we can use interfaces and types to define the structure of our data

### 3 difference between function and method
- a function can be called independently but a method is called on an object
- a function is defined using the function keyword or arrow function syntax but a method is defined within a class or object
- a function does not have access to the this keyword but a method can access the this keyword


## we can initialize static properties in 3 ways in a class
 *1 outside the constructor using the static keyword
 *2 inside the static block
 *3 inside the static method

### the question is why static block is executed before the constructor
- static block is executed when the class is loaded into memory, before any instances of the class are created because static properties and methods belong to the class itself, not to any specific instance of the class



## Modules in javaScript
- Modules are reusable pieces of code that can be imported and exported between different files

### default export vs named export
- default export allows you to export data from a module which can be imported without same name as well as any name
- named export allows you to export multiple values from a module which must be imported using the same name inside curly braces

### Optional chaining with modules and nullish coalescing operator
- Optional chaining (?.) allows you to safely access nested properties of an object without having to check if each property in the chain exists
- Nullish coalescing operator (??) allows you to provide a default value when dealing with null or undefined values
* example
```js
let student = {
    rollNo:1,
    name:"ravi",
}

console.log(student.rollNo) // 1;
console.log(student.name) // ravi
console.log(student.city) // undefined
// console.log(student.city.length) // undefined.length --> error
// we will solve this with the help of optional chaining 
// console.log(student.city?.length) // just question mark is added 
// the above one works 
console.log(student.city?.length ?? "property is not existed") // nullish coalescing operator is used here 
```

## Working with Dates and Times in JavaScript
- JavaScript provides the Date object to work with dates and times
- we can create a new Date object using the Date() constructor
- we can use various methods of the Date object to get and set different parts of a date

* Date will be in the UTC format by default
- YYYY-MM-DDTHH:mm:ss.sssZ
- here first 4 are year , next 2 are month , next 2 are date , T is just a separator which is for time , next 2 are hours , next 2 are minutes , next 2 are seconds , next 3 are milliseconds and Z is the timezone (Z means UTC timezone ,zulu)
- this is the ISO format for date and time representation
- internally in memory date is stored in timestamp format
- so timestamp is the reality and ISO format is just a representation of that timestamp
* Get Date Components
- getFullYear(): Returns the year (4 digits)
- getMonth(): Returns the month (0-11)
- getDate(): Returns the day of the month (1-31)
- getHours(): Returns the hour (0-23)
- getMinutes(): Returns the minutes (0-59)
- getSeconds(): Returns the seconds (0-59)
- getMilliseconds(): Returns the milliseconds (0-999)
- getTime(): Returns the timestamp (milliseconds since January 1, 1970)

* Set Date Components
- setFullYear(year): Sets the year (4 digits)
- setMonth(month): Sets the month (0-11)
- setDate(day): Sets the day of the month (1-31)
- No setter for getDay() as day of week is derived from the date
- setHours(hours): Sets the hour (0-23)
- setMinutes(minutes): Sets the minutes (0-59)
- setSeconds(seconds): Sets the seconds (0-59)
- setMilliseconds(milliseconds): Sets the milliseconds (0-999)
- setTime(timestamp): Sets the timestamp (milliseconds since January 1, 1970)

## Copy of primitives and reference types
- Primitives are copied by value
- Reference types are copied by reference
- creating a copy of a reference type creates a new reference to the same object in memory
- this is not useful if we create a copy of reference type directly with = operator
- we can create a copy of object using spread operator only if the object has primitive values only if it has nested objects then spread operator will not work
- in this case we can use structural cloning using structuredClone() method
### Shallow Copy vs Deep Copy
- Shallow Copy: A shallow copy creates a new object that is a copy of the original object, but only copies the top-level properties. If the original object has nested objects, the shallow copy will still reference those nested objects.
- Deep Copy: A deep copy creates a new object that is a copy of the original object, including all nested objects. This means that changes made to the nested objects in the deep copy will not affect the original object.

## Error and Error Handling in JavaScript
- JavaScript provides a built-in Error object to represent errors that occur during program execution
- we can create custom error types by extending the built-in Error class
- we can handle errors using try...catch blocks
