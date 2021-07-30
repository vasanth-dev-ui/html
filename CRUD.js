'use strict'
// let stud = [
//     {
//         name: "kumar",
//         rollNo: 545,
//         age: 22,
//         gender: "male",
//         mark: 410,
//         covidRes: "nagative",
//         getVaccinate: true,
//         hospital: "private",
//         state: "kl"
//     },
//     {
//         name: "siva",
//         rollNo: 546,
//         age: 22,
//         gender: "male",
//         mark: 420,
//         covidRes: "Positive",
//         getVaccinate: false,
//         hospital: "govt",
//         state: "ka"
//     },
//     {
//         name: "ponnu",
//         rollNo: 547,
//         age: 20,
//         gender: "female",
//         mark: 430,
//         covidRes: "negative",
//         getVaccinate: true,
//         hospital: "private",
//         state: "tn"
//     },
//     {
//         name: "girl",
//         rollNo: 548,
//         age: 24,
//         gender: "female",
//         mark: 450,
//         covidRes: "Positive",
//         getVaccinate: false,
//         hospital: "private",
//         state: "tn"
//     },
//     {
//         name: "raja",
//         rollNo: 549,
//         age: 23,
//         gender: "male",
//         mark: 360,
//         covidRes: "Positive",
//         getVaccinate: false,
//         hospital: "govt",
//         state: "kl"
//     },
//     {
//         name: "sarasu",
//         rollNo: 550,
//         age: 22,
//         gender: "female",
//         mark: 390,
//         covidRes: "Positive",
//         getVaccinate: false,
//         hospital: "govt",
//         state: "tn"
//     },
//     {
//         name: "beem",
//         rollNo: 551,
//         age: 19,
//         gender: "male",
//         mark: 460,
//         covidRes: "Positive",
//         getVaccinate: true,
//         hospital: "private",
//         state: "tn"
//     },
//     {
//         name: "kaaliya",
//         rollNo: 552,
//         age: 24,
//         gender: "male",
//         mark: 460,
//         covidRes: "negative",
//         getVaccinate: false,
//         hospital: "private",
//         state: "ka"
//     }
// ];

// let regNo = 0;
// // no arument nneede here,  assignme
// let studNo = (el) => regNo = regNo + el;

// let addstud = (stud) => {
//     studName = push(stud); // where is array
//     dispaly(stud, "add");
// }

// addstud({
//     name: "karthi",
//     rollNo: studNo, /// call porperly,
//     age: 24,
// });

// let getStudent = (studNo) => {
//     let studData = stud.find(rollNo.name) //el => el.name === studNo;
//     dispaly(studData, "read");
// }

// let removeData = (stud1) => {
//     let data = index(removeData); /// 
//     stud.splice(i, 1) // use forloop
//     dispaly(stud, "delete");
// }
// let updateData = (stud) => {
//     let updateValue = index(updateData);
//     index[updateData] = splice()
//     display(stud, "update");
// }

// let dispaly = (stud, anyValue) => {
//     if (anyValue == "add") {
//         console.log(`${stud.name} added`);
//     } else if (anyValue == "read") {
//         console.log(`${stud.name} readed`);
//     } else if (anyValue == "delete") {
//         console.log(`${stud.name} deleted`);
//     } else if (anyValue == "update") {
//         console.log(`${stud.name} updated`);
//     }
// }
// addstud("karthi");

// getStudent("beem");
// removeData("kaaliya");
// updateData("siva", "rk");

// //////WORKING CODE

// let yamaha = ["r15", "r3", "r6", "MT9", "r1"];
// let addBike = (model) => {
//     yamaha.push(model);
//     display(model, "add")
// }

// let delBike = (delmodel) => {
//     let index = yamaha.indexOf(delmodel);
//     yamaha.splice(index, 1);
//     display(delmodel, "del")
// }
// let updateBike = (updateModel, newUpdateModel) => {
//     let index = yamaha.indexOf(updateModel, 0);
//     yamaha[index] = newUpdateModel;
//     display(updateModel, "update");
// }

// let display = (wheelers, operations) => {
//     if (operations === "add") {
//         console.log(`${wheelers} added`);
//         // console.log(yamaha);
//     } else if (operations === "del") {
//         console.log(`${wheelers} deleted`);
//         // console.log(yamaha);
//     } else if (operations === "update") {
//         console.log(`${wheelers} updated`);
//         // console.log(yamaha);
//     }
//     console.log(yamaha)
// }
// addBike("r7");
// delBike("r6");
// updateBike("r15", "MT15");


// let empy = [
//     {
//         name: "sankar",
//         rollNo: 1,
//         age: 31,
//         salary: 10000
//     },
//     {
//         name: "raja",
//         rollNo: 2,
//         age: 32,
//         salary: 12000
//     },
//     {
//         name: "dhinesh",
//         rollNo: 3,
//         age: 33,
//         salary: 15000
//     },
// ];

// let getRollNo = 3;
// let empyRollNo = () => {
//     getRollNo = getRollNo + 1;
//     return getRollNo;
// }


// let addEmpy = (newEmpy) => {
//     // newEmpy = push.(`${empy}."rollNo"`);
//     empy.push(newEmpy);
//     display(newEmpy, "add");
// }

// let delEmpy = (removeEmpy) => {
//     // let person = null;
//     for (let i = 0; i < empy.length; i++) {
//         if (empy[i].rollNo === removeEmpy) {
//             empy.splice(i, 1);
//             display(removeEmpy, "delete");
//             break;
//         }
//     }
// }

// let display = (empyName, operation) => {
//     if (operation === "add") {
//         console.log(`${empyName.name}"added"`)
//     } else if (operation === "delete") {
//         console.log(`${empyName.name} "deleted"`)
//     }
//     console.log(empy);
// }

// addEmpy(
//     {
//         name: "ganesh",
//         rollNo: empyRollNo(),
//         age: 33,
//         salary: 15000
//     });

// delEmpy(3);




let gun = [
    {
        name: "M416",
        bullets: 30,
        extendedMag: {
            ishave: true,
            totalBullet: 40
        },
        skinColor: true
    },
    {
        name: "Akm",
        bullets: 30,
        extendedMag: {
            ishave: true,
            totalBullet: 40
        },
        skinColor: false
    },
    {
        name: "UMP-45",
        bullets: 25,
        extendedMag: {
            ishave: true,
            totalBullet: 35
        },
        skinColor: true
    },
    {
        name: "DP-28",
        bullets: 47,
        extendedMag: {
            ishave: false,
            totalBullet: 47
        },
        skinColor: "no"
    },
    {
        name: "M249",
        bullets: 75,
        extendedMag: {
            ishave: true,
            totalBullet: 150
        },
        skinColor: true
    },
    {
        name: "Kar-98",
        bullets: 5,
        extendedMag: {
            ishave: no,
            totalBullet: 5
        },
        skinColor: true
    },
    {
        name: "M24",
        bullets: 5,
        extendedMag: {
            ishave: true,
            totalBullet: 7
        },
        skinColor: true
    },
]

console.log(`${gun}`);