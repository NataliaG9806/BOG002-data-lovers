/*import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/

document.getElementById("buttonHome").addEventListener('click', function () {
    document.querySelector(".homePage").style.visibility = "visible";
}, false)

document.getElementById("buttonCharacters").addEventListener('click', function () {
    document.querySelector(".homePage").style.visibility = "hidden";
}, false)

document.getElementById("buttonSeasons").addEventListener('click', function () {
    document.querySelector(".homePage").style.visibility = "hidden";
}, false)
