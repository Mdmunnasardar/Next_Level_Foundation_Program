// Question No. 2
function getDayType(day) {
    const result = day.toLowerCase();

    switch (result) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}


//testing the function by calling it with different day values.
console.log(getDayType("Friday"));
console.log(getDayType("Sunday"));
console.log(getDayType("Monday"));
console.log(getDayType("Saturday"));
console.log(getDayType("InvalidDay"));