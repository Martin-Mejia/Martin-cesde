//let num1 = Number(prompt("Elije un número positivo"));
//let natural = 0;

//for (let i = 1; i <= num1; i++) {
    //natural += i;
//}

//document.write(`La suma de los ${num1} primeros números naturales es: ${natural}`);

//let nombre = prompt("¿Cuál es tu nombre?");
//let cantidad = parseInt(prompt("Ingrese la cantidad de notas que tienes: "));
//let sumanotas = 0;

//for (let i = 1; i <= cantidad; i++) {
    //let nota = parseFloat(prompt(`Ingrese la nota ${i}: `));
    //sumanotas += nota;
//}

//let promedio = sumanotas / cantidad;
//document.write(`El promedio de las notas de ${nombre} es: ${promedio.toFixed(2)}`);

//if (promedio >= 3) {
    //document.write("<br>¡Felicidades, has aprobado!");
//} else {
    //document.write("<br>Lo siento, has reprobado.");
//}

let contador = 0;
let suma = 0;

while (true){
   let inicio = prompt("Ingrse un numero entero (o escriba 'fin' para terminar):");
    if (inicio.toUpperCase() === 'fin') {
         break;

         let numero = parseInt(inicio);
         if (!isNaN(numero)) {
             contador++;
             suma += numero;
         }      
    }
}
document.write(`Cantidad de números ingresados: ${contador}<br>`);
document.write(`Suma total: ${suma}<br>`);