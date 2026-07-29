// Task 1 – Student Registration

// Input
// let studentName = "Rahul";
// let department = "CSE";
// let cgpa = 8.6;
// Output
// Student Name : Rahul
// Department : CSE
// CGPA : 8.6
// Status : Eligible
// Concepts
// Variables
// Ternary Operator
// console.log()


let studentName = prompt("Enter the student name");
let department = prompt("Enter the deparment name ");
let cpgpa = prompt("Enter the CGPA");

let status = (cpgpa>7.0) ? "Eligiable" :"Not Eligible" ;

console.log ("Student Name:" +studentName);
console.log ("Department:" + department);
console.log ("CGPA:" + cpgpa);
console.log ("Status:" +status);

// -------------------------------------------------------------------------

// Task 2 – Online Shopping Bill
// Input
// let productPrice = 2500;
// let quantity = 3;
// Calculate
// Total Amount
// If total > 5000 give 10% discount.
// Output
// Total : 7500
// Discount : 750
// Final Price : 6750
// Concepts
// Arithmetic
// if / ternary

let productPrice = prompt("Enter the product price");
let quantity = prompt("Enter the Quantity");
let totalPrice = productPrice * quantity;
let discountPrice=0;

if (totalPrice >5000){
    discountPrice = totalPrice* 0.10;
}
else{
     totalPrice;
}
let finalPrice = totalPrice - discountPrice;

console.log("Total:", totalPrice);
console.log("Discount:", discountPrice);
console.log("Final Price:", finalPrice);


// ...................................................................................

// Task 3 – Employee Salary
// let basicSalary = 35000;
// let bonus = 5000;
// let tax = 3000;
// Output
// Basic Salary : 35000
// Bonus : 5000
// Tax : 3000
// Net Salary : 37000

let basicSalary = 35000;
let bonus = 5000;
let tax = 3000;
let netSalary = basicSalary + bonus - tax;

console.log("Basic Salary:", basicSalary)
console.log("Bonus:", bonus)
console.log("Tax:",tax)
console.log("Net Salary:", netSalary)


// .....................................................................................

// Task 4 – Movie Ticket Booking
// let movie = "Leo";
// let ticketPrice = 180;
// let tickets = 5;
// Display
// Movie : Leo
// Tickets : 5
// Total : 900

let movie = "Leo";
let ticketPrice = 180;
let tickets = 5;
let total= ticketPrice * tickets;

console.log("Movie:",movie)
console.log("Tickets:",tickets)
console.log("Total:",total)

 


// ...................................................................................
// Task 5 – Login System
// let username = "admin";
// let password = "12345";
// Check login.
// Output
// Login Success
// Else
// Invalid Username or Password

let username = prompt("Enter the User Name")
let password = prompt("Enter the password")
let obj = {

    name :"Srikanth",
    pass : "12345",
}
if (username === obj.name && password === obj.pass){
    console.log(" Login Success")

}
else{
    console.log("Invalid Username or Password")
}


// ........................................................................................
// Task 6 – Electricity Bill
// Units = 250

// Rate

// 0-100 = ₹5

// 101-200 = ₹7

// Above 200 = ₹10
// Calculate total bill.

let units = prompt("Enter the number of Units");
let totalBill= 0;
let rate=0;

    if (units <= 100){
    console.log("0-100 units => ₹5/unit")
    totalBill = units * 5;
    }
    else if(units <=200){
        console.log ("101-200 units =  ₹7/unit")
          totalBill = units * 7;
    }
    else {
        console.log("Above 200 units => ₹10/unit")
        totalBill = units * 10;
    }

    console.log("Units:", units)
    console.log ("Total Bill:", totalBill)



// ..................................................................................
// Task 7 – Restaurant Order
// let menu = ["Dosa","Idly","Poori","Meals"];
// Print
// First Item
// Last Item
// Total Items
// Then
// Add "Fried Rice"
// Remove "Idly"
// Display updated menu.

let menu = ["Dosa","Idly","Poori","Meals"];
console.log ("Menu:", menu);
console.log("First Item:", menu[0]);
console.log("Last Item:", menu[menu.length-1]);
console.log("Total Items:",menu.length);

menu.push ("Fried Rice");
menu.splice (1,1);
console.log(menu);

// ..................................................................................
// Task 8 – Employee Object
// let employee = {
//     name:"Ravi",
//     role:"Frontend Developer",
//     salary:40000
// }
// Print all values.
// Expected
// Employee Name :
// Role :
// Salary :

    let employee = {
        name:"Ravi",
        role:"Frontend Developer",
        salary:40000
    }

    console.log("Employee Name:",employee.name)
    console.log("Role:",employee.role)
    console.log("Salary :",employee.salary)



