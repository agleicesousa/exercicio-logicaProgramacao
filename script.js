document.addEventListener("DOMContentLoaded", criarAlunos);

function alterarTitulo() {
  const inputTitulo = document.getElementById("inputTitulo").value.trim();
  const titulo = document.getElementById("titulo");

  if (inputTitulo) {
    titulo.textContent = `${inputTitulo} ✨✨✨ (com um toque de magia!)`;
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
    resultado.textContent = "⚠️ Informações inválidas. Tente novamente!";
    return;
  }

  let mensagem = `${nome}, com ${idade} anos, você `;

  if (idade < 16) {
    mensagem += "ainda não pode votar, mas o futuro é seu! 🚀";
  } else if (idade >= 16 && idade <= 18) {
    mensagem += "pode votar, mas é opcional! 💡";
  } else if (idade > 70) {
    mensagem += "pode votar, mas é opcional! 🌟";
  } else {
    mensagem += "está apto(a) a votar! ✅";
  }

  resultado.textContent = mensagem;
}

function criarAlunos() {
  const alunosDiv = document.getElementById("alunos");
  alunosDiv.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    alunosDiv.innerHTML += `
      <div>
        🎓 Aluno ${i + 1}: Nome: 
        <input type="text" id="nome${i}" />
        Nota 1: <input type="number" id="nota1_${i}" />
        Nota 2: <input type="number" id="nota2_${i}" />
        Nota 3: <input type="number" id="nota3_${i}" />
      </div>
    `;
  }
}

function calcularMedias() {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "🔮 Calculando...";

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

    resultadosDiv.innerHTML += `<h3>Média Geral da Turma: 💡 ${(
      somaGeral / 5
    ).toFixed(2)} 🌟</h3>`;
  }, 1000);
}

function calcularDesconto() {
  const valorInicial = parseFloat(
    document.getElementById("valorInicial").value
  );
  let descontoPercentual = 0;

  if (valorInicial <= 100) descontoPercentual = 10;
  else if (valorInicial <= 500) descontoPercentual = 20;
  else descontoPercentual = 30;

  const desconto = valorInicial - (valorInicial * descontoPercentual) / 100;
  document.getElementById(
    "resultadoDesconto"
  ).innerText = `🪄 O valor final com desconto é: R$ ${desconto.toFixed(2)}`;
}

function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (!peso || !altura) {
    document.getElementById("resultadoIMC").innerText =
      "⚠️ Informações inválidas.";
    return;
  }

  const imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) {
    classificacao = "📉 Peso abaixo da média.";
  } else if (imc >= 18.5 && imc < 25) {
    classificacao = "✅ Peso saudável.";
  } else if (imc >= 25) {
    classificacao = "⚠️ Peso acima da média.";
  }

  document.getElementById("resultadoIMC").innerText = `🔍 IMC: ${imc.toFixed(
    2
  )} - ${classificacao}`;
}
