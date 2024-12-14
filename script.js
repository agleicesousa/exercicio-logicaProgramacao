document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botao");
  const titulo = document.getElementById("titulo");
  const inputTitulo = document.getElementById("inputTitulo");

  botao.addEventListener("click", () => {
    const novoTitulo = inputTitulo.value.trim();

    if (novoTitulo) {
      titulo.textContent = novoTitulo;
      alert("O título foi alterado com sucesso!");
    } else {
      alert("Por favor, digite um título válido.");
    }
  });
});
