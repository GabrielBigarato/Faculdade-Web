console.log("arquivo externo esta sendo lido")

// capture a o elemento "entrada" e atribuiçao ao obj entrada
const entrada = document.getElementById("entrada");

//captura o botao e atribua a uma variavel
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const parou = document.getElementById("parou")

//captura a div e atribua a uma variavel
const saida = document.getElementById("saida");

// quando o usuario clicar no botao algo devera ser executado.
// coloque um alert ou console.log no escopo da funcao.


btn.addEventListener( "click", topzera);
btn1.addEventListener( "click", iniciacontg);
btn2.addEventListener( "click", apresentaNum);
parou.addEventListener( "click", paro );


function topzera() {

    console.log("funciona")

    //saida.innerHTML = "começou"

    setTimeout(apresentaNum , 1);
    
}

// no escopo da funcao anonima faca com que o texzto dentro do elemento saida (DIV SAIDA) seja acabou:


//function topz() {
//    console.log("Funciona2")
//
//   saida.innerHTML = "acabou"   
//}

let num = 0;

function apresentaNum() {
    saida.innerHTML = num;
    num = num + 1;
}

function iniciacontg() {
    setInterval(apresentaNum, 500)
    
}

function paro() {
    
}