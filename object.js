// let onePlus = {
//     Display: "amoled edge",
//     model: "7pro",
//     chargetype: "c - typeOf"
// };
// let value = (onePlus.Display)


let stud = [
    {
        name: "kumar",
        rollNo: 545,
        age: 22,
        gender: "male",
        mark: 410,
        covidRes: "nagative",
        getVaccinate: true,
        hospital: "private",
        state: "kl"
    },
    {
        name: "siva",
        rollNo: 546,
        age: 22,
        gender: "male",
        mark: 420,
        covidRes: "Positive",
        getVaccinate: false,
        hospital: "govt",
        state: "ka"
    },
    {
        name: "ponnu",
        rollNo: 547,
        age: 20,
        gender: "female",
        mark: 430,
        covidRes: "negative",
        getVaccinate: true,
        hospital: "private",
        state: "tn"
    },
    {
        name: "girl",
        rollNo: 548,
        age: 24,
        gender: "female",
        mark: 450,
        covidRes: "Positive",
        getVaccinate: false,
        hospital: "private",
        state: "tn"
    },
    {
        name: "raja",
        rollNo: 549,
        age: 23,
        gender: "male",
        mark: 360,
        covidRes: "Positive",
        getVaccinate: false,
        hospital: "govt",
        state: "kl"
    },
    {
        name: "sarasu",
        rollNo: 550,
        age: 22,
        gender: "female",
        mark: 390,
        covidRes: "Positive",
        getVaccinate: false,
        hospital: "govt",
        state: "tn"
    },
    {
        name: "beem",
        rollNo: 551,
        age: 19,
        gender: "male",
        mark: 460,
        covidRes: "Positive",
        getVaccinate: true,
        hospital: "private",
        state: "tn"
    },
    {
        name: "kaaliya",
        rollNo: 552,
        age: 24,
        gender: "male",
        mark: 460,
        covidRes: "negative",
        getVaccinate: false,
        hospital: "private",
        state: "ka"
    }
];
// let doc = (stud[].name, stud.rollNo, stud.age, stud.mark);
// console.log(`doc(student ${stud.name}, $(stud.rollNo) and his / her age ${stud.age}then their mark ${stud.marks}`);

// function vacinated(a) {
//    return (a === true) ? 'yes' : 'no';
// }
let vacinated = (a) => (a === true) ? 'yes' : 'no';

stud.forEach((el) => {
    console.log(`${el.name} ${vacinated(el.getVaccinate)}`);
});

for (let i = 0; i < stud.length; i++) {
    console.log(`${stud[i].name} ${vacinated(stud[i].getVaccinate)}`);
}

// let covid = vacinated(stud[7].getVaccinate);
// console.log(covid)
