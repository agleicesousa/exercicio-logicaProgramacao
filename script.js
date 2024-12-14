document.addEventListener("DOMContentLoaded", criarAlunos);

function alterarTitulo() {
  const inputTitulo = document.getElementById("inputTitulo").value.trim();
  const titulo = document.getElementById("titulo");

  if (inputTitulo) {
    titulo.textContent = inputTitulo + " ✨✨✨ (com um toque de magia!)";
    alert("🎨 Título transformado! Prepare-se para a mágica!");
  } else {
    alert("Vamos lá! Adicione um toque de criatividade no título! 🖌️");
  }
}

function verificarAptidao() {
  const nome = document.getElementById("nome").value.trim();
  const idade = parseInt(document.getElementById("idade").value);
  const resultado = document.getElementById("resultado");

  if (!nome || isNaN(idade) || idade <= 0) {
    resultado.textContent =
      "⚠️ Informações inválidas. Tente de novo, valente explorador!";
    return;
  }

  let mensagem = `${nome}, com ${idade} anos, você `;

  if (idade < 0) {
    mensagem += "É um viajante do tempo! 🕰️";
  } else if (idade < 16) {
    mensagem += "Ainda não pode votar, mas o futuro é seu! 🚀";
  } else if (idade < 18 || idade > 70) {
    mensagem += "Pode votar, mas é opcional. Faça sua escolha! 💡";
  } else if (idade > 100) {
    mensagem += "É um ser mítico? Salve-nos, sábio! 🧙";
  } else {
    mensagem += "Está apto(a) a votar! Parabéns, cidadão consciente! ✅";
  }

  resultado.textContent = mensagem;
}

function criarAlunos() {
  const alunosDiv = document.getElementById("alunos");
  for (let i = 0; i < 5; i++) {
    alunosDiv.innerHTML += `
      <div>
        🎓 Aluno ${
          i + 1
        }: Nome: <input type="text" id="nome${i}" /> Nota 1: <input type="number" id="nota1_${i}" /> Nota 2: <input type="number" id="nota2_${i}" /> Nota 3: <input type="number" id="nota3_${i}" />
      </div>
    `;
  }
}

function calcularMedias() {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "🔮 Calculando... Prepare-se para as revelações!";

  setTimeout(() => {
    let somaGeral = 0;
    for (let i = 0; i < 5; i++) {
      const notas = [
        parseFloat(document.getElementById(`nota1_${i}`).value) || 0,
        parseFloat(document.getElementById(`nota2_${i}`).value) || 0,
        parseFloat(document.getElementById(`nota3_${i}`).value) || 0,
      ];
      const media = notas.reduce((a, b) => a + b, 0) / 3;
      somaGeral += media;
      resultadosDiv.innerHTML += `<p>🎉 Aluno ${i + 1}: Média = ${media.toFixed(
        2
      )}</p>`;
    }

    resultadosDiv.innerHTML += `<h3>Média Geral da Turma: 💡 ${
      somaGeral / 5
    } 🌟</h3>`;
  }, 1000);
}

function calcularDesconto() {
  const valorInicial = parseFloat(
    document.getElementById("valorInicial").value
  );
  let desconto = 0;

  if (valorInicial <= 100) {
    desconto = 0.1;
  } else if (valorInicial > 100 && valorInicial <= 500) {
    desconto = 0.2;
  } else if (valorInicial > 500) {
    desconto = 0.3;
  }

  const valorFinal = valorInicial - valorInicial * desconto;
  document.getElementById(
    "resultadoDesconto"
  ).innerText = `🪄 O valor final com desconto é: R$ ${valorFinal.toFixed(2)}`;
}
