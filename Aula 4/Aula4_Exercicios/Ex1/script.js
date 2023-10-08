// Obter elementos pela ID
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");

// Obter parágrafos pela classe
var cl1Paragraphs = document.getElementsByClassName("cl1");
var cl2Paragraphs = document.getElementsByClassName("cl2");

// Variável para rastrear o próximo parágrafo a ser alterado
var proximoParagrafo = 0;

// Textos originais dos parágrafos
var textosOriginais = [];


// Adicionar ouvintes de evento
btn1.addEventListener("click", alterarTextoParagrafo);
btn2.addEventListener("click", ocultarCl1);
btn3.addEventListener("click", ocultarCl2);
btn4.addEventListener("click", iniciarTemporizador);
btn5.addEventListener("click", exibirCl1);
btn6.addEventListener("click", exibirCl2);
btn7.addEventListener("click", restaurarTexto);

// // Função para alterar o texto do primeiro parágrafo (cl1)
// function alterarTexto() {
//     cl1Paragraphs[0].textContent = "Texto alterado no parágrafo 1 (cl1)";
// }

// Função para alterar o texto do próximo parágrafo (cl1 ou cl2)
function alterarTextoParagrafo() {
    if (proximoParagrafo < cl1Paragraphs.length) {
        cl1Paragraphs[proximoParagrafo].textContent = "Texto alterado no parágrafo " + (proximoParagrafo + 1) + " (cl1)";
    } else {
        var indiceCl2 = proximoParagrafo - cl1Paragraphs.length;
        cl2Paragraphs[indiceCl2].textContent = "Texto alterado no parágrafo " + (indiceCl2 + 1) + " (cl2)";
    }

    proximoParagrafo++;
    
    // Reiniciar o ciclo se atingir o último parágrafo
    if (proximoParagrafo >= cl1Paragraphs.length + cl2Paragraphs.length) {
        proximoParagrafo = 0;
    }
}

    // Função para restaurar os textos aos valores originais
    function restaurarTexto() {
        for (var i = 0; i < cl1Paragraphs.length; i++) {
            cl1Paragraphs[i].textContent = textosOriginais[i];
        }
        for (var i = 0; i < cl2Paragraphs.length; i++) {
            cl2Paragraphs[i].textContent = textosOriginais[i + cl1Paragraphs.length];
        }
    }

// Função para ocultar parágrafos da classe cl1
function ocultarCl1() {
    for (var i = 0; i < cl1Paragraphs.length; i++) {
        cl1Paragraphs[i].style.display = "none";
    }
}

// Função para ocultar parágrafos da classe cl2
function ocultarCl2() {
    for (var i = 0; i < cl2Paragraphs.length; i++) {
        cl2Paragraphs[i].style.display = "none";
    }
}

// Função para mostrar parágrafos da classe cl1
function exibirCl1() {
    for (var i = 0; i < cl1Paragraphs.length; i++) {
        cl1Paragraphs[i].style.display = "block";
    }
}

// Função para mostrar parágrafos da classe cl2
function exibirCl2() {
    for (var i = 0; i < cl2Paragraphs.length; i++) {
        cl2Paragraphs[i].style.display = "block";
    }
}

// Função para criar um alerta após 3 segundos
function iniciarTemporizador() {
    setTimeout(function () {
        alert("Temporizador de 3 segundos!");
    }, 3000);
}

        // Armazenar os textos originais dos parágrafos
for (var i = 0; i < cl1Paragraphs.length; i++) {
    textosOriginais.push(cl1Paragraphs[i].textContent);
}
for (var i = 0; i < cl2Paragraphs.length; i++) {
    textosOriginais.push(cl2Paragraphs[i].textContent);
}
