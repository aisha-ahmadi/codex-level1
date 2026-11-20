const activityName = "Drawing practice";
const capacity = 16;
let registered = 9;
let seatsLeft = capacity - registered;

console.log(activityName);
console.log("Before:", seatsLeft);
registered = registered + 2;
seatsLeft = capacity - registered;
console.log("Registered:", registered);
console.log("After:", seatsLeft);

