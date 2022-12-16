/**
 * Algoritmo 8
 * Diseñar un algoritmo que permita ingresar la hora, minutos y segundos, y que calcule la hora en el siguiente
 * segundo ("0<= H <=23", "0<= M <=59" "0<= S<=59").
 */

/**
 * Parámetros ( horas, minutos, segundos )
 *
 * 1. Validar si es el cambio de día
 * 2. Validar si es el cambio de hora
 * 3. Validar si es el cambio de minuto
 * 4. Valida si es el incremento del segundo
 *
 * Retorna la hora en el siguiente segundo
 */
function getNextHour(hours, minutes, seconds) {
  console.log(`From ${hours}:${minutes}:${seconds}`);
  if (seconds == 59 && minutes == 59 && hours == 23) {
    seconds = 0;
    minutes = 0;
    hours = 0;
  } else if (seconds == 59 && minutes == 59) {
    seconds = 0;
    minutes = 0;
    hours += 1;
  } else if (seconds == 59) {
    seconds = 0;
    minutes += 1;
  } else {
    seconds += 1;
  }
  console.log(`To ${hours}:${minutes}:${seconds}`);
  console.log(`______________________________`);
}

//Test cases
let hoursCases = [
  [23, 59, 59], //0, 0, 0
  [0, 0, 0], //0, 0, 1
  [23, 2, 59], //23, 3, 0
  [23, 59, 0], //23, 59, 1
  [22, 59, 59], //23, 0, 0
];

for (let i = 0; i < hoursCases.length; i++) {
  getNextHour(hoursCases[i][0], hoursCases[i][1], hoursCases[i][2]);
}
