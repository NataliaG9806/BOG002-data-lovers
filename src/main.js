//import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

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

document.querySelector(".az").addEventListener("click", function () {
        container.innerHTML = data.results.map((item) => `
            <div class="card">
                <button class="cardImage">
                    <img src="${item.image}" />
            </button>
            <h1 class="nameCard">${item.name}</h1>
            </div>
        `).join("");        
},false);
}
rickandmorty();