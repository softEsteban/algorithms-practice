/**
 * Algoritmo 1
 * Un corredor de maratón (distancia 42,195 Km) ha recorrido la carrera en 2 horas 25 minutos. Se desea un
   algoritmo que calcule el tiempo medio en minutos por kilómetro.
 */

/**
 * Parámetros ( distancia en kilómetros, horas de recorrido, minutos de recorrido )
 *
 * 1. Convierte la cantidad de horas a minutos
 * 2. Suma la cantidad de horas en minutos a la cantidad de minutos
 * 3. Calcula la velocidad en kilómetros por minuto
 *
 * Retorna la velocidad en kilómetros por minuto
 */
function calculateMetersXMinute(distance, hours, minutes) {
  let hoursm = hours * 60;
  let totalTime = minutes + hoursm;

  let v = distance / totalTime;

  console.log(v + " m/min");
}

calculateMetersXMinute(45195, 2, 25);
