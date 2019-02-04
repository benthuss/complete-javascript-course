/**************************
* Variables and data types
**************************/

// var firstName = 'Ben';
// console.log(firstName);

// var lastName = 'Thuss';
// var age = 27;

// var fullAge = true;
// console.log(fullAge);

// var job;


// job = 'Teacher';
// console.log(job);

// Variable mutation and type coercion

// Type coercion
// var firstName = 'Ben';
// var age = 27;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'developer';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
// age = 'twenty seven';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/**************************
* Basic Operators
**************************/
// var year, yearJohn, yearMark;
// now = 2018;
// yearJohn = now - 28;
// yearMark = now - 33;

// console.log(yearJohn);

// Logical Operators


// Operator Precedence

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);


// Calculate and Compare BMI


// var massMark, massJohn, heightJohn, heightMark;

// var heightMark = prompt("What is Mark's height?");
// var massMark   = prompt("What is Mark's weight?");
// var heightJohn = prompt("What is John's height?");
// var massJohn   = prompt("What is John's weight?");

// var bmiMark = massMark / (heightMark * heightMark);
// var bmiJohn = massJohn / (heightJohn * heightJohn);

// var bmiCompare = bmiMark > bmiJohn;

// console.log("Is Mark's BMI higher than John's? " + bmiCompare);

// Coding Challenge 2 

// var john1, john2, john3, johnAvg, mike1, mike2, mike3, mikeAvg, mary1, mary2, mary3, maryAvg, avgWinner, winScore;

// john1 = 190;
// john2 = 120;
// john3 = 133;
// johnAvg = (john1 + john2 + john3) / 3;

// mike1 = 190;
// mike2 = 120;
// mike3 = 133;
// mikeAvg = (mike1 + mike2 + mike3) / 3;

// mary1 = 7;
// mary2 = 134;
// mary3 = 105;
// maryAvg = (mary1 + mary2 + mary3) / 3;

// if (johnAvg > mikeAvg && johnAvg > maryAvg) {
//     avgWinner = 'John';
//     winScore = johnAvg;
// } else if (mikeAvg > johnAvg && mikeAvg > maryAvg) {
//      avgWinner = 'Mike';
//      winScore = mikeAvg;
// } else if (maryAvg > johnAvg && maryAvg > mikeAvg) {
//     avgWinner = 'Mary';
//     winScore = maryAvg
// } else {
//     avgWinner = 'Draw';
// }

// console.log('The winner is ' + avgWinner + ' with an average score of ' + winScore )



/////////////////////////////////////////
///////////////////// CODING CHALLENGE 3
/////////////////////////////////////////

var tips = [];
var totalBills = [];
var checks = [124,48,268];

function calculateTip(checkAmount) {
    if (checkAmount < 50) {
        return checkAmount * 0.2;
    } else if (checkAmount >= 50 && checkAmount < 200) {
        return checkAmount * 0.15;
    } else {
        return checkAmount * 0.1;
    }
}

tips[0] = calculateTip(checks[0]);
tips[1] = calculateTip(checks[1]);
tips[2] = calculateTip(checks[2]);
console.log(tips);

totalBills[0] = checks[0] + tips[0];
totalBills[1] = checks[1] + tips[1];
totalBills[2] = checks[2] + tips[2];
console.log(totalBills);