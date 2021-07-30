// var <variableName>; declaration
var testName;
testName = 10; // intialization
testName = 100; // assignment
console.log(testName);

var a = 10;
var b = 20;

// Arithematic operator - result number
console.log(`${a + b}`);
console.log(`${a - b}`);
console.log(`${a * b}`);
console.log(`${a / b}`);
console.log(`${a % b}`);


//comparison operator - result boolean
console.log(`${a > b}`); // 'false'
console.log(`${a >= b}`); // 'false'
console.log(`${a < b}`);// 'true'
console.log(`${a <= b}`); // 'true'
console.log(`${a == b}`); // value check
console.log(`${a != b}`); // value check
console.log(`${a === b}`); // value & type check
console.log(`${a !== b}`); // value & type check

//logical operators - result boolean
// AND - both side should be true
console.log((a < b) && (a <= b));
console.log((a < b) && (a >= b));

// OR - any one side should be true
console.log((a < b) || (a <= b));
console.log((a < b) || (a >= b));

// NOT - reverse the value
console.log(!((a < b) && (a <= b)));


// string or number or boolean
var dayName = "Sunday";
console.log(dayName);

var userAge = 18;
if (userAge >= 18) { // IF scope/block
    console.log(`user age ${userAge} is greater than 18`); // Template litrals
} else { // ELSE scope/block
    console.log(`user age ${userAge} is lesser than 18`);
}

