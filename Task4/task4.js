// Task 1: Student Registration Form
let studentName = prompt("Enter student Name");
let age = prompt("Emter age");
let department = prompt("Enter department");
let cgpa = prompt("Enter cgpa");

console.log ("Student Name:", studentName ) ;
console.log ("Age:", age ) ;
console.log ("Department:", department ) ;
console.log ("CGPA:", cgpa ) ;

{/*output
   Student Name: Srikanth
   Age: 27
   Department: ECE
   CGPA: 9.0 */}



// Task 2: Employee Details
let employee = {
    employeeId: 2,
    employeeName: "Srikanth",
    department: "Software Developer",
    salary: 35000
};

console.log("Employee Name:", employee.employeeName);
console.log("Salary:", employee.salary);

{/*output 
   Employee Name: Srikanth
   Salary: 35000 */}



// Task 3: Shopping Cart
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headset"]

console.log("------ Shopping Cart ------");
console.log("First Product:", products[0]);
console.log("Last Product:", products[products.length - 1]);
console.log("Total Number of Products:", products.length);

{/* output
    ----- Shopping Cart ------
   First Product: Laptop
   Last Product: Headset
   Total Number of Products: 5*/}



// Task 4: Student Marks
let english = 85;
let maths = 90;
let science = 88;
let social = 80;
let computer = 95;

let total = english + maths + social + science + computer;
let average = total / 5;

console.log("Total Marks:", total);
console.log("Average Marks:", average);

{/* output
    Total Marks: 438
    Average Marks: 87.6 */}



// Task 5: Age Checker
let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible");
}

{/* output
    Eligible to Vote */}



// Task 6: Login System
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

{/* output
    Login Successful */}




// Task 7: Calculator
let a = 17;
let b = 28;

console.log(a + b);  // 45
console.log(a - b);   // -11
console.log(a * b);   // 476
console.log(a / b);   // 0.6071428571428571
console.log(a % b);   // 17



//Task 8: Electricity Bill
let customerName = prompt("Enter Customer Name");
let units = Number(prompt("Enter Units Consumed"));
let bill;

if (units <= 100) {
    bill = units * 2;
} else if (units <= 200) {
    bill = units * 4;
} else {
    bill = units * 6;
}

console.log("Customer Name:", customerName);
console.log("Units Consumed:", units);
console.log("Bill Amount: ₹" + bill);

{/*output
   Customer Name: Srikanth
   Consumed: 250
   Bill Amount: ₹1500 */}




// Task 9: Employee Salary
let basicSalary = 20000;
let bonus = 9000;
let grossSalary = basicSalary + bonus;

console.log("Basic Salary:", basicSalary);
console.log("Bonus:", bonus);
console.log("Gross Salary:", grossSalary);

{/* output
    Basic Salary: 20000
    Bonus: 9000
    Gross Salary: 29000 */}




// Task 10: Movie Ticket Price
let ticketPrice = 200;
let numberOfTickets = 6;
let totalAmount = ticketPrice * numberOfTickets;

console.log("Ticket Price:", ticketPrice);
console.log("Number of Tickets:", numberOfTickets);
console.log("Total Amount:", totalAmount);

{/* output
    Ticket Price: 200
    Number of Tickets: 6
    Total Amount: 1200 */}



// Task 11: Product Discount
let productName = "Laptop";
let productPrice = 50000;
let discount = 0;

if (productPrice > 5000) {
    discount = productPrice * 20 / 100;
} else {
    discount = productPrice * 10 / 100;
}
let finalPrice = productPrice - discount;

console.log("Product Name:", productName);
console.log("Original Price:", productPrice);
console.log("Discount:", discount);
console.log("Final Price:", finalPrice);

{/* output
    Product Name: Laptop
    Original Price: 50000
    Discount: 10000
    Final Price: 40000 */}



//Task 12: Function Practice
function studentDetails(name, department, cgpa) {
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
}
studentDetails("Srikanth", "MCA", 8.7);

{/* output
    Name: Srikanth
    Department: MCA
    CGPA: 8.7 */}



//Task 13: Bank Balance
function bankDetails(accountHolder, currentBalance, withdrawAmount) {
    let remainingBalance = currentBalance - withdrawAmount;

    console.log("Account Holder:", accountHolder);
    console.log("Current Balance:", currentBalance);
    console.log("Withdraw Amount:", withdrawAmount);
    console.log("Remaining Balance:", remainingBalance);
}
bankDetails("Srikanth", 35000, 3900);

{/* output
    Account Holder: Srikanth
    Current Balance: 35000
    Withdraw Amount: 3900
    Remaining Balance: 31100  */}




// Task 14: Mobile Recharge
function mobile(mobnum, rechargeAmnt) {
    if (mobnum === 7645346789 && rechargeAmnt > 0) {
        console.log("Recharge Successful");
    } else {
        console.log("Recharge unSuccessful");
    }
    console.log("Mobile Number:", mobnum);
    console.log("Recharge Amount:", rechargeAmnt);
}
mobile(Number(prompt("Enter Mobile Number: ")),
       Number(prompt("Enter Recharge Amount: ")));

{/* output
    Recharge Successful
    Mobile Number: 7645346789
    Recharge Amount: 350  */}




//Task 15: Restaurant Bill
let foodName = "Pizza";
let quantity = 2;
let price = 250;

let totalBill = quantity * price;

console.log("Food Name:", foodName);
console.log("Quantity:", quantity);
console.log("Price:", price);
console.log("Total Bill:", totalBill);

{/* output
    Food Name: Pizza
    Quantity: 2
    Price: 250
    Total Bill: 500 */}



    
// Mini Project (Best Task)
// Employee Management System (Console Based)

// Employee Object
let employee = {
    name: "Srikanth",
    id: "34983",
    salary: 30000,
    experience: 2,
    skills: ["Java", "SSql", "React"]
};

// Display Employee Details
function displayEmployee() {
    console.log("------ Employee Details ------");
    console.log("Name:", employee.name);
    console.log("ID:", employee.id);
    console.log("Salary: " + employee.salary);
    console.log("Experience:", employee.experience + " Years");
    console.log("Skills:", employee.skills.join(", "));
}

// Calculate Salary
function calculateSalary() {
    let bonus = 0;

    if (employee.salary >= 50000) {
        bonus = 5000;
    } else {
        bonus = 3000;
    }

    let totalSalary = employee.salary + bonus;

    console.log("------ Salary Details ------");
    console.log("Basic Salary: " + employee.salary);
    console.log("Bonus: " + bonus);
    console.log("Total Salary: " + totalSalary);
}

// Check Employee Experience
function checkExperience() {
    console.log("------ Employee Position ------");

    if (employee.experience >= 1 && employee.salary >= 30000) {
        console.log("Senior Software Developer")
    } else if (employee.experience >= 1 && employee.salary >= 15000) {
        console.log("Software Developer");
    } else {
        console.log("Fresher Employee");
    }
}

// Update Employee Details
function updateEmployee(name, id, salary, experience, skills) {
    employee.name = name;
    employee.id = id;
    employee.salary = salary;
    employee.experience = experience;
    employee.skills = skills;
}

// Update Employee
updateEmployee(
    "priya",
    "34954",
    60000,
    4,
    ["JavaScript", "React", "Node.js"]
);

// Function Calls
displayEmployee();
calculateSalary();
checkExperience();

{/* output
------ Employee Details ------
    Name: priya
    ID: 34954
    Salary: 60000
    Experience: 4 Years
    Skills: JavaScript, React, Node.js
------ Salary Details ------
    Basic Salary: 60000
    Total Salary: 65000
------ Employee Position ------
    Senior Software Developer   */}
