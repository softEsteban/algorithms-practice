/**
 * Algoritmo 5
 * Elaborar un algoritmo que permita ingresar 20 números y muestre todos los números menores e iguales a 25.
 */

/**
 * Parámetros ( lista de números )
 *
 * 1. Por cada número en la lista
 *    Validar si el número es menor o igual a 25
 *    Si se cumple la condición
 *      Se imprime el número
 */
function searchNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 25) {
      console.log(numbers[i]);
    }
  }
}
let numbers = [12, 32, 5, 69, 2, 25, 27, 9];
searchNumbers(numbers);
