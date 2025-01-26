// Contador de 1 a 10 usando loop while.
function contadorDe1a10() {
  let contador = 1;

  console.log("Contagem de 1 a 10:");
  while (contador <= 10) {
    console.log(contador);
    contador++;
  }
}

// Contador de 10 a 0 usando loop while.
function contadorDe10a0() {
  let contador = 10;

  console.log("Contagem de 10 a 0:");
  while (contador >= 0) {
    console.log(contador);
    contador--;
  }
}

// Contagem regressiva a partir de um número fornecido pelo usuário.
function contagemRegressiva() {
  let numero = parseInt(prompt("Digite um número para iniciar a contagem regressiva:"));

  if (isNaN(numero)) {
    console.error("Por favor, digite um número válido.");
    return;
  }

  console.log(`Contagem regressiva a partir de ${numero}:`);
  while (numero >= 0) {
    console.log(numero);
    numero--;
  }
}

// Contagem progressiva de 0 até um número fornecido pelo usuário.
function contagemProgressiva() {
  let numero = parseInt(prompt("Digite um número para a contagem progressiva:"));

  if (isNaN(numero)) {
    console.error("Por favor, digite um número válido.");
    return;
  }

  let contador = 0;
  console.log(`Contagem progressiva até ${numero}:`);
  while (contador <= numero) {
    console.log(contador);
    contador++;
  }
}

// Chamando as funções
contadorDe1a10();
contadorDe10a0();
contagemRegressiva();
contagemProgressiva();

