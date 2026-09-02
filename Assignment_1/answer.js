// here the only main code of Question No. 1..and you can see it is same as question1.js and can test the function by calling it with different values.

function describeValue(value) {
    const result = typeof value;

    if (value) {
        return `${result} | truthy`;
    } else {
        return `${result} | falsy`;
    }
}


// here the only main code of Question No. 2..and you can see the code is same as question2.js and can test the function by calling it with different day values.
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

//// Question No. 3 ..and you can see the code is same as question3.js and can test the function by calling it with different username values.
function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    } else if (username.includes(" ")) {
        return "No Space Allowed";
    } else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available";
    }
}

