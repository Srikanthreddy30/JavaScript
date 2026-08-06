
// Task 1: Employee Login System

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

// --------------------------------------------------------------
// Task 2: E-Commerce Discount

let amount = Number(prompt("Enter Purchase Amount:")); 

if (amount >= 5000) {
    let discount = amount * 20 / 100;
    let finalAmount = amount - discount;

    console.log("Discount:", discount); 
    console.log("Final Amount:", finalAmount);
} else {
    console.log("No Discount");
    console.log("Final Amount:", amount);
} 


// Task 3: ATM Withdrawal
let balance = 10000;
let amount = Number(prompt("Enter Withdrawal Amount:"));

if(amount <= balance){
    balance = balance - amount;
    console.log("Transaction Success");
    console.log("Balance:", balance);
}else{
    console.log("Insufficient Balance");
}

// ------------------------------------------------------
// Task 4: Student Grade System

let mark = Number(prompt("Enter Marks:"));

if(mark >= 90){
    console.log("Grade A");
}
else if(mark >=80){
    console.log("Grade B");
}
else if(mark >=70){
    console.log("Grade C");
}
else{
    console.log("Fail");
}

// Output = Grade B

// ----------------------------------------------------------

// Task 5: Traffic Signal
let signal = prompt("Enter Traffic Signal Color (red/yellow/green):").toLowerCase();

switch(signal){

case "red":
console.log("Stop");
break;

case "yellow":
console.log("Ready");
break;

case "green":
console.log("Go");
break;

default:
console.log("Invalid");
}

output = Go

// --------------------------------------------------------

// Task 6: Online Shopping Delivery Charge

let orderAmount = Number(prompt("Enter Order Amount:"));
if(orderAmount >= 1000){
    console.log("Delivery : Free");
    console.log("Total :", orderAmount);
} else {
    console.log("Delivery : 80");
    console.log("Total :", orderAmount + 80);
}

// // ----------------------------------------------------------
// Task 7: User Age Verification
let age = Number(prompt("Enter Your Age:"));
if(age < 18){
    console.log("Not Eligible");
}
else{
    console.log("Eligible");
}

// ---------------------------------
// Task 8: Find Largest Number
let a = Number(prompt("Enter First Number:"));
let b = Number(prompt("Enter Second Number:"));
let c = Number(prompt("Enter Third Number:"));

if(a > b && a > c){
    console.log("Largest Number:", a);
} else if(b > c){
    console.log("Largest Number:", b);
} else {
    console.log("Largest Number:", c);
}

// --------------------------------------
// Task 9: Mobile Password
let pin = prompt("Enter 4-digit PIN:");

if(pin.length === 4){
    console.log("Valid PIN");
} else {
    console.log("Invalid PIN");
}

// -----------------------------------------
// Task 10: Product Stock
let stock = Number(prompt("Enter Product Stock:"));

if(stock === 0){
    console.log("Out of Stock");
} else {
    console.log("Available");
}


// -----------------------------------
// // Task 11: Employee Salary Bonus
let salary = Number(prompt("Enter Salary:"));

if(salary > 50000){
    console.log("Bonus: 10000");
} else if(salary > 30000){
    console.log("Bonus: 5000");
} else {
    console.log("Bonus: 2000");
}

// -----------------------------------------

// Task 12: Electricity Bill
let units = Number(prompt("Enter Units Consumed:"));
if (units <= 100){
    console.log("Total Bill: ₹" + (units * 2));
} else if (units <= 200){
    console.log("Total Bill: ₹" + (units * 4));
} else {
    console.log("Total Bill: ₹" + (units * 6));
}

// -----------------------------------------

// Task 13: Movie Ticket Booking
let age = Number(prompt("Enter Age:"));
if(age < 5){
    console.log("Free");
} else if(age <= 18){
    console.log("Ticket Price: ₹100");
} else {
    console.log("Ticket Price: ₹200");
}

// --------------------------------

// Task 14: Hospital Token System
let token = prompt("Enter Token Type (emergency/senior citizen/priority/normal):").toLowerCase();
switch(token){
    case "emergency":
        console.log("Token Type: Emergency");
        break;
    case "senior citizen":
        console.log("Token Type: Senior Citizen");
        break;
    case "priority":
        console.log("Token Type: Priority");
        break;
    default:
        console.log("Token Type: Normal");
}
// ------------------------------------------------

