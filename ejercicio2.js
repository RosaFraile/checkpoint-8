// Cree un bucle while que recorra la misma lista y también imprima los nombres.
//Nota: Recuerda crear un contador para que el ciclo no sea infinito.

const miLista = ["velma", "exploradora", "jane", "john", "harry"];

let index = 0;
while(index < miLista.length) {
    console.log(miLista[index]);
    index++;
}

//-Cree una función de flecha que devuelva "Hola mundo".