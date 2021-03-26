//import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
let start = 0;
let end = 50;
let dataSearch;
let cross;

const rickandmorty = async () => {
  const container = document.querySelector('.container');
  container.innerHTML = data.results.map((item) => `
        <div class="card">
            <button class="cardImage">
                <img src="${item.image}" />
            </button>
            <h1 class="nameCard">${item.name}</h1>
        </div>
        `).join("");
};
rickandmorty()
window.onbeforeunload = completo();

document.getElementById("buttonCharacters").addEventListener("click", completo)

function completo() {
  dataSearch = data.results;
  start = 0;
  end = 50;
  rickandmorty()
  page()
  //console.log("entro recarga")
}

document.querySelector(".more").addEventListener("click", more);

function more() {
  if (end < (dataSearch.length)) {
    start = start + 50;
    end = end + 50;
    cross = 1;
  } else {
    cross = 0;
  }
  console.log("entra mas");
  page()
}
document.querySelector(".less").addEventListener("click", less);

function less() {
  if (start > 1) {
    start = start - 50;
    end = end - 50;
    cross = 1;
  } else {
    cross = 0;
  }
  console.log("entra menos");
  page()
}

function page() {
  const container = document.querySelector('.container');
  console.log("entra page");
  container.innerHTML = dataSearch.slice(start, end).map((item) => `
        <div class="card">
        <button class="cardImage">
            <img src="${item.image}" />
        </button>
        <h1 class="nameCard">${item.name}</h1>
    </div>
    `).join("");
  console.log(start, end);
  if (cross === 1) {
    window.scrollTo(0, 0)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".searchLetter").addEventListener("submit", validateLetter);
});

function validateLetter(event) {
  start = 0;
  end = 50;
  event.preventDefault();
  const letterSearch = document.querySelector(".az");
  const letter = letterSearch.value.toUpperCase();
  //console.log(letter)
  if (letter) {
    const rickandmorty = () => {
      const container = document.querySelector('.container');
      dataSearch = data.results.filter((Characters) => Characters.name.split("")[0] === letter)
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

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".Specie").addEventListener("change", filterSpecies);
});

function filterSpecies(event) {
  start = 0;
  end = 50;
  event.preventDefault();
  const Specie = document.querySelector(".Specie");
  const SelectedSpecie = Specie.options[Specie.selectedIndex].value;
  //console.log(SelectedSpecie);

  if (SelectedSpecie) {
    const rickandmorty = () => {
      if (SelectedSpecie === "Especies") {
        completo()
      } else {
        const container = document.querySelector('.container');
        dataSearch = data.results.filter((Character) => Character.species === SelectedSpecie)
        container.innerHTML = dataSearch.map((item) => `
        <div class="card">
        <button class="cardImage">
            <img src="${item.image}" />
        </button>
        <h1 class="nameCard">${item.name}</h1>
    </div>
    `).join("");
      }
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
