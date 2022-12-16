/**
 * Algoritmo 6
 * Hacer un programa que sume 5 precios de camisas (en dólares) y que luego muestre el total de la venta en pesos.
 */

/**
 * Parámetros ( lista con el precio de las camisas, equivalencia 1 USD en COP )
 *
 * 1. Sumar todos los precios de las camisas
 * 2. Multiplicar el valor total por el precio de 1 USD en COP
 *
 * Retornar el valor total
 */
function calculatePrice(prices, dolarCop) {
  let sum = prices.reduce((a, b) => a + b, 0);
  let cost = sum * dolarCop;

  console.log(`The total cost of the products in COP is $${cost}`);
}
let prices = [25, 50, 12, 7, 5];
calculatePrice(prices, 4778);
