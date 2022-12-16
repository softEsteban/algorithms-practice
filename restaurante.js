/**
 * Algoritmo 7
 * Hacer un programa que registre el consumo realizado por los clientes de un restaurante,
 * si el consumo de cada cliente excede 50000 se hará un descuento del 20%. Se debe mostrar
 * el pago de cada cliente y el total de todos los pagos
 */

/**
 * Parámetros ( lista con el total de cada consumo )
 *
 * 1. Por cada total de consumo en la lista
 *    Validar si el consumo excede 50 000
 *    Si sí se cumple
 *      Obtener el 20% del consumo total
 *      Restar el porcentaje al consumo total
 *      El pago total es igual a el resultado de la resta anterior
 *    Si no
 *      El valor no se modifica
 *    Imprimir el valor total
 */
function calculatePayment(payments) {
  for (let i = 0; i < payments.length; i++) {
    if (payments[i] > 50000) {
      let discount = (payments[i] * 20) / 100;
      payments[i] -= discount;
    }
    console.log(`_______________________________`);
    console.log(`Client ${i + 1}`);
    console.log(`Total to pay: $${payments[i]}`);
  }
}
let payments = [56000, 150000, 25000, 1000];
calculatePayment(payments);
