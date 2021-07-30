// var array = [5, 5, 8, 9, 6, 7, 5, 1, 2, 5, 8, 9];
// array.push(4);
// //push array returns number len after adding element
// console.log(array);
// array.pop();
// //pop array returns removed element 
// console.log(array);
// array.unshift(10);
// // unshift array
// console.log(array);
// array.shift();
// // shift array
// var a = [10, 11, 12, 13]
// var b = [14, 15, 16, 17]
// var c = a.concat(b);
// console.log(c);
// // concat array  return array

// var d = ['anand', 'prakesh', 'siva', 'kumar']
// var e = d.filter(word => word.length >= 5);
// console.log(e);
// // filter arrey or empty array
// d.sort();
// console.log(d);
// // sort array
// d.splice(3, 1, 'raja');
// console.log(d);
// //splice array
// console.log(d.includes('anand'));
// console.log(d.includes('and'));
// // includes boolean
// //var a = (element) => element % 2 == 0;
// //console.log(a.some(Number));
// //some boolean
// var f = 'the match or matches are replaced with';
// console.log(f.replaceAll('matches', 'match'));
// //replace string
// console.log(f.toLocaleUpperCase());
// // upper case string
// console.log(f.startsWith('the'));
// //startswith string
// console.log(f.endsWith('with'));
// //endswith string
// var g = '   think positive     ';
// console.log(`think positive: ${g.repeat(5)}`);
// //repeate string
// console.log(g.trimEnd());
// //trim end string
// console.log(g.trimStart());
// console.log(g.trim());
// //trimstart string
// console.log(g.substring(3));
// // substring string
// console.log(g.valueOf());
// //value of string

// function declaration / definition
// function <function-name>(arg1, arg2,....,argN) {
// 
// }


// function call
// <function-name>(param1, param2, .... , paramN);


// var bikeName = ['yamaha', 'bajaji', 'tvs', 'beneli', 'ktm', 're', ' ninja', 'indian', 'hero'];
// function isFound(strArr, searchString) {
//     let lowercaseArr = strArr.map(el => el.toLowerCase());
//     // let companys = companys.toLowerCase();
//     if (lowercaseArr.indexOf(searchString.toLowerCase()) > -1) {
//         console.log('found');
//     } else {
//         console.log('not found');
//     }
// }
// isFound(bikeName, "honda");
// var a = ['bmw', ' honda', 'benz', 'vw'];
// isFound(a, "vw");


// var value = ['a', 'b', 'c'];
// function calc(a, b, c) {
//     if (c === 'add') {
//         return (a + b);
//     } else if (c === 'sub') {
//         return (a - b);
//     } else if (c === 'mul') {
//         return (a * b);
//     } else if (c === 'div') {
//         return (a / b);
//     } else if (c === 'mod') {
//         return (a % b);
//     }
//     return undefined;
// }
// // var res = calc(10, 10, 'mod');
// console.log(`tHIS IS THE RESULT ${calc(10, 10, 'mod')}`);

// res = calc(10, 10, 'mul');
// console.log(res);
// let num1 = 10;
// let num2 = 20;

// function biggestOfTwoNumbers(a, b) {
//     // condition ? truestatement : falsementt; //terenery operator
//     return (a > b) ? a : b;
// }
// let ans = biggestOfTwoNumbers(num1, num2);
// function oddEven(a) {
//     return (a % 2 === 0) ? 'even' : 'odd';
// }
// let rres = oddEven(biggestOfTwoNumbers(15, 55)).toUpperCase();
// console.log(rres);


// let marksArr = [75, 45, 55, 68, 78];
// // let total = 0;
// // marksArr.forEach(el => {
// //     total = total + el;
// // });
// // console.log(total);
// // console.log(total / marksArr.length);


// function totalMarks(arrVasanth) {
//     let total = 0;
//     arrVasanth.forEach(el => {
//         total = total + el
//     });
//     return total;
// }
// function avg(total, noOfSubject) {
//     return total / noOfSubject;
// }
// let marks = [75, 25, 85, 96, 36];
// let total = totalMarks(marks);
// totalAvg = avg(total, marks.length);
// console.log(total);
// console.log(totalAvg);

function sum(arr1, arr2) {
    let add1 = 0;
    let add2 = 0;
    // let res = 0;
    arr1.forEach(el => {
        add1 = add1 + el;
        // add2 = add2 + el;
    });
    arr2.forEach(el => {
        add2 = add2 + el
    });
    // res = add1 > add2 ? add1 : add2;
    // return res;
    return add1 > add2 ? add1 : add2;;
}

function finalValue(sumation, totalSubject) {
    // console.log("finalValue : Entered Function");
    return sumation / totalSubject;
}
let arr1 = [45, 65, 85, 75, 95];
let arr2 = [15, 25, 35, 65, 45];
let resOfSum = sum(arr1, arr2);
// console.log(sumation);
// let lastValue = finalValue(sumation, arr1.length)
console.log(finalValue(resOfSum, arr1.length));
// console.log(finalValue());
