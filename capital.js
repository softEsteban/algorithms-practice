/**
 * Algoritmo 4
 * Un capital C está situado a un tipo de interés R anual ¿al término de cuántos años se doblará?
 */

/**
 * Parámetros ( capital, interés )
 *
 * 1. Definir la variable que suma el interes cada año
 * 2. Difinir el contador de años
 * 3. Mientras la suma sea menor al capital
 *    Se adiciona el interés a la suma
 *    Se aumenta el contador con un año
 *
 * Retorna la suma total del contador de años
 */
function calculateDoubleCapitalInYears(capital, interest) {
  let interestAmount = 0;
  let years = 0;

  while (interestAmount < capital) {
    interestAmount += interest;
    years++;
  }

  console.log(
    `For $${capital} of capital with $${interest} yearly, it will double in  ${years} years`
  );
}

calculateDoubleCapitalInYears(1200000, 400000);
