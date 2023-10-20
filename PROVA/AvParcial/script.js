// --------------------------------
// Nome do arquivo: script.js
// Descrição: arquivo de script para o jogo de adivinhação.
// Autores:
//  GABRIEL BIGARATO - RGM: 32831048
//  MARIA EDUARDA GOMES LOPES - RGM: 33292345
// --------------------------------
// Variáveis globais
const dificuldade = document.getElementsByName("dificuldade");
const btnCriarJogo = document.getElementById("btnCriarJogo");
var maxTentativas = 0;
var tentativas = 0;
var numerosDigitados = [];
var numeroSecreto;

const entrada = document.getElementById("entrada");
const btnEnviarPalpite = document.getElementById("btnEnviarPalpite");
const saida = document.getElementById("saida");
const palpites = document.getElementById("palpites");

// Evento de clique no botão "Criar Jogo"
btnCriarJogo.addEventListener("click", function ajustaDificuldade() {
    if (dificuldade[0].checked == true) {
        maxTentativas = 10;
    } else if (dificuldade[1].checked == true) {
        maxTentativas = 7;
    } else if (dificuldade[2].checked == true) {
        maxTentativas = 5;
    }

    if (maxTentativas > 0) {
        novoJogo();
    } else {
        alert("Selecione uma Dificuldade");
    }
});

function novoJogo() {
    // Reinicie o contador de tentativas e a lista de números digitados
    tentativas = 0;
    numerosDigitados = [];

    // Gere um novo número secreto
    numeroSecreto = Math.floor(Math.random() * 100) + 1;

    // Limpe o valor da entrada de texto e reabilite o botão
    entrada.value = "";
    btnEnviarPalpite.disabled = false;

    // Limpe o conteúdo do elemento "saida" e "palpites"
    saida.innerHTML = "";
    palpites.innerHTML = maxTentativas;

    // Remova o evento de clique do botão "Enviar Palpite" antes de anexá-lo novamente
    btnEnviarPalpite.removeEventListener("click", avaliaPalpite);
    btnEnviarPalpite.addEventListener("click", avaliaPalpite);
}

// Função para avaliar o palpite
function avaliaPalpite() {
    const palpite = parseInt(entrada.value);

    if (isNaN(palpite)) {
        saida.innerHTML = "Por favor, insira um número válido.";
        return;
    }

    tentativas++;

    if (palpite > numeroSecreto) {
        saida.innerHTML = "O número de entrada é maior";
    } else if (palpite < numeroSecreto) {
        saida.innerHTML = "O número de entrada é menor";
    } else {
        saida.innerHTML = "Parabéns! Você acertou depois de " + tentativas + " tentativas.";
        btnEnviarPalpite.disabled = true;
    }

    // Adicione o palpite à lista de palpites
    numerosDigitados.push(palpite);

    if (tentativas >= maxTentativas) {
        saida.innerHTML = "Suas tentativas acabaram. O número secreto era " + numeroSecreto + ".";
        btnEnviarPalpite.disabled = true;
    }

    palpites.innerHTML = maxTentativas - tentativas; // Atualize o número de tentativas restantes
}
