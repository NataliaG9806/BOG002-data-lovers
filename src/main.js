/*import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/

paginas ();

function paginas(){
    const buttonCharacters = document.getElementById("buttonCharacters");
    buttonCharacters.addEventListener('click', function(){
        document.getElementById("homePage").style.visibility = "hidden";
    }, false)

    const buttonHome = document.getElementById("buttonHome");
    buttonHome.addEventListener('click', function(){
        document.getElementById("homePage").style.visibility = "visible";
    }, false)

    const buttonSeasons = document.getElementById("buttonSeasons");
    buttonSeasons.addEventListener('click', function(){
        document.getElementById("homePage").style.visibility = "hidden";
    }, false)
}
