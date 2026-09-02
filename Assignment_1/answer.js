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


// question 4 of main code and you can see the code is same as question4.js and can test the function by calling it with different distance, isNight and waitingMinutes values.
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50;

    if (distance > 2) {
        fare = fare + (distance - 2) * 15;
    }

    fare = fare + waitingMinutes * 2;

    if (isNight) {
        fare = fare * 1.20;
    }

    return fare;
}

// Question No. 5  and main code of question5.js and you can test the function by calling it with different target, scored and ballsLeft values.
const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
