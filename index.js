import { generarEspacio } from "./busqueda.js";

let lista_nombre = generarEspacio(100)

for(let i = 0; i<100; i++){
    if(lista_nombre[i] == "Wally"){
        console.log("Wally esta en" + i)
    }
}