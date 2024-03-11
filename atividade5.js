try {
    const elemento = document.getElementById("elemento-inexistente");
    console.log(elemento.textContent); // Tentativa de acessar a propriedade textContent do elemento inexistente
  } catch (error) {
    console.error("O elemento não foi encontrado:", error.message); // Lidando com o erro
  }