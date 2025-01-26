// Exibe um alerta de boas vindas.
alert("Boas vindas ao nosso site!");

// Declara uma variável chamada nome e atribui a ela o valor "Lua".
let nome = "Lua";

// Cria uma variável chamada idade e atribui a ela o valor 25.
let idade = 25;

// Define uma variável numeroDeVendas e atribui a ela o valor 50.
let numeroDeVendas = 50;

// Define uma variável saldoDisponivel e atribui a ela o valor 1000.
let saldoDisponivel = 1000;

// Exibe um alerta com o texto "Erro! Preencha todos os campos".
alert("Erro! Preencha todos os campos");

// Declara uma variável chamada mensagemDeErro e atribui a ela o valor "Erro! Preencha todos os campos".
let mensagemDeErro = "Erro! Preencha todos os campos";

// Agora exibe um alerta com o valor da variável mensagemDeErro.
alert(mensagemDeErro);

// Usa um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
nome = prompt("Digite seu nome:");

// Pede ao usuário para digitar sua idade usando um prompt e armazena-a na variável idade.
idade = parseInt(prompt("Digite sua idade:")); // Converte a string para um número inteiro

// Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
if (idade >= 18) {
    alert("Pode tirar a habilitação!");
} else if (!isNaN(idade)){ //verifica se a idade é um numero e se for menor que 18 exibe a mensagem abaixo
    alert("Você ainda não pode tirar habilitação.");
} else{ //caso a idade não seja um numero exibe o alerta abaixo
    alert("Por favor, digite uma idade válida.");
}
