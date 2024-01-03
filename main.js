/*Elementos a utilizar*/
const input = document.querySelector("input");
const button = document.querySelector("button");

/*Enviar la informacion relacionada al pokemon*/
const pokemonContainer = document.querySelector(".pokemon-container");

/**/
function getPokemon() {
    fetch('https://pokeapi.co/api/v2/ability/charmander/')
        .then((res) => res.json)
        .then((data) => console.log(data))
}


/*Crear la informacion del pokemon a mostrar en pantalla, tomando los valores del JSON*/
function createPokemon(pokemon) {
    /*Imagen del pokemon del JSON*/
    const img = document.createElement('img');
    img.scr = pokemon.sprites.front_default;

    /*Nombre del pokemon del JSON*/
    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    /*Div*/
    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

}

getPokemon();