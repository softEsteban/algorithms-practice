/**
 * Algoritmo 3
 * Escribir el algoritmo que permite calcular la nota correspondiente al primer parcial de “análisis” para un
 * estudiante cualquiera. Se debe considerar que hay dos talleres y un quiz, que en conjunto valen un 30%
 * de la nota y el resto (70%) corresponde a la nota del examen parcial.
 */

/**
 * Parámetros ( array con las tres notas, nota del parcial )
 *
 * 1. Sumar las tres primeras notas
 * 2. Didivir el anterior resultado por 3
 * 3. Extrar el 30% del anterior resultado
 *    Multiplicar por 30
 *    Dividir por 100
 * 4. Extrar el 70% de la nota del parcial
 *    Multiplicar por 70
 *    Dividir por 100
 * 5. Sumar ambas cantidades obtenidas
 *
 * Retorna la nota final
 */
function calculateGrades(grades, final) {
  let sum = grades.reduce((a, b) => a + b, 0);
  let step = sum / 3;

  let firstPer = (step * 30) / 100;
  let secondPer = (final * 70) / 100;

  let finalGrade = firstPer + secondPer;
  console.log(finalGrade);
}
let grades = [5.0, 4.5, 4.0];
calculateGrades(grades, 3.2);
