function calcularExpressao(expressao) {
  try {
    const resultado = eval(expressao);
    if (isNaN(resultado)) {
      throw new Error("Expressão inválida.");
    }
    return resultado;
  } catch (error) {
    return error.message; // Retorna erro se a expressão for inválida.
  }
}

// Exemplos de uso:

console.log(calcularExpressao("11 + 11")); // Deve retornar 22
console.log(calcularExpressao("10 + (10 * 3)")); // Deve retornar 40
console.log(calcularExpressao("10 * 3-")); // Deve retornar "Expressão inválida."