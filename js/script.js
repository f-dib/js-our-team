let resultElement = document.querySelector("#result");

// Creo un oggetto con i dati di tutti i componenti del team
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

// Richiamo funzione e la utilizzo

showObj (team);















// Creo una funzione che permetta di mostrare a schermo i dati presenti negli oggetti

function showObj (obj){


    for (let i = 0; i < obj.length; i++) {
        
        const eachCard = obj[i];
        let text = "";

        for (let key in eachCard) {

            text += `${key}: ${eachCard[key]} `;

        }

        resultElement.innerHTML += `<li>${text}</li>`;

    }


}
