//import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
let start=0;
let end=50;
let dataSearch;

const rickandmorty = async () => {
    const container = document.querySelector('.container') ;
    container.innerHTML = data.results.map((item) => `
        <div class="card">
            <button class="cardImage">
                <img src="${item.image}" />
            </button>
            <h1 class="nameCard">${item.name}</h1>
        </div>
        `).join("");
        //page();
};
completo()

document.getElementById("buttonCharacters").addEventListener("click", completo)

function completo () {
    dataSearch=data.results;
    start=0;
    end=50;
    rickandmorty()    
    page()
}

document.querySelector(".more").addEventListener("click", more);

function more(){
    if(end<(400) ){
        start=start+50;
        end=end+50;
    }    
    rickandmorty()
    console.log("entra mas");
}
document.querySelector(".less").addEventListener("click", less);
function less(){
    if (start>50){
        start=start-50;
        end=end-50;
    } 
    rickandmorty()
    console.log("entra menos");
}

function page(){
    const container = document.querySelector('.container') ;
    console.log("entra page");
    container.innerHTML = dataSearch.slice(start,end).map((item) => `
        <div class="card">
        <button class="cardImage">
            <img src="${item.image}" />
        </button>
        <h1 class="nameCard">${item.name}</h1>
    </div>
    `).join("");
    console.log(start,end);
    //rickandmorty()
}

document.addEventListener("DOMContentLoaded", function (){
document.querySelector(".searchLetter").addEventListener("submit", validateLetter);
});

function validateLetter (event) {
    start=0;
    end=50;
    event.preventDefault();
    const letterSearch = document.querySelector(".az");
    const letter = letterSearch.value.toUpperCase();
    //console.log(letter)
    if (letter){
        const rickandmorty = () => {
        const container = document.querySelector('.container') ;
        dataSearch  = data.results.filter((Characters) => Characters.name.split("")[0] === letter) 
        console.log(dataSearch);
        container.innerHTML = dataSearch.map((item) => `
        <div class="card">
        <button class="cardImage">
            <img src="${item.image}" />
        </button>
        <h1 class="nameCard">${item.name}</h1>
    </div>
    `).join("");
    }
    rickandmorty()
    page()
    }
}

document.addEventListener("DOMContentLoaded", function (){
document.querySelector(".Specie").addEventListener("change", filterSpecies);
});

function filterSpecies (event) {
    start=0;
    end=50;
    event.preventDefault();
    const Specie = document.querySelector(".Specie"); 
    const SelectedSpecie = Specie.options[Specie.selectedIndex].value;
    console.log(SelectedSpecie);

    if (SelectedSpecie){
        const rickandmorty = () => {
        const container = document.querySelector('.container') ;
        dataSearch  = data.results.filter((Character) => Character.species === SelectedSpecie)    
        container.innerHTML = dataSearch.map((item) => `
        <div class="card">
        <button class="cardImage">
            <img src="${item.image}" />
        </button>
        <h1 class="nameCard">${item.name}</h1>
    </div>
    `).join("");
    }
    rickandmorty()
    page()
    }
}
/*
const wrapper = document.querySelector(".popUpWrapper");

document.querySelector(".cardImage").map((position) => position.addEventListener("click", popUp));

function popUp () {
    wrapper.style.display = 'block'; 
    alert("Entró");
    // console.log("entro");
}

document.querySelector(".closePopUp").addEventListener("click", closePopUp);

function closePopUp () {
    wrapper.style.display = 'none';   

}*/



