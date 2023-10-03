console.log("arquivo ta deboa")

//capture os elementos

const nome = document.getElementById("nome");

const ensino = document.getElementsByName("campoEnsino");

const btn = document.getElementById("btn");

const tabela = document.getElementById("tabela")

//dispare uma funcao ao clicar no botao

btn.addEventListener( "click", armazena);

tabela.addEventListener("dblclick", verifica)

let nomes = [];

let tiposEnsino = [];

let i = 0;

function armazena() {
    console.log("Armazena")

    let nomeEntrada = nome.value ; 
    console.log("Nome Digitado: " + nomeEntrada)

    let tipo; 

    if (ensino[0].checked == true) {
        tipo = ("Presencial")
    }
    else if (ensino[1].checked == true) {
        tipo = ("Remoto")
    }
    else{
        tipo = ("Nenhum campo")
    }
    
    console.log(tipo + " está selecionado")

    nomes[i] = nomeEntrada
    tiposEnsino[1] = tipo
    // i = i + 1
    i ++;

}

function verifica() {
    console.log("Voce clicou na tabela")

    // ler vetor nomes e tiposEnsino

    for (let index = 0; index < nomes.length; index++) {
        tabela.innerHTML = "<tr><td>" + nomes[index] + "</td><td>" + tiposEnsino[index] + "</td></tr>";
        
    }

}
