/*
    Viene fornito un file js in cui è definito un array 
    di oggetti che rappresentano i membri del team.
    Ogni membro ha le informazioni necessarie per stampare 
    le relative informazioni: Nome, Ruolo e Foto.
*/

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

// Stampare su console le informazioni di nome, ruolo e la stringa della foto



for (const key in team) {
    console.log(team[key]);

}

// stampare le stesse informazioni su DOM sottoforma di stringhe


const rowElement = document.querySelector('.row');


for (let i = 0; i < team.length; i++) {
    console.log(team[i]);
    let element = team[i];

    let markUp = `<div class="col-4">
        <div class="card d-flex text-center rounded m-3 p-3"><h3>${element.name}</h3><h4> ${element.role}</h4>
        <img height="300 "src="./assets/img/${element.image}" class="rounded" alt=""></div>
    </div>`
    rowElement.insertAdjacentHTML('beforeend', markUp)
}