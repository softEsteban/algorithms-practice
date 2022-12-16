/**
 * Algoritmo 2
 * Realizar la conversión de una temperatura dada en grados Centígrados a grados Fahrenheit
 * (Fórmula: F = (9/5) C + 32)
 */

/**
 * Parámetros ( temperatura en grados centígrados )
 *
 * 1. Multiplica la temperatura por 9/5
 * 2. Suma 32 al resultado anterior
 *
 * Retorna la temperatura en grados Fahrenheit
 */
function calculateFarenheit(temp) {
  let step = temp * (9 / 5);

  let tempF = step + 32;

  console.log(tempF + " °F");
}

calculateFarenheit(2);
