document.addEventListener("DOMContentLoaded", () => {
  criarAlunos();
});

/** Exercício 1: Alterando Títulos */
function alterarTitulo() {
  const inputTitulo = document.getElementById("inputTitulo").value.trim();
  const titulo = document.getElementById("titulo");

  if (inputTitulo) {
    titulo.textContent = `${inputTitulo} ✨✨✨ (com um toque de criatividade!)`;
    alert("🎨 Título transformado com estilo!");
  } else {
    alert("✏️ Vamos lá! Insira algo criativo no título!");
  }
}

/** Exercício 2: Verificando aptidão para votar */
function verificarAptidao() {
  const nome = document.getElementById("nome").value.trim();
  const idade = parseInt(document.getElementById("idade").value);
  const resultado = document.getElementById("resultado");

  if (!nome || isNaN(idade) || idade <= 0) {
    resultado.textContent = "⚠️ Dados inválidos. Tente novamente!";
    return;
  }

  let mensagem = `${nome}, com ${idade} anos, você `;
  if (idade < 16) {
    mensagem += "ainda não pode votar, mas o futuro está a seu favor! 🚀";
  } else if (idade >= 16 && idade <= 18) {
    mensagem += "pode votar, mas é opcional! 💡";
  } else if (idade > 70) {
    mensagem += "pode votar, mas é opcional! 🌟";
  } else {
    mensagem += "está apto(a) para votação! ✅";
  }

  resultado.textContent = mensagem;
}

/** Exercício 3: Criar Alunos e Calcular Médias */
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

/** Exercício 4: Calculadora de Descontos */
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

/** Exercício 5: Calculadora de IMC */
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

/** Exercício 6: Manipulação com Arrays */
function executarExercicio6() {
  const resultadoDiv = document.getElementById("resultadoExercicio6");

  let numeros = [12, 5, 8, 22, 17];
  let resultado = `<p><strong>Array Inicial:</strong> [${numeros.join(
    ", "
  )}]</p>`;

  const maior = Math.max(...numeros);
  const menor = Math.min(...numeros);

  resultado += `<p><strong>Maior Valor:</strong> ${maior}</p>`;
  resultado += `<p><strong>Menor Valor:</strong> ${menor}</p>`;

  const sextoValor = 30;
  numeros.push(sextoValor);

  resultado += `<p><strong>Array após adicionar um sexto valor:</strong> [${numeros.join(
    ", "
  )}]</p>`;

  const soma = numeros.reduce((total, num) => total + num, 0);
  const media = soma / numeros.length;

  resultado += `<p><strong>Média dos valores:</strong> ${media.toFixed(2)}</p>`;

  resultadoDiv.innerHTML = resultado;
}
