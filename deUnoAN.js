/**
 * Algoritmo 9
 * Dado N, escribir el producto desde 1 hasta N.
 */

/**
 * Parámetros ( repeticiones )
 *
 * 1. Inicializa la variable que guardará los números
 * 2. Por cada una de las repeticiones
 *    Realizar un push al array de números con el valor del itereador + 1
 * 3. Por cada núemro en array de números
 *    Valida si es la primera posición
 *    Si sí:
 *      Multiplica la primera posición por el iterador + 1
 *    Valida si es la última posición
 *    Si sí:
 *      No hace nada
 *    Si no:
 *      Multiplica el valor actual del acumulador por el iterador + 1
 *
 * Retorna el acumulado
 */
function printRepetitions(n) {
  let numbers = [];
  for (let i = 0; i < n; i++) {
    numbers.push(i + 1);
  }
  let multi = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i == 0) {
      multi = numbers[i] * numbers[i + 1];
    } else if (i == numbers.length - 1) {
    } else {
      multi = multi * numbers[i + 1];
    }
  }
  console.log(`${multi}`);
}
printRepetitions(5);
