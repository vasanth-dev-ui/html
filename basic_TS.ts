import { TsAni } from './animal.model';

let animals: TsAni[] = [
    {
        id: 1,
        photo: "./1-LIONS.JPG",
        name: "lion",
        age: "2-years",
        price: 400
    },
    {
        id: 2,
        photo: "./Pond.jpg",
        name: "fish",
        age: "3-months",
        price: 100
    },
    {
        id: 3,
        photo: "./lion.JPG",
        name: "cat",
        age: "1.5-years",
        price: 200
    },

];


let sortData = (sortMyOrder: string, sortBy: string): void => {
    animals.sort((a: any, b: any) => {
        if (sortMyOrder === "asc") {
            return (a[sortBy] < b[sortBy]) ? -1 : (a[sortBy] > b[sortBy]) ? 1 : 0;
        }
        if (sortMyOrder === "dec") {
            return (a[sortBy] < b[sortBy]) ? 1 : (a[sortBy] > b[sortBy]) ? -1 : 0;
        }
    });
    animalCards();
}


let animalCards = (data?: TsAni[]): void => {
    if (data === undefined) {
        data = animals;
    }
    document.getElementById("first-card").innerHTML = "";
    data.forEach((el: TsAni, i: number) => {
        document.getElementById("first-card").innerHTML +=
            ` <div onclick="animalUpdate(${i})" class="card">
        < button onclick = "deleteObj(${i})" > X < /button>
            < img src = "${el.photo}" alt = "lion" >
                <div>
                <div>${el.name} </div>
                    < div > ${el.age} </div>
                        < div > ${el.price} </div>

                            < /div>
                            < /div>`
    });
}