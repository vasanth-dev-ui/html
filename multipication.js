// function multiply() {

//     let num = parseInt(document.getElementById("table-number").value);
//     let count = parseInt(document.getElementById("count-number").value);

//     document.getElementById("result").innerHTML += ("Multiplication table: " + num);
//     for (let i = 1; i <= count; i++) {
//         document.getElementById("result").innerHTML +=
//             "<br>" + i + " * " + num + " = " + (i * num);
//     }

// }

// let char = "vasanth"
// let user = char.split('').join(' ').concat(" *");
// console.log(user);
// // "vasanth".split('').join(' ');



// let under = {
//     name: "kumar",
//     age: 22,
//     salary: "Rs 20000"
// }

// let myBike = {
//     name: "Classic 350",
//     companyName: "Royal Enfield",
//     engineCapacity: "349cc",
//     tankCapacity: 13.5,
//     fuelType: "Petrol",
//     insurance: "Active",
//     rcOwner: "single",
//     noOfPiston: 4,
//     seatCapacity: 2,
//     wheelSize: "15-80-120",
//     wheelType: "Alloy",
//     wheelBase: "20 mm"
// }

// let myBike = {
//     name: "Classic 350",
//     companyName: "Royal Enfield",
//     seatCapacity: 2,
//     parts: {
//         engine: {
//             engineCapacity: "349cc",
//             noOfPiston: 4,
//         },
//         tank: {
//             tankCapacity: 13.5,
//             fuelType: "Petrol",
//         },
//         wheel: {
//             wheelSize: "15-80-120",
//             wheelType: "Alloy",
//             wheelBase: "20 mm",
//             wheelTypeSupported: ["Alloy", "Spokoe"]
//         }
//     },
//     insurance: "Active",
//     rcOwner: "single",
// }

// let pubg = {
//     person: {
//         helmet: ["level 1", "level 2", "level 3"],
//         west: ["level 1", "level 2", "level 3"]
//     },
//     bagLevelOne: {
//         medicalItems: {
//             firstAid: 2,
//             bandage: 15,
//             fullMediKit: 1,
//             energyDrink: 2,
//             painKiller: 3,
//         },
//         guns: {
//             bullets: [{
//                 bulletType: "5.56mm",
//                 count: 150
//             },
//             {
//                 bulletType: "7.62mm",
//                 count: 90
//             },
//             {
//                 bulletType: "9mm",
//                 count: 110
//             }],
//         },
//         personInHand: {
//             weapons: {
//                 asaultRafiles: ["M416"],
//                 sniper: ["Kar98"],
//                 other: ["pan"]
//             }
//         }
//     }
// }



// function find() {
//     let a = parseInt(document.getElementById("prime-number").value);
//     let primeNumber = true;
//     if (number === 1) {
//         console.log("1 is neither prime nor composite number.");
//         document.getElementById("result").innerHTML += ("prime number: ");

//     }
//     else if (number > 1) {
//         for (let i = 2; i < number; i++) {
//             if (number % i == 0) {
//                 primeNumber = false;
//                 break;
//             }
//         }
//         if (primeNumber) {
//             console.log(`${number} is a prime number`);
//         } else {
//             console.log(`${number} is a not prime number`);
//         }
//     }
//     else {
//         console.log("The number is not a prime number.");
//     }
// }




// function find() {
//     let a = parseInt(document.getElementById("prime-number").value);
//     if (num === 2) {
//         return true;
//     } else if (num > 1) {
//         for (var i = 2; i < num; i++) {

//             if (num % i !== 0) {
//                 return true;
//             } else if (num === i * i) {
//                 return false
//             } else {
//                 return false;
//             }
//         }
//     } else {
//         return false;
//     }

// }





