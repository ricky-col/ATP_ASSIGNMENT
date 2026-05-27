## Javascript
to print in cosolve we use console.log() in javascript.

## Data Types in Javascript
--> Primitive Data Types:
A. Numeric 
1. Number
2. BigInt
B. Non Numeric
1. String
2. Boolean
3. Undefined
4. Null

--> Non Primitive Data Types:
1. Object
2. Array
3. Function

## Everything is an Object in Javascript

## static or primitive data types are stored in stack memory
## non primitive or reference data types are stored in heap memory

## one reference is stored in stack memory which points to the actual object stored in heap memory

## c,c++,java are statically typed languages
## javascript is dynamically typed language

# functions in javascript
* java contains only methods as everhything is inside class
* javascript contains functions as well as methods
* c contains functions only
* c++ contains functions and methods both


# operators in javascript
 important is = == and = = =



# conditional statements and control statements in javascript are same as c,c++,java


## collections of Data

* Array --> 
    * ordered collection of data
    * indexed collection of data
    * we can store heterogeneous data in array in javascript but preferably we should store homogeneous data
    * index starts from 0 but why ? --> because its easier to calculate the offset from
      the base address. --> offset = index *  size of each element

* Object -->
    * unordered collection of data
    * key-value pair collection of data
    * we can store heterogeneous data in object
    * key should be unique and value can be duplicate
    * key is always string data type but value can be of any data type
    * each key value pair is called property of object.



- exceptions can be handled but errors cannot be handled.







# array operations in javascript
* push() --> adds an element at the end of the array
* pop() --> removes an element from the end of the array
* unshift() --> adds an element at the beginning of the array
* shift() --> removes an element from the beginning of the array
* splice() --> adds/removes elements from the array at a specific index
* slice() --> returns a new array by extracting a portion of the array

### how to use splice() method
```javascript
let arr = [1, 2, 3, 4, 5];
// to add elements
arr.splice(2, 0, 6, 7); // at index 2, remove 0 elements, add 6 and 7
console.log(arr); // [1, 2, 6, 7, 3, 4, 5]
// to remove elements
arr.splice(2, 2); // at index 2, remove 2 elements
console.log(arr); // [1, 2, 3, 4, 5]
```




## object operations

* first understand mulatable and immutable
    * ## immutable
    * let a = 10; // immutable as when we update the value of a a new memory is allocated and the variable a points to the new memory location
    * so we have a point that all primitive data types are immutable in javascript. which means they cannot be modified once they are created.
    * code example:
        ```javascript
        let a = 10;
        a = a + 1;
        a = a * 10;
        // first a points to memory location of 10
        // then a points to memory location of 11
        // then a points to memory location of 110
        console.log(a); // 110
        ```
    
    * ## mutable
    * All reference data types are mutable in javascript.
    * 


## packing of objects in javascript
* Destructuring of objects in javascript
* example code:
```javascript
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
// here the variable names should be same as the key names in the object
// otherwise it will give undefined

let {name, age, city} = person;
console.log(name); // John
console.log(age); // 30
console.log(city); // New York

// if we want only name and city
let {name, city} = person;
console.log(name); // John
console.log(city); // New York
```


## Callback function in javascript
* A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
* example code:
```javascript
function test1(a){
    console.log(a); // this will give anonymous function
    console.log(a()); // this will execute the anonymous function and give 123

}
test1(function(){
    return 123;
});
```

# name of func,how many params,what does it return
* this is very important for understanding any function

* So please read the docs carefully and understand the function before using it.