// ......................................................................................
// Task 9 – Product Inventory
// let products = [
// "Mouse",
// "Keyboard",
// "Monitor",
// "CPU",
// "Speaker"
// ];
// Print using loop
// 1 Mouse
// 2 Keyboard
// 3 Monitor
// ...

    let products = ["Mouse","Keyboard","Monitor","CPU","Speaker"];
    for(i=0; i < products.length -2; i++){
        console.log (`${i+1} ${products[i]}`);
     
    }



// .............................................................................
// Task 10 – Function
// Create
// calculateArea(length,width)
// Output
// Area = 200



  function calculateArea(length, width) {
    return length * width;
}
console.log("Area =", calculateArea(20, 10));


// ......................................................
// Task 11 – Bank Deposit
// Create function
// deposit(amount)
// withdraw(amount)
// Current Balance
// 5000
// Deposit
// 2000
// Withdraw
// 1000
// Final
// 6000

    let balance= 5000;
    function deposite (amount){
        balance+= amount;
    }
    function withdraw (amount){
        balance-= amount;
    }
    deposite(2000);
    withdraw(1000)
    console.log("Final Amount:", balance)



// ................................................
// Task 12 – Callback Function
//  Create
// calculate(addition,10,20)
// Expected
// 30
// Then callback prints
// Calculation Completed

    function addition(a, b) {
    return a + b;
}

function calculate(callback, a, b) {
    console.log(callback(a, b));
    
}
calculate(addition, 10, 20);
console.log("Calculation Completed");

// .......................................................................

// Task 13 – Generator Function
// Create generator for coupon codes.
// Output
// WELCOME10
// SAVE20
// SUPER30
// BIG50
// MEGA100
// Print one by one using
// next()

function* couponGenerator() {
    yield "WELCOME10";
    yield "SAVE20";
    yield "SUPER30";
    yield "BIG50";
    yield "MEGA100";
}

let coupon = couponGenerator();

console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);
console.log(coupon.next().value);


// ....................................................................................
// Task 14 – Currying
// Create
// discount(10)(20)(30)
// Output
// 60
     
    function calculateDiscount(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(calculateDiscount(10)(20)(30));



// .............................................................
// Task 15 – Spread Operator
// let frontend = ["HTML","CSS","JS"];
// let backend = ["Node","Express","MongoDB"];
// Merge them.
// Output
// ["HTML","CSS","JS","Node","Express","MongoDB"]


    let frontend = ["HTML", "CSS", "JS"];
    let backend = ["Node", "Express", "MongoDB"];

    let fullStack = [...frontend, ...backend];

    console.log(fullStack);



// ..........................................................................
// Task 16 – Rest Operator
// Create
// sum(...numbers)
// Input
// 10,20,30,40,50
// Output
// 150

    function sum(...numbers) {
    let total = 0;

    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(10, 20, 30, 40, 50));


// ......................................................................
// Task 17 – Array Destructuring
// let colors = ["Red","Blue","Green","Yellow"];
// Print
// Red
// Blue
// Green
// Yellow
// using destructuring only.

    let colors = ["Red", "Blue", "Green", "Yellow"];

    let [c1, c2, c3, c4] = colors;

    console.log(c1);
    console.log(c2);
    console.log(c3);
    console.log(c4);



// ...................................................................
// Task 18 – Object Destructuring
// let user = {
// name:"Navi",
// city:"Salem",
// role:"Developer"
// }
// Print
// Navi
// Salem
// Developer

    let user = {
    name: "Maneesha",
    city: "Hyderabad",
    role: "Developer"
    };

    let { name, city, role } = user;

    console.log(name);
    console.log(city);
    console.log(role);





// ....................................................
// Task 19 – Shopping Cart
// let cart = ["Mobile","Laptop","Watch"];
// Perform
// push()
// pop()
// shift()
// unshift()
// Print after every operation.

let cart = ["Mobile", "Laptop", "Watch"];

console.log("Original :", cart);

cart.push("Headphones");
console.log("After Push :", cart);

cart.pop();
console.log("After Pop :", cart);

cart.shift();
console.log("After Shift :", cart);

cart.unshift("Tablet");
console.log("After Unshift :", cart);




// ....................................................
// Task 20 – Product Search
// let products = [
// "Laptop",
// "Mouse",
// "Keyboard",
// "Monitor",
// "Speaker"
// ];
// Check
// Monitor
// using
// includes()
// Expected
// Product Available
// Else
// Out of Stock

    let productsList = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Speaker"
];

if (productsList.includes("Monitor")) {
    console.log("Product Available");
} else {
    console.log("Out of Stock");
}