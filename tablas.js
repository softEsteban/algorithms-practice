/**
 * Algoritmo 10
 * Realizar un algoritmo que muestre por pantalla la tabla de multiplicar
 * decreciente de cualquier número, ingresado entre el 1 y el 10.
 */

/**
 * Parámetros ( tabla a imprimir )
 *
 * 1. Definir una variable con el último index y que decrece
 * 2. Por cada uno de los indices del 1 al 10
 *    Imprimir la multiplicación del indice decreciente 
 *    Decrementar el indice

 */
function printMultiplyTable(number) {
  let lastIndex = 10;
  for (let i = 0; i < 10; i++) {
    console.log(`${number} X ${lastIndex} = ${number * lastIndex}`);
    lastIndex--;
  }
}
printMultiplyTable(8);
