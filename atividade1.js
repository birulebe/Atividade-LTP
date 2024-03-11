function dividir(a, b) {
    try {
      if (b === 0) {
        throw new Error("Não é permitido divisão por 0.");
      }
      return a / b;
    } catch (error) {
      return error.message; // Retorna erro se b for 0.
    }
  }
  
  // Exemplos de uso:

  console.log(dividir(20, 4)); // Deve retornar o valor 5
  console.log(dividir(5, 0)); // ira retornar "Não é permitido divisão por 0."