/**
 * Suma dos números.
 * @param {number} a - Primer sumando.
 * @param {number} b - Segundo sumando.
 * @returns {number} La suma de a y b.
 */
function sumar(a, b) {
  return a + b;
}

/**
 * Divide dos números.
 * @param {number} a - Dividendo.
 * @param {number} b - Divisor (no puede ser 0).
 * @returns {number} El resultado de a entre b.
 * @throws {Error} Si el divisor es 0.
 */
function dividir(a, b) {
  if (b === 0) throw new Error("No se puede dividir entre 0");
  return a / b;
}

module.exports = { sumar, dividir };