// Task 1 - Employee Profile
let employee = {
    name: "Naveen",
    employeeID: "EMP1001",
    department: "Frontend",
    salary: 25000,
    isPermanent: true
}

console.log("Name :", employee.name);
console.log("Employee ID :", employee.employeeID);
console.log("Department :", employee.department);
console.log("Salary :", employee.salary);
console.log("Permanent :", employee.isPermanent);

// Task 2 - Student Profile
let student = {
    name: "John",
    studentID: "STU2001",  
    course: "Computer Science",
    year: 2,
    isFullTime: true
}

console.log("Name :", student.name);
console.log("Student ID :", student.studentID);
console.log("Course :", student.course);
console.log("Year :", student.year);
console.log("Full Time :", student.isFullTime);


// Task 3 - Shopping Cart
let shoppingCart = {
    items: ["Milk", "Rice", "Oil", "Sugar", "Soap"]
};
console.log(shoppingCart.items[0]);
console.log(shoppingCart.items[2]);
console.log(shoppingCart.items[4]);
console.log(shoppingCart.items);


// Task 4 - Company Employee Database
let companyEmployee = {
    name: "Naveen",
    designation: "Software Engineer",
    salary: 25000,
    skills: ["JavaScript", "React", "Node.js"]
};
console.log("Name :", companyEmployee.name);
console.log("Designation :", companyEmployee.designation);
console.log("Second Skill :", companyEmployee.skills[1]);


// Task 5 - Salary Calculation
let salaryDetails = {
    basicSalary: 25000,
    bonus: 5000,
}
console.log("Total Salary :", salaryDetails.basicSalary + salaryDetails.bonus);


// Task 6 - GST Calculator
let gstCalculator = {
    productPrice: 4500,
    gstPercentage: 18,
}

console.log("GST Amount:", gstCalculator.productPrice * gstCalculator.gstPercentage / 100)
console.log("Final Price:", gstCalculator.productPrice + gstCalculator.productPrice * gstCalculator.gstPercentage / 100)

// Task 7 - Even or Odd
    let number = 25;
    let result= (number % 2 === 0) ? "Even Number" : "Odd Number";
    console.log(result);

// Task 8 - Login System
let username = "admin";
let password = "12345"; 

console.log((username === "admin" && password === "12345") ? "Login Success" : "Invalid Credentials");

// Task 9 - Voting Eligibility
let age = 22;
console.log(age>=18 ? "Eligible for Vote" : "Not Eligible");

// Task 10 - EMI Eligibility
let salary = 40000;
let experience = 3;
console.log((salary>30000 && experience>=1)?"Eligible":"Not Eligible");

// Task 11 - Product Discount
let price = 5000;
let discount=10;

console.log("Discrount Amount:", price * discount / 100);
console.log("Final Price:", price - (price * discount / 100));

// Task 12 - User Registration
let user = {
    name: "Alice",
    email: "alice@example.com",
    phone: "1234567890",
    city: "New York"
};
console.log("----- User Details -----");
console.log("Name :", user.name);
console.log("Email :", user.email);
console.log("Phone :", user.phone);
console.log("City :", user.city);


// Task 13 - Social Media Profile
let socialMediaProfile = {
    username: "john_doe",
    followers: 1500,
    following: 300,
    posts: 75,
    verified: true
};
console.log("----- Social Media Profile -----");
console.log("Username :", socialMediaProfile.username);
console.log("Followers :", socialMediaProfile.followers);
console.log("Verified :", socialMediaProfile.verified);


// Task 14 - Restaurant Menu
let menu = ["Idli", "Dosa", "Poori", "Meals", "Parotta"];
console.log("----- Restaurant Menu -----");
console.log("Second Item :", menu[1]);
console.log("Fourth Item :", menu[3]);
console.log("Last Item :", menu[menu.length - 1]);


// Task 15 - Banking System
let accountBalance = 25000;
let withdrawAmount = 8000;
let remainingBalance = accountBalance - withdrawAmount;
console.log("Remaining Balance:", remainingBalance);    


// Task 16 - Mobile Store
let mobilePrice = 25000;
let exchange = 5000;
let coupon = 2000;
let finalAmount = mobilePrice - exchange - coupon;
console.log("Final Amount:", finalAmount);


// Task 17 - Employee Promotion
let experience = 5;
let performance = true;

console.log((experience >= 5 && performance === true) ? "Promotion Approved" : "Promotion Pending");


// Task 18 - Movie Ticket
let ticketPrice = 180;
let people = 5;
let totalAmount = ticketPrice * people;
console.log("Total Amount:", totalAmount);


// Task 19 - Weather App
let temperature = 38;
console.log(temperature > 35 ? "Hot Day" : "Normal Weather");   


// Task 20 - Mini HR Management (Real-Time)
let employeeProfile = {
    empCode: "EMP1001",
    name: "Rahul",
    department: "Frontend",
    designation: "Associate Software Engineer",
    salary: 28000,
    skills: ["HTML","CSS","JavaScript","React"],
    permanent: true
}
console.log("Employee Code:", employeeProfile.empCode);
console.log("Employee Name:", employeeProfile.name);
console.log("Department:", employeeProfile.department);
console.log("Salary:", employeeProfile.salary);
console.log("Last Skill:", employeeProfile.skills[employeeProfile.skills.length - 1]);
console.log("Permanent Status:", employeeProfile.permanent);


