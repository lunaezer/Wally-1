import { generarEspacio } from "./busqueda.js";

let listanombre = generarEspacio(100)

for(let i = 0; i<100; i++){
    if(listanombre[i] == "Wally"){
        console.log("Wally esta en " + i, listanombre[i])
    }
}
console.log("\nNombres que empiezan con W:");
for (let i = 0; i < listanombre.length; i++) {
  if (listanombre[i][0] === "W") {
    console.log(`Posición ${i}: ${listanombre[i]}`);
  }
}

console.log("\nNombres que contienen 'll':");
for (let i = 0; i < listanombre.length; i++) {
  if (listanombre[i].includes("ll")) {
    console.log(`Posición ${i}: ${listanombre[i]}`);
  }
}


