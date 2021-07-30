let gun = [
    {
        name: "M416",
        gunType: "asault",
        isSniper: false,
        bullets: 30,
        extendedMag: {
            ishave: true,
            totalBullet: 40
        },
        skinColor: true,
        attchment: ["extenalmag", "grip", "supressor"]
    },
    {
        name: "Akm",
        gunType: "asalut",
        isSniper: false,
        bullets: 30,
        extendedMag: {
            ishave: true,
            totalBullet: 40
        },
        skinColor: false
    },
    {
        name: "UMP45",
        gunType: "asalut",
        isSniper: false,
        bullets: 25,
        extendedMag: {
            ishave: true,
            totalBullet: 35
        },
        skinColor: true
    },
    {
        name: "DP-28",
        gunType: "asalut",
        isSniper: false,
        bullets: 47,
        extendedMag: {
            ishave: false,
            totalBullet: 47
        },
        skinColor: false
    },
    {
        name: "M249",
        gunType: "asalut",
        isSniper: false,
        bullets: 75,
        extendedMag: {
            ishave: true,
            totalBullet: 150
        },
        skinColor: true
    },
    {
        name: "Kar98",
        gunType: "sniper",
        isSniper: true,
        bullets: 5,
        extendedMag: {
            ishave: false,
            totalBullet: 5
        },
        skinColor: true
    },
    {
        name: "M24",
        gunType: "sniper",
        isSniper: true,
        bullets: 5,
        extendedMag: {
            ishave: true,
            totalBullet: 7
        },
        skinColor: true
    },
]

console.log(gun);
function display() {
    document.getElementById("demo").innerHTML = gun[0].name;
    document.getElementById("demo").innerHTML = gun[1].name;
}
// display();
// console.log(gun[0].name);
// console.log(gun[1].name);
// console.log(gun[2].name);
// console.log(gun[3].name);
// console.log(gun[4].name);

let bag = [];
// data = push.gun[0].name;
// console.log(data);

    for (let i = 0; i < gun.length; i++) {
        if (gun[i].bullets > 30) {
            bag.push(gun[i].name);
        }
    if (gun[i].extendedMag.ishave) {
        console.log(gun[i].name);
    }
    // console.log(gun[i].name);
}
console.log(bag);

// for (let i = 0; i < gun.length; i++) {
//     if (gun[i].extendedMag.ishave) {
//         console.log(gun[i].name);
//     }

// }