// Task 15: Company Attendance
let attendance = prompt("Enter Attendance Status (present/working/leave/leave approved/absent/salary deduction):").toLowerCase();
switch(attendance){
    case "present": 
        console.log("Attendance Status: Present");
        break;
    case "working":
        console.log("Attendance Status: Working");
        break;
    case "leave":
        console.log("Attendance Status: Leave");
        break;
    case "leave approved":
        console.log("Attendance Status: Leave Approved");
        break;
    case "absent":
        console.log("Attendance Status: Absent");
        break;
    case "salary deduction":
        console.log("Attendance Status: Salary Deduction");
        break;
    default:
        console.log("Invalid Attendance Status");
}
// ----------------------------------------------------------

// Task 16: Grocery Cart Total
let rice = 500;
let sugar = 300;
let oil = 250;

let total = rice + sugar + oil;
console.log(total);
if (total > 1000) {
    let discount = total * 10 / 100;
    let finalAmount = total - discount;
    console.log("Discount:", discount);
    console.log("Final Amount:", finalAmount);
}

// -----------------------------

// Task 17: Array Task
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Print"];

for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + " " + products[i]);
}

// ---------------------------------------------------------------

// // Task 18: Employee Database
let employee = {
    name: "Rahul",
    role: "Developer",
    salary: 50000
};
for (let key in employee) {
    console.log(employee[key]);
}

// --------------------------------------------------------
// Task 19: Type Casting

let strNum = "100";
let strBool = "true";
let num = 200;
let convertedNum = Number(strNum);
let convertedBool = Boolean(strBool);
let convertedStr = String(num);
console.log(convertedNum); // 100
console.log(convertedBool); // true
console.log(convertedStr); // "200"

// ---------------------------------------------------------------------

// Task 20: Banking Menu

let choice = Number(prompt("Enter your choice: 1. Deposit 2. Withdraw 3. Balance 4. Exit"));
switch(choice){
    case 1:
        console.log("Deposit");
        break;
    case 2:
        console.log("Withdraw");
        break;
    case 3:
        console.log("Balance");
        break;
    case 4:
        console.log("Exit");
        break;
    default:
        console.log("Invalid Choice");
} 

// -------------------------------------------------------------------------------

// Mini Project (Interview Level)
let employees = [
    {
        name: "Ram",
        role: "Software Engineer",
        salary: 60000,
        attendance: 20
    },
    {
        name: "Laxman",
        role: "Project Manager",
        salary: 80000,
        attendance: 22
    }
];
let choice = Number(prompt(` 
========= Employee Management System=========
1. Add Employee
2. Show Employee Details
3. Calculate Bonus
4. Check Attendance
5. Print Salary
6. Exit
Enter your choice:`));

switch (choice) {

// Add Employee
    case 1:
        let name = prompt("Enter Employee Name:");
        let role = prompt("Enter Employee Role:");
        let salary = Number(prompt("Enter Salary:"));
        let attendance = prompt("Enter Attendance (Present/Leave/Absent):");

        employees.push({ name: name, role: role, salary: salary, attendance: attendance });

        console.log("Employee Added Successfully!");
        console.log("Employee List:");

        for (let emp of employees) {
            console.log(emp);
        }
        break;

// Show Employee Details
    case 2:
        console.log("Employee Details");
        for (let emp of employees) {
            console.log("----------------------------");
            for (let key in emp) {
                console.log(`${key} : ${emp[key]}`);
            }
        }
        break;

// Calculate Bonus
    case 3:
        console.log("Employee Bonus");
        for (let emp of employees) {

            let bonus = 0;

            if (emp.salary > 50000) {
                bonus = 10000;
            }
            else if (emp.salary > 30000) {
                bonus = 5000;
            }
            else {
                bonus = 2000;
            }
            console.log(`${emp.name} -> Bonus : ₹${bonus}`);
        }
        break;

// Check Attendance
    case 4:
        console.log("Attendance Report");
        for (let emp of employees) {
            if (emp.attendance === "Present") {
                console.log(`${emp.name} : Working`);
            }
            else if (emp.attendance === "Leave") {
                console.log(`${emp.name} : Leave Approved`);
            }
            else {
                console.log(`${emp.name} : Salary Deduction`);
            }
        }
        break;

// Print Salary
    case 5:
        console.log("Salary Details");
        for (let emp of employees) {
            console.log(`${emp.name} (${emp.role}) : ₹${emp.salary}`);
        }
        break;

// Exit
    case 6:
        console.log("Thank You! Visit Again.");
        break;
    default:
        console.log("Invalid Choice");
}

