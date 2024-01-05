/*Elementos a utilizar*/
const input = document.querySelector("input");
const button = document.querySelector("button");

/*Enviar la informacion relacionada al pokemon*/
const pokemonContainer = document.querySelector(".pokemon-container");


/*Espera/Escucha el click del boton e iniciara las funciones que debemos indicar(validar)*/
button.addEventListener("click", (e) => {
    e.preventDefault();
    getPokemon(input.value);

});


/*Obtener el resultado del pokemon seleccionado*/
/*Utilizando la funcion fetch, obtenemos la respuesta del URL y envia una request con respuesta con la informacion*/
function getPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((res) => res.json()) /*Indicar el formato para obtener la informacion*/
        .then((data) => {
            createPokemon(data);
        });
}


/*Crear la informacion del pokemon a mostrar en pantalla, tomando los valores del JSON*/
function createPokemon(pokemon) {
    /*Imagen del pokemon del JSON*/
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    /*Nombre del pokemon del JSON*/
    const h3 = document.createElement("h3");
    h3.textContent = pokemon.name;

    /*Div para juntar elementos creados*/
    const div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.appendChild(div);

}


