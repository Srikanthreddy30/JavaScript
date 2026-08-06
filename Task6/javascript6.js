// Employee Check-In Status

const employeeName = "Srikanth";

// Gwewill get current  date and time
const checkInTime = new Date();

console.log("Employee:", employeeName);

console.log(
    "Check-In Date:",
    checkInTime.getDate(),
    checkInTime.getMonth() + 1,
    checkInTime.getFullYear()
);

console.log(
    "Check-In Time:",
    checkInTime.getHours(),
    checkInTime.getMinutes(),
    checkInTime.getSeconds()
);

//  Our office start time = 9:00 AM
const officeStartTime = new Date();

officeStartTime.setHours(9, 0, 0, 0);

// Checking employee is late or not
if (checkInTime <= officeStartTime) {
    console.log("Status: On Time");
} else {
    console.log("Status: Late");
}