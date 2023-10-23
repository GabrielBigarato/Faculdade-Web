


const dificuldade = document.getElementsByName("dificuldade");
const btnCriarJogo = document.getElementById("btnCriarJogo")
const entrada = document.getElementById("entrada");
const btnEnviarPalpite = document.getElementById("btnEnviarPalpite");
const saida = document.getElementById("saida");
const palpites = document.getElementById("palpites");


btnCriarJogo.addEventListener("click", ajustaDificuldade);

let maxTentativas = 0;

let numeroSecreto; 

let tentativas = 0;

let numerosDigitados = [];
function ajustaDificuldade(){
    if (dificuldade[0].checked == true) {
        maxTentativas = 10

    } else if (dificuldade[1].checked == true) {
        maxTentativas = 7

    } else if (dificuldade[2].checked == true) {
        maxTentativas = 5

    }

    if (maxTentativas > 0) {
        novojogo();
    } else {
        alert("Seleciona uma dificuldade porra");
    }

}

function novojogo () {
    numeroSecreto = Math.floor(Math.random()*100)
    
}

btnEnviarPalpite.addEventListener("click", avaliaPalpite)


function avaliaPalpite() {
    if (entrada.value == numeroSecreto) {
        saida.innerHTML = "VOCE GANHOU" 
        
    } else if (entrada.value > numeroSecreto) {
        saida.innerHTML = "O numero secreto é menor"

    } else if (entrada.value < numeroSecreto) {
        saida.innerHTML = "O numero secreto é maior"
    }
    
    numerosDigitados[tentativas] = entrada.value

    tentativas++;

    if(maxTentativas <= tentativas){
        saida.innerHTML = "Suas tentativas acabaram. O número secreto era " + numeroSecreto + "."
        palpites.innerHTML = tentativas
        novojogo();
        tentativas = 0;
    }

}