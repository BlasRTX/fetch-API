# Fetch API JavaScript

### Introducción
No siempre tenemos el tiempo o los conocimientos necesarios para crear un servicio web propio, o un API REST con el que realizar pruebas con nuestros datos.

Por lo que **existen diversos servicios web públicos** desde los que podemos obtener información y así realizar esas **prácticas de consumo de API manera sencilla**, al menos sin complicarnos con la parte de desarrollar la propia API.

## API
Sus siglas del inglés: **Application Programming Interfaces** (Interfaz de Programación de Aplicaciones API).

Las API son mecanismos que **permiten a 2 componentes de software comunicarse entre sí** mediante un conjunto de protocolos y definiciones de las aplicaciones y webs actuales.

#### ¿Para qué sirve una API?
**Permitir la comunicación y la interacción entre sistemas, aplicaciones y servicios de software** promoviendo la inter polaridad entre diferentes plataformas, gestionar seguridad y acceso a los datos, entre otros.

#### Tipos de API
Cada API que se crea o utilizar, tiene una estructura en la cual deba ser utilizada para trabajar.

* **Privada:** Internas de una empresa, que funciona para habilitar sistemas dentro de la misma.

* **Pública:** Abiertas al público y cualquiera puede acceder a utilizar su información. Por lo general no requieren utilizar permisos de autentificación y no posee un gasto monetario asociado. **Este tipo de API se dará mas enfoque**.

* **Empresa:** Único acceso a personas externas autorizadas por las empresas para trabajos remotos.

Aunque esto es a modo de resumir algunos conceptos que engloban mucho más el cómo es una API realmente, es fundamental tener noción básica para seguir con los siguientes pasos.

## Descripción herramientas de trabajo:

![ ](https://github.com/BlasRTX/fetch-API/blob/main/img/logo/LogoUn.png)

Describir las diferentes herramientas utilizadas, como IDE, frameworks, entre otros:
* **Visual Studio Code**
* **HTML**
* **JavaScript**
* **Bootstrap**
* **API Pública**

#### Visual Studio Code
Editor de código fuente gratuito que **permite trabajar con diversos lenguajes de programación**, admite gestionar tus propios atajos de teclado y refactorizar el código.

#### HTML
Es el componente más básico para desarrollo web. No es un lenguaje como tal, pero **define el significado y la estructura dentro del contenido web**.

#### JavaScript
Es un **lenguaje de programación** de scripts para añadir funcionalidades interactivas y otros contenidos web dinámicos a las páginas web. 

Algunos ejemplos conocidos de contenido en JavaScript son los formularios rellenables, las presentaciones de galerías de fotos y los gráficos animados.

* **Fetch API:** La API Fetch se puede utilizar para **hacer solicitudes de recursos tales como texto, imágenes, archivos JSON**, entre otros, y devolverlos como objetos JavaScript que pueden ser utilizados en la aplicación.

#### Bootstrap
Es un framework que permite a los desarrolladores web **construir páginas web de una forma más rápida y sencilla**. 

En este sentido, proporciona un **conjunto de componentes** y plantillas CSS, HTML y JavaScript que cualquiera puede utilizar o modificar de manera gratuita.

#### API Pública
API **disponible para todo público** u desarrollo práctico externo y no esta limitada a restricciones de seguridad que son establecidas por el proveedor directo de la API.

Suelen tener documentación detallada que describe como ser utilizadas.


## Desarrollo
Para trabajar con una API es principal **seleccionar una** de las difernetes alternativas disponibles con las que puedes hacer todo tipo de pruebas y desarrollar prototipos de aplicaciones backend o frontend.

```
Enlaces API Pública 
https://www.themoviedb.org
https://pokeapi.co
https://dog.ceo/dog-api/
https://jsonplaceholder.typicode.com
https://api.nasa.gov
```

#### 1. Seleccionar API

PokeAPI posee una **documentación muy bien detallada** para que aprendas a consumirla. 

Además, tiene mucha **información de los Pokémon** como sus movimientos, habilidades, tipos, poderes, habitad y más.

Con esta API **puedes crear fácilmente una pókedex**. Link: https://pokeapi.co

![ ](https://github.com/BlasRTX/fetch-API/blob/main/img/pokeapi/1.png)

Si realizamos una petición con la información real del Pokémon, el resultado es un tanto enorme.

![ ](https://github.com/BlasRTX/fetch-API/blob/main/img/pokeapi/3%20JSON%20Pokemon%20Ditto.png)

#### 2. VS Code
En VS Code iniciamos creando una carpeta en donde estaremos trabajando los archivos para en una pagina web que

![ ](https://github.com/BlasRTX/fetch-API/blob/main/img/VS%20code%20folder/VS%20Code%20folder.png)

index.html

```html
    <!--Div principal-->
    <div class="container">
        <div class=" text-center">
            <img class="card-img-md text-center" src="/img/pokeapi_256.png">
        </div>
        <h2 class="text-center">Bienvenido</h2>
        <!--Inicio Formulario Basico-->
        <div class="container text-center col-md-3">
            <form>
                <label for="nombreP" class="form-label">Ingresar nombre Pokemon</label>
                <input class="form-control" type="text" id="nombreP" placeholder="Pokemon....">
                <div class="form-text">Nota: Puede utilizar numero de Pokedex.</div>
            </form>
            <!--Fin Formulario Basico-->
            <button type="submit" class="btn btn-primary">Buscar</button>
        </div>
    </div>
```

#### 3. JavaScript
Usaremos un punto de acceso (End Point) para poder hacer una petición a una API, es decir, una ruta que nos permitirá acceder a la API.

Documentación para el uso de Fetch: https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

main.js
```javascript
/*Elementos a utilizar*/
const input = document.querySelector("input");
const button = document.querySelector("button");

/*Enviar la informacion relacionada al pokemon*/
const pokemonContainer = document.querySelector(".pokemon-container");
```
Consumir API con JavaScript Fethc.


![ ](https://github.com/BlasRTX/fetch-API/blob/main/img/pokeapi/2.png)

Nos permitirá realizar peticiones y respuestas HTTP.

```javascript
/*Obtener el resultado del pokemon seleccionado*/
/*Utilizando la funcion fetch, obtenemos la respuesta del URL y envia una request con respuesta con la informacion*/
function getPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((res) => res.json())
        .then((data) => { createPokemon(data); });
}
```
Obtener elementos del JSON y agregarlos en HTML:

```javascript
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

    pokemonContainer.appendChild(div);

}
```


#### 4. Resultado final

![ ](https://github.com/BlasRTX/fetch-API/blob/main/img/result/1.png)


![ ](https://github.com/BlasRTX/fetch-API/blob/main/img/result/2.png)


![ ](https://github.com/BlasRTX/fetch-API/blob/main/img/result/3.png)


#### 5. Pruebas
El objetivo principal es comprobar la respuesta de datos en el servidor, pese a no utilizar metodologías para pruebas de software.


Prueba funcional que fetch estaba recibiendo el JSON del pokemon seleccionado

![ ](https://github.com/BlasRTX/fetch-API/blob/main/img/test/test%202.png)

Error de sintaxys en HTML, no obtenia los valores completos del JSON de la imagen

![ ](https://github.com/BlasRTX/fetch-API/blob/main/img/test/test%203.png)

## Conclusión
Hemos visto el funcionamiento de una API, más allá de entender la teoría de que es.

Lo más importante es también llevar a la práctica el cómo podemos usarlo en el caso de PokeAPI, existen más APIs de uso público con las que practicar.

Es recomendable probar todas y ver **cual es la que más se adapte a tus necesidades**.

Por lo general, cuando se crea o utiliza un software (página web, app móvil, etc), este mismo necesita consumir datos.

Estos datos provienen de una API, para ser consumidos y presentados a un cliente.
