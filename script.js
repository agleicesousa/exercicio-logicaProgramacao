document.addEventListener("DOMContentLoaded", () => {
  criarAlunos();
});

/**
 * Altera o título com estilo, adicionando um toque de criatividade.
 *
 * @function alterarTitulo
 * @returns {undefined}
 */
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



/**
 * Verifica a aptidão para votar com base na idade fornecida.
 * 
 * Obtém o nome e a idade do usuário a partir dos campos de entrada 
 * e exibe uma mensagem sobre a capacidade de votar do usuário.
 * 
 * @returns {undefined}
 */
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


/**
 * Cria entradas de formulário para cadastro de alunos e suas notas.
 * 
 * Adiciona ao elemento com id "alunos" um conjunto de 5 divisões, 
 * cada uma contendo campos de entrada para o nome do aluno e 
 * três notas. Os ids dos campos de entrada são gerados dinamicamente 
 * para cada aluno, permitindo a identificação individual.
 * 
 * @returns {undefined}
 */
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

/**
 * Calcula e exibe as médias das notas de alunos cadastrados.
 *
 * Para cada aluno, três notas são obtidas e a média é calculada.
 * As médias individuais e a média geral da turma são exibidas no
 * elemento com id "resultados". Uma animação de carregamento é
 * apresentada antes do cálculo.
 *
 * @returns {undefined}
 */
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


/**
 * Calcula o valor final após aplicar um desconto baseado no valor inicial.
 *
 * Obtém o valor inicial a partir do campo de entrada com id "valorInicial"
 * e aplica um desconto percentual conforme a faixa do valor:
 * - 10% para valores até R$ 100
 * - 20% para valores entre R$ 101 e R$ 500
 * - 30% para valores acima de R$ 500
 *
 * O resultado é exibido no elemento com id "resultadoDesconto".
 *
 * @returns {undefined}
 */
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


/**
 * Calcula o Índice de Massa Corporal (IMC) com base no peso e altura fornecidos.
 *
 * Obtém o peso e altura dos campos de entrada correspondentes, calcula o IMC
 * e determina a classificação de peso (abaixo da média, saudável, acima da média).
 * Em seguida, exibe o resultado no elemento com id "resultadoIMC".
 *
 * @returns {undefined}
 */
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


/**
 * Executa o exercício 6.
 *
 * Mostra o array inicial, o maior e menor valor, o array
 * após adicionar um sexto valor e a média dos valores.
 *
 * @returns {undefined}
 */
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
