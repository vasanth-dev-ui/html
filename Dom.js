let bioData: BioDataModel[] = [
    {
        name: "vasanth",
        fatherName: "chandran",
        DateOfBirth: "19-10-1997",
        age: 23,
        phone: "9003484181",
        gender: "male",
        nationality: "indian",
        experience: "1year"
    },
    {
        name: "tom",
        fatherName: "arok",
        DateOfBirth: "08-05-1998",
        age: 23,
        phone: "9944221144",
        gender: "male",
        nationality: "UAE",
        experience: "1.5year"
    },
    {
        name: "karthi",
        fatherName: "arok",
        DateOfBirth: "08-05-1998",
        age: 23,
        phone: "9944221144",
        gender: "male",
        nationality: "UAE",
        experience: "1.5year"
    },
    {
        name: "kumar",
        fatherName: "arok",
        DateOfBirth: "08-05-1998",
        age: 23,
        phone: "9944221144",
        gender: "male",
        nationality: "UAE",
        experience: "1.5year"
    }
];

let str = "fatherName"
for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i)
    if ((code >= 65) && (code <= 90)) {

        let a = str.substring(0, i)
        let b = str.substring(i)
        let c = a.concat(' ', b)
        break;

    }
}


// let d = "date Of Birth"
let gap = (data: string): string => {
    let e: string[] = data.split("");
    let index: number[] = [];
    e.forEach((el: string, i: number) => {
        if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
            index.push(i);
        }
    });
    index.forEach((el: number, i: number) => {
        e.splice(el + i, 0, ' ');
    });
    return e.join('');
}




function getBioData() {

    let displayData = bioData.map((el: BioDataModel) => {
        let obj = {
            name: el.name,
            dateOfBirth: el.DateOfBirth,
            gender: el.gender
        }
        return obj;
    }); // [{}, {}, {}]
    console.log(bioData)
    console.log(displayData);
    let headerKeys = Object.keys(displayData[0]); // ["name","age","gender"]
    console.log(headerKeys);
    let caps = headerKeys.map(el => gap(el).toUpperCase());
    console.log(caps);
    // for ()
    caps.forEach(el => {
        document.getElementById("header-data").innerHTML += `<td>${el}</td>`
    })

    for (let i = 0; i < displayData.length; i++) {
        //         document.getElementById("person").innerHTML +=
        //             `<p>My name is ${bioData[i].name} and my father name is ${bioData[i].nationality}, 
        //         I am at ${bioData[i].age}years old and my mobilr number is ${bioData[i].phone} than
        //          I am ${bioData[i].gender} and my nationality is ${bioData[i].nationality} and my 
        //          experience is ${bioData[i].experience}</p>`; // Template Literals

        document.getElementById("roommate-table").innerHTML +=
            `<tr class="color-me">
            <td> ${displayData[i].name}</td>
            <td> ${displayData[i].dateOfBirth}</td>
            <td> ${displayData[i].gender}</td>
        </tr>`
    }


}
