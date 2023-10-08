// Evento DOMContentLoaded para garantir que o código seja executado após o carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    // Variável para armazenar o texto digitado
    var textoDigitado = '';

    // Obter elementos pelos IDs
    var botao1 = document.getElementById("botao1");
    var botao2 = document.getElementById("botao2");
    var botao3 = document.getElementById("botao3");
    var botao4 = document.getElementById("botao4");
    var botao5 = document.getElementById("botao5");
    var botao6 = document.getElementById("botao6");
    var paragrafo1 = document.getElementById("paragrafo1");
    var paragrafo2 = document.getElementById("paragrafo2");
    var paragrafo3 = document.getElementById("paragrafo3");
    var paragrafo4 = document.getElementById("paragrafo4");

    // Prompt para obter o texto digitado
    textoDigitado = prompt("Digite um texto:");

    // Função para exibir o texto no primeiro parágrafo (Botão 1)
    botao1.addEventListener("click", function () {
        paragrafo1.textContent = textoDigitado;
    });

    // Função para copiar o texto para os outros parágrafos (Botão 2)
    botao2.addEventListener("click", function () {
        paragrafo2.textContent = textoDigitado;
        paragrafo3.textContent = textoDigitado;
        paragrafo4.textContent = textoDigitado;
    });

    // Função para apagar aleatoriamente um dos parágrafos (Botão 3)
    botao3.addEventListener("click", function () {
        var paragrafos = [paragrafo1, paragrafo2, paragrafo3, paragrafo4];
        var indiceAleatorio = Math.floor(Math.random() * paragrafos.length);
        paragrafos[indiceAleatorio].textContent = '';
    });

    // Função para mostrar um alerta com o texto armazenado (Botão 4)
    botao4.addEventListener("click", function () {
        alert(textoDigitado);
    });

    // Função para exibir o texto em maiúsculas (Botão 5)
    botao5.addEventListener("click", function () {
        paragrafo1.textContent = textoDigitado.toUpperCase();
    });

    // Função para exibir o texto em minúsculas (Botão 6)
    botao6.addEventListener("click", function () {
        paragrafo1.textContent = textoDigitado.toLowerCase();
    });
});