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

function verificarAptidao() {
  const nome = document.getElementById("nome").value.trim();
  const idade = parseInt(document.getElementById("idade").value);
  const resultado = document.getElementById("resultado");

  if (!nome) {
    resultado.textContent = "Por favor, informe seu nome.";
    return;
  }

  if (isNaN(idade) || idade <= 0) {
    resultado.textContent = "Por favor, informe uma idade válida.";
    return;
  }

  let mensagem = `${nome}, com ${idade} anos, você `;

  if (idade < 16) {
    mensagem += "não está apto(a) a votar.";
  } else if ((idade >= 16 && idade < 18) || idade > 70) {
    mensagem += "pode votar, mas é opcional.";
  } else {
    mensagem += "está apto(a) a votar obrigatoriamente.";
  }

  resultado.textContent = mensagem;
}
