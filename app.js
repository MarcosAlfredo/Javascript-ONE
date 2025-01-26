// Exibe mensagem de boas-vindas no console.
function exibirBoasVindas() {
  console.log("Bem-vindo(a)!");
}

// Exibe "Olá, [seu nome]!" no console.
function exibirOlaNomeConsole() {
  const nome = "Seu Nome"; // Substitua pelo seu nome
  console.log(`Olá, ${nome}!`);
}

// Exibe "Olá, [seu nome]!" em um alert.
function exibirOlaNomeAlert() {
    const nome = "Seu Nome"; // Substitua pelo seu nome
    alert(`Olá, ${nome}!`);
}

// Pergunta a linguagem de programação favorita e exibe no console.
function perguntarLinguagemFavorita() {
  const linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
  console.log(`Você gosta de ${linguagemFavorita}.`);
}

// Soma dois valores e exibe o resultado no console.
function somarValores() {
  const valor1 = 10;
  const valor2 = 5;
  const resultado = valor1 + valor2;
  console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
}

// Subtrai dois valores e exibe o resultado no console.
function subtrairValores() {
  const valor1 = 10;
  const valor2 = 5;
  const resultado = valor1 - valor2;
  console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
}

// Verifica se a pessoa é maior ou menor de idade.
function verificarMaioridade() {
  const idade = parseInt(prompt("Digite sua idade:"));

  if (isNaN(idade)) {
    console.error("Por favor, digite uma idade válida.");
    return;
  }

  if (idade >= 18) {
    console.log("Você é maior de idade.");
  } else {
    console.log("Você é menor de idade.");
  }
}

// Verifica se um número é positivo, negativo ou zero.
function verificarNumero() {
  const numero = parseFloat(prompt("Digite um número:"));

  if (isNaN(numero)) {
    console.error("Por favor, digite um número válido.");
    return;
  }

  if (numero > 0) {
    console.log("Número positivo.");
  } else if (numero < 0) {
    console.log("Número negativo.");
  } else {
    console.log("Número zero.");
  }
}

// Imprime números de 1 a 10 usando loop while.
function imprimirNumerosDe1a10() {
  let numero = 1;
  console.log("Números de 1 a 10:");
  while (numero <= 10) {
    console.log(numero);
    numero++;
  }
}

// Verifica se a nota é maior ou igual a 7 (Aprovado ou Reprovado).
function verificarAprovacao() {
  const nota = parseFloat(prompt("Digite a nota:"));

    if (isNaN(nota)) {
        console.error("Por favor, digite uma nota válida.");
        return;
    }

  if (nota >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}

// Gera um número aleatório e exibe no console.
function gerarNumeroAleatorio() {
  const numeroAleatorio = Math.random();
  console.log(`Número aleatório: ${numeroAleatorio}`);
}

// Gera um número inteiro aleatório entre 1 e 10 e exibe no console.
function gerarNumeroInteiroEntre1e10() {
  const numeroInteiro = Math.floor(Math.random() * 10) + 1;
  console.log(`Número inteiro entre 1 e 10: ${numeroInteiro}`);
}

// Gera um número inteiro aleatório entre 1 e 1000 e exibe no console.
function gerarNumeroInteiroEntre1e1000() {
  const numeroInteiro = Math.floor(Math.random() * 1000) + 1;
  console.log(`Número inteiro entre 1 e 1000: ${numeroInteiro}`);
}

// Chamando as funções
exibirBoasVindas();
exibirOlaNomeConsole();
exibirOlaNomeAlert();
perguntarLinguagemFavorita();
somarValores();
subtrairValores();
verificarMaioridade();
verificarNumero();
imprimirNumerosDe1a10();
verificarAprovacao();
gerarNumeroAleatorio();
gerarNumeroInteiroEntre1e10();
gerarNumeroInteiroEntre1e1000();

