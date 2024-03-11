function getElementoPorIndice(array, indice) {
    try {
      if (indice < 0 || indice >= array.length) {
        throw new Error("Índice fora do intervalo do array.");
      }
      return array[indice];
    } catch (error) {
      return error.message; // Retorna erro se o índice estiver fora do intervalo.
    }
  }
  
  // Exemplo de uso
  const Array = [1, 2, 3, 4, 5];
  console.log(getElementoPorIndice(Array, 2)); // Deve retornar 3
  console.log(getElementoPorIndice(Array, 6)); // Deve retornar "Índice fora do array."