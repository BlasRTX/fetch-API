const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");

function getPokemon() {
    fetch('https://pokeapi.co/api/v2/ability/{id or name}/')
        .then(res => console.log(res))
}

getPokemon();