// TASK 1 - Student Registration

let student = {
    name: "Deepak",
    age: 25,
    department: "java fullstack",
    courseFee: 50000
};

console.log("Student Name:", student.name);
console.log("Age:", student.age);
console.log("Department:", student.department);
console.log("Course Fee:", student.courseFee);

if (student.age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}




//TASK 2 - Employee Salary Calculator

function calculateSalary(basicSalary, bonus, deduction) {
    let totalSalary = basicSalary + bonus - deduction;
    return totalSalary;
}

let basicSalary = 30000;
let bonus = 5000;
let deduction = 2000;

let totalSalary = calculateSalary(basicSalary, bonus, deduction);

console.log("Basic Salary:", basicSalary);
console.log("Bonus:", bonus);
console.log("Deduction:", deduction);
console.log("Total Salary:", totalSalary);




// TASK 3 - Shopping Cart

let cart = ["Laptop", "Mouse", "Keyboard", "Headphone"];

cart.push("Speaker"); // Add one product

cart.pop(); // Remove last product

console.log("Total Products:", cart.length);
console.log("First Product:", cart[0]);
console.log("Last Product:", cart[cart.length - 1]);
console.log("Cart:", cart);




// TASK 4 - Login Validation

let storedUsername = "admin";
let storedPassword = "12345";

let enteredUsername = "admin";
let enteredPassword = "12345";

if (storedUsername === enteredUsername && storedPassword === enteredPassword) {
    console.log("Login Success");
} else {
    console.log("Invalid Username or Password");
}




// TASK 5 - Movie Ticket Booking

let age = 20;

let result = age >= 18 ? "Eligible" : "Not Eligible";

console.log("Age:", age);
console.log(result);




// TASK 6 - Employee Search

let employees = [
    { name: "ANUSHA", salary: 25000 },
    { name: "MANASA", salary: 40000 },
    { name: "LUCKY", salary: 55000 }
];

let employee = employees.find(emp => emp.name === "Kavin");

console.log(employee);




// TASK 7 - Product Filter

let products = [
    { name: "Mouse", price: 300 },
    { name: "Keyboard", price: 700 },
    { name: "Headphone", price: 450 },
    { name: "Laptop", price: 50000 }
];

let filteredProducts = products.filter(product => product.price < 500);

console.log(filteredProducts);




// TASK 8 - Student Marks

let marks = [45, 56, 67, 89];

let newMarks = marks.map(mark => mark + 5);

console.log("New Marks:", newMarks);




// TASK 9 - Attendance Checker

let marks = [90, 85, 70, 65];

let result = marks.every(mark => mark > 50);

console.log(result);




// TASK 10 - OTP Generator

let otp = Math.floor(100000 + Math.random() * 900000);

console.log("OTP:", otp);




// TASK 11 - Password Strength Checker

let password = "Abc@1234";

let hasLength = password.length >= 8;
let hasNumber = /[0-9]/.test(password);
let hasUpperCase = /[A-Z]/.test(password);
let hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

if (hasLength && hasNumber && hasUpperCase && hasSpecial) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}




// TASK 12 - Product Search

let products = ["Laptop", "Mobile", "Watch", "Camera"];

let search = "Mobile";

if (products.includes(search)) {
    console.log("Available");
} else {
    console.log("Not Available");
}




// TASK 13 - Digital Clock

setInterval(function () {
    let now = new Date();

    let time = now.toLocaleTimeString();

    console.clear();
    console.log(time);
}, 1000);




// TASK 14 - Countdown Timer

let count = 10;

let timer = setInterval(function () {
    console.log(count);

    count--;

    if (count < 0) {
        clearInterval(timer);
    }
}, 1000);




// TASK 15 - Fake API Product Viewer

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log("Image:", product.image);
            console.log("Name:", product.title);
            console.log("Price: ₹" + product.price);
            console.log("------");
        });
    });




// TASK 16 - Employee Dashboard

let employees = [
    { name: "Arun", salary: 25000 },
    { name: "Kavin", salary: 40000 },
    { name: "Ravi", salary: 55000 }
];

let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

let averageSalary = totalSalary / employees.length;

let highestSalary = employees.reduce((max, emp) =>
    emp.salary > max ? emp.salary : max, 0);

console.log("Total Salary:", totalSalary);
console.log("Average Salary:", averageSalary);
console.log("Highest Salary:", highestSalary);




// TASK 17 - Online Food Order

let menu = ["Pizza", "Burger", "Shawarma", "Fries"];

menu.push("Sandwich"); // Add Item

menu.pop(); // Remove Item

console.log("Total Items:", menu.length);

let bill = 200 + 150 + 100 + 80;

console.log("Bill: ₹" + bill);

console.log(menu);




// TASK 18 - Bank Account

let account = {
    accountHolder: "Deepak",
    balance: 5000,

    deposit(amount) {
        this.balance += amount;
        console.log("Balance:", this.balance);
    },

    withdraw(amount) {
        this.balance -= amount;
        console.log("Balance:", this.balance);
    },

    checkBalance() {
        console.log("Current Balance:", this.balance);
    }
};

account.deposit(2000);
account.withdraw(1000);
account.checkBalance();




// TASK 9 - To-Do List

let tasks = ["Learn JS", "Practice Coding"];

tasks.push("Build Project"); // Add Task

tasks[1] = "Practice JavaScript"; // Update Task

tasks.splice(0, 1); // Delete Task

console.log("All Tasks:");
console.log(tasks);




// TASK 20 - Mini E-Commerce Product Management

let products = [
    {
        name: "Laptop",
        price: 50000,
        category: "Electronics",
        stock: 5
    },
    {
        name: "Mobile",
        price: 20000,
        category: "Electronics",
        stock: 10
    }
];

// Add Product
products.push({
    name: "Shirt",
    price: 1000,
    category: "Clothing",
    stock: 20
});

console.log("All Products:");
console.log(products);

// Search Product
let search = "Mobile";

for (let i = 0; i < products.length; i++) {
    if (products[i].name === search) {
        console.log("Product Found:");
        console.log(products[i]);
    }
}

// Filter by Category
console.log("Electronics Products:");

for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Electronics") {
        console.log(products[i]);
    }
}

// Total Stock
let totalStock = 0;

for (let i = 0; i < products.length; i++) {
    totalStock = totalStock + products[i].stock;
}

console.log("Total Stock:", totalStock);

// Total Inventory Value
let totalValue = 0;

for (let i = 0; i < products.length; i++) {
    totalValue = totalValue + (products[i].price * products[i].stock);
}

console.log("Total Inventory Value:", totalValue);