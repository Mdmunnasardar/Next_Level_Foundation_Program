# Programming Hero — Next Level Foundation Program

## JavaScript Fundamentals Assignment

This repository contains solutions to 5 JavaScript problems covering variables, operators, `typeof`, `switch`, `if/else`, ternary operators, template strings, default parameters, and arrow functions.

---

## 📌 Question 1: Value Detective (10 marks)

**Task:** Write a function `describeValue` that returns the type of a value and whether it's truthy or falsy.

**Format:** `<type> | <truthy or falsy>`

```javascript
function describeValue(value) {
    const valueType = typeof value;
    if (value) {
        return `${valueType} | truthy`;
    } else {
        return `${valueType} | falsy`;
    }
}
```

### Test Cases

| Call | Returns |
|---|---|
| `describeValue("hello")` | `"string \| truthy"` |
| `describeValue("")` | `"string \| falsy"` |
| `describeValue(25)` | `"number \| truthy"` |
| `describeValue(0)` | `"number \| falsy"` |
| `describeValue(true)` | `"boolean \| truthy"` |
| `describeValue(null)` | `"object \| falsy"` |
| `describeValue(undefined)` | `"undefined \| falsy"` |
| `describeValue("0")` | `"string \| truthy"` |
| `describeValue(NaN)` | `"number \| falsy"` |

### Key Concepts
- `typeof` returns the type as a string — no need for manual type checks.
- `typeof null` is `"object"` — a well-known JavaScript quirk.
- `typeof NaN` is `"number"` — but `NaN` itself is falsy.
- Any non-empty string (even `"0"`) is truthy.

---

## 📌 Question 2: Bangladesh Weekend Machine (10 marks)

**Task:** Write a function `getDayType` using `switch` that classifies a day as Weekend, Working Day, or Invalid Day — case-insensitively.

```javascript
function getDayType(day) {
    switch (day.toLowerCase()) {
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
```

### Test Cases

| Call | Returns |
|---|---|
| `getDayType("Friday")` | `"Weekend"` |
| `getDayType("friday")` | `"Weekend"` |
| `getDayType("MONDAY")` | `"Working Day"` |
| `getDayType("Bandarban")` | `"Invalid Day"` |

### Key Concepts
- `.toLowerCase()` normalizes input case before comparison.
- Stacked `case` lines without `break` share the same result (fall-through).
- `return` inside each case avoids needing explicit `break` statements.

---

## 📌 Question 3: Username Gatekeeper (10 marks)

**Task:** Write a function `validateUsername` that checks username rules **in a specific order**: length → spaces → reserved word.

```javascript
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
```

### Test Cases

| Call | Returns | Why |
|---|---|---|
| `validateUsername("rahim123")` | `"Available"` | passes every rule |
| `validateUsername("ab")` | `"Too Short"` | only 2 characters |
| `validateUsername("a b")` | `"Too Short"` | length checked before space |
| `validateUsername("abcd")` | `"Available"` | exactly 4 is allowed |
| `validateUsername("rahim islam")` | `"No Space Allowed"` | contains a space |
| `validateUsername("superadmin99")` | `"Reserved Word"` | "admin" in the middle |
| `validateUsername("Admin_Rahim")` | `"Reserved Word"` | case-insensitive match |

### Key Concepts
- Rule **order matters** — checked with `if / else if` in sequence.
- `.length` checks string length.
- `.includes()` checks for a substring or character.
- `.toLowerCase()` makes the "admin" check case-insensitive.

---

## 📌 Question 4: Dhaka CNG Fare Meter (15 marks)

**Task:** Write a function `getCngFare(distance, isNight, waitingMinutes)` to calculate a CNG fare with a minimum charge, per-km rate, waiting charge, and a night surcharge.

```javascript
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
```

### Fare Rules
- Minimum fare: **50 taka** (covers first 2 km).
- Every km beyond 2 km: **+15 taka**.
- Waiting charge: **+2 taka per minute**.
- Night surcharge: **+20%** on distance + waiting combined.

### Test Cases

| Call | Returns | Working |
|---|---|---|
| `getCngFare(2)` | `50` | minimum fare |
| `getCngFare(1)` | `50` | still the minimum |
| `getCngFare(5)` | `95` | 50 + (3 × 15) |
| `getCngFare(10)` | `170` | 50 + (8 × 15) |
| `getCngFare(5, false, 10)` | `115` | 95 + (10 × 2) |
| `getCngFare(5, true)` | `114` | 95 + 20% |
| `getCngFare(5, true, 10)` | `138` | 115 + 20% |

### Key Concepts
- Default parameters (`isNight = false`, `waitingMinutes = 0`) let the function work with fewer arguments.
- Fare is built step by step: distance → waiting → night surcharge, applied **last**.

---

## 📌 Question 5: Run Chase Commentator (15 marks)

**Task:** Write an arrow function `getChaseVerdict(target, scored, ballsLeft)` that gives a cricket run-chase verdict.

```javascript
const getChaseVerdict = (target, scored, ballsLeft) => {
    const runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    } else if (ballsLeft <= 0) {
        return "Lost";
    } else {
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
    }
};
```

### Logic
1. `runsNeeded = target - scored`
2. If `runsNeeded <= 0` → `"Won"`
3. Else if `ballsLeft <= 0` → `"Lost"`
4. Else calculate `requiredRate = (runsNeeded / ballsLeft) * 6`
   - `≤ 6` → `"Comfortable"`
   - `> 6` and `≤ 12` → `"Tough"`
   - `> 12` → `"Almost Impossible"`
5. Return: `Need <runsNeeded> runs in <ballsLeft> balls | <verdict>`

### Test Cases

| Call | Returns |
|---|---|
| `getChaseVerdict(200, 200, 12)` | `"Won"` |
| `getChaseVerdict(200, 190, 0)` | `"Lost"` |
| `getChaseVerdict(100, 90, 12)` | `"Need 10 runs in 12 balls \| Comfortable"` |
| `getChaseVerdict(100, 80, 12)` | `"Need 20 runs in 12 balls \| Tough"` |
| `getChaseVerdict(100, 70, 12)` | `"Need 30 runs in 12 balls \| Almost Impossible"` |
| `getChaseVerdict(150, 149, 1)` | `"Need 1 runs in 1 balls \| Comfortable"` |

### Key Concepts
- Written as an **arrow function**, as required.
- Template strings build the final sentence.
- Order of checks matters: Won → Lost → rate-based verdict.

---

## 🧠 General Rules Followed

1. Exact function names used, matching required spelling/capitalization.
2. Every function uses `return`, never `console.log`, for its answer.
3. Return text matches exactly, including spacing and capitalization.
4. Only concepts covered in class used: variables, operators, strings, template strings, `if/else`, `switch`, ternary, functions, default parameters, and arrow functions. No arrays, loops, or objects.
5. Every question attempted fully to maximize partial and full credit.

---

*Prepared for the Programming Hero — Next Level Foundation Program JavaScript Fundamentals Assignment.*
