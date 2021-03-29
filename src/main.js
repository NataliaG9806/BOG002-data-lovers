import {  filterData, sortData, computeStats} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//variables globales
let start;
let end;
let dataSearch;
let cross;
const container = document.querySelector('.container');

window.onload = complet(); //cada vez que se recargue la pagina

function complet() {
  dataSearch = data.results; //llama data completa
  start = 0;
  end = 50;
  page()
}

//funcion de paginacion
function page() {
  //console.log("entra page");
  let dataSlice = dataSearch;
  container.innerHTML = dataSlice.slice(start, end).map((item) => `
  <div class="card">
  <button class="cardImage">
      <img src="${item.image}" />
      <h1 class="nameCard">${item.name}</h1>
  </button>        
</div>
    `).join("");
  //console.log(start, end);
  if (cross === 1) {
    window.scrollTo(0, 0);
  }
  moreInfo()
}

//funcion mirar info especifica de cada personaje
function moreInfo() {
  const buttonsCharacter = document.querySelectorAll(".cardImage");
  const wrapper = document.querySelector(".popUpWrapper");
  //console.log(buttonsCharacter.length)
  buttonsCharacter.forEach((element, index) => element.addEventListener("click", function () {
    clickSelected(index)
  }));

  function clickSelected(index) {
    wrapper.style.display = 'block';
    document.querySelector(".name").textContent = dataSearch[index + start].name;
    document.querySelector(".species").textContent = dataSearch[index + start].species;
    document.querySelector(".origin").textContent = dataSearch[index + start].origin.name;
    document.querySelector(".location").textContent = dataSearch[index + start].location.name;
    document.querySelector(".image").src = dataSearch[index + start].image;
  }

  document.querySelector(".closePopUp").addEventListener("click", hidePopUp)

  function hidePopUp() {
    wrapper.style.display = 'none';
  }
}

//funcion buscar personajes por letra
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".searchLetter").addEventListener("submit", validateLetter);
});

function validateLetter(event) {
  start = 0;
  end = 50;
  event.preventDefault();
  const letterSearch = document.querySelector(".az");
  const letter = letterSearch.value.toUpperCase();
  if (letter) {
    dataSearch = data.results.filter((Characters) => Characters.name.split("")[0] === letter)
    page()
  }
}

//funcion ordenar de A-Z o Z-A
document.querySelector(".organizarAZ").addEventListener("click", function () {
  const way = 1;
  ordenar(way)
});

document.querySelector(".organizarZA").addEventListener("click", function () {
  const way = -1;
  ordenar(way)
});

function ordenar(way) {
  start = 0;
  end = 50;
  const NewArray = sortData(dataSearch, way);
  dataSearch = NewArray;
  page()
}

//filtrar por especies
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".Specie").addEventListener("change", filterSpecies);
});

function filterSpecies(event) {
  start = 0;
  end = 50;
  event.preventDefault();
  const Specie = document.querySelector(".Specie");
  const SelectedSpecie = Specie.options[Specie.selectedIndex].value;
  if (SelectedSpecie) {
    dataSearch = filterData(data.results, SelectedSpecie);
    page()
  }
}

//funcion calcular
document.querySelector(".calculate").addEventListener("click", calculate)

function calculate (){
  const wrapper = document.querySelector("#popUpWrapperCalculate");
  wrapper.style.display = 'block';
  const valueCalculate = computeStats(dataSearch);
  document.querySelector(".Total").textContent = (dataSearch.length);
  document.querySelector(".Alive").textContent = (+valueCalculate.Alive+ " %");
  document.querySelector(".Dead").textContent = (+valueCalculate.Dead+ " %");
  document.querySelector(".unknown").textContent = (+valueCalculate.unknown+ " %");
  //console.log(valueCalculate)

  document.querySelector("#ClosePopUpWrapperCalculate").addEventListener("click", hidePopUp)

  function hidePopUp() {
    wrapper.style.display = 'none';
  }
}

//funcion paginacion botones mas y menos paginas
document.querySelector(".more").addEventListener("click", more);

function more() {
  if (end < (dataSearch.length)) {
    start = start + 50;
    end = end + 50;
    cross = 1;
  } else {
    cross = 0;
  }
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
  page()
}
