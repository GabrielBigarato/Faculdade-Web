// --------------------------------
// Nome do arquivo: script.js
// Descrição: arquivo de script para o jogo de adivinhação.
// Autores:
//  GABRIEL BIGARATO - RGM: 32831048
//  MARIA EDUARDA GOMES LOPES - RGM: 33292345
// --------------------------------

const dificuldade = document.getElementsByName("dificuldade")
const btnCriarJogo = document.getElementById("btnCriarJogo")
var maxTentativas = 0 ;

var tentativas = 0;

var numerosDigitados = [];

btnCriarJogo.addEventListener("click", function ajustaDificuldade(){
    if (dificuldade[0].checked == true) {
        maxTentativas = 10;
        
    }   else if ( dificuldade[1].checked == true) {
        maxTentativas = 7;
        
    }   else if ( dificuldade[2].checked == true) {
        maxTentativas = 5;
        
    }   

    if (maxTentativas > 0) {
        novoJogo();
        
    }   else{
        alert("Selecione uma Dificuldade")
    }


})
function novoJogo() {

    numero = Math.random()*100;
    var numeroSecreto = Math.floor(numero);


    const entrada = document.getElementById("entrada");
    const btnEnviarPalpite = document.getElementById("btnEnviarPalpite");
    const saida = document.getElementById("saida");
    const palpites = document.getElementById("palpites");

    btnEnviarPalpite.addEventListener("click", function avaliaPalpite() {

        if (entrada.value > numeroSecreto) {
            //alert('O numero de entrada é maior')
        
            maxTentativas = maxTentativas - 1
        
            saida.innerHTML = "O numero de entrada é maior"
            
            
        
        } else if (entrada.value < numeroSecreto){
            //alert('O numero de entrada é menor')
        
            maxTentativas = maxTentativas - 1
        
            saida.innerHTML = "O numero de entrada é menor"
        
            
        
        } else {
            //alert('O numero é igual PARABENS, voce acertou depois de ' + erro + ' erros')
            
            saida.innerHTML = "O numero é igual PARABENS"
        
        }

        palpites.innerHTML = maxTentativas
    })
}

