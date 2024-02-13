let resultElement = document.querySelector("#result");

// I create an object with the data of all team members
const team = [

    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];

// I call up the function and use it

showObj (team);















// I create a function that allows you to show the data present in the objects on the screen

function showObj (obj){

    // I open a loop that takes every single element present in the object and displays it
    for (let i = 0; i < obj.length; i++) {
        
        const eachCard = obj[i];
        let photo = "";
        let name = "";
        let role = "";

        // I open a cycle that allows me to sort the data and connect it to the elements on the page 
        for (let key in eachCard) {
            if (key === "foto") {
                photo += `<img class="card-img-top" src="./img/${eachCard[key]}">`;
            } else if (key === "nome") {
                name += `<h5 class="font">${eachCard[key]}</h5>`;
            } else {
                role += `<div class="font small">${eachCard[key]}</div>`;
            }
        }

        // I show the results obtained on the page
        resultElement.innerHTML += `<div class="col-12 col-sm-6 col-lg-4 mb-4">       
                                        <div class="card border-0">
                                            ${photo}
                                            <div class="card-body">
                                                ${name}
                                                ${role}
                                            </div>
                                        </div>
                                    </div>`;

    }


}
