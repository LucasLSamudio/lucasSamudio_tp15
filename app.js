const movies = require("./peliculas.js")
const converMinToHour = require("./funcAux.js");

for(let i=0; i<movies.length; i++){  
    console.log("ID de la película:",movies[i].id);
    console.log("Nombre de la película:",movies[i].name);
    console.log("Duración de la película:",converMinToHour(movies[i].length));
    console.log("Género de la película:",movies[i].genre);
    console.log("Calificación del público general de la película: "+movies[i].rating+" / 5.00");
    console.log("Precio de la película: $"+movies[i].price);
    console.log("Cantidad de premios de la película:",movies[i].awards,"\n\n----------------------------------\n");
}

// ---------------------------------------------

const fs = require("fs"); // Requiero el paquete File System que me permitirá leer archivos txt.
const msj = fs.readFileSync("./mensaje.txt", "utf-8");  // Declaro constante que utiliza la función readFileSync 
                                                        // 1er parámetro le paso la ubicación del txt
                                                        // 2do parámetro le paso el encoding, vulgarmente hablando, el formato en el que quiero leerlo
console.log(msj);