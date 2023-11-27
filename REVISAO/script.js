const entrada = document.getElementById("entrada");
const saida = document.getElementById("saida");
const botao = document.getElementById("botao");
const botao2 = document.getElementById("botao2");

const op = document.getElementsByName("radios");
const check = document.getElementsByName("checks");

const caixa_radios = document.getElementById("caixa_radios");
const caixa_checkbox = document.getElementById("caixa_checkbox");

botao.addEventListener("click", botaoClicado);
botao2.addEventListener("click", botao2Clicado);

caixa_radios.addEventListener("click",botaoClicado);
caixa_checkbox.addEventListener("click",botao2Clicado);

botao.style.display = "none";
botao2.style.display = "none";

// let codInt = setInterval(atualizaSegundo,500);

// let data;

// let codTimer;

// uma vez
// function botaoClicado(){
//     codTimer=setTimeout(apresentaSaida, 1000);
// }
// function botao2Clicado(){
//     clearTimeout(codTimer)
// }
// function apresentaSaida(){
//     saida.innerHTML = "<strong>" + entrada.value + "</strong>"
// }

// continua ate parar   
// function botaoClicado(){
//     codTimer=setInterval(apresentaSaida, 1000);
// }
// function botao2Clicado(){
//     clearInterval(codTimer)
// }
// function apresentaSaida(){
//     saida.innerHTML += " <strong>" + entrada.value + "</strong>"
// }

// relogio
// function botaoClicado(){
//     // let data = new Date();

//     // getDate() - pega data
//     // getFullYear() - pega ano
//     // getSeconds() - pega segundos
//     // saida.innerHTML = data;
//     // entrada.value = data.getSeconds();
//     clearInterval(codInt);
// }

// function botao2Clicado(){
//     saida.innerHTML = "";
//     entrada.value = "";
// }

// function atualizaSegundo(){
//     data = new Date();
//     saida.innerHTML = data.getSeconds();
//     entrada.value = data.getSeconds();                                                                                                                                                                                                                                                                                                                                                                                                                                    
// }

// arrays

// let nomes = ["xablauzito","xabolito","xablauzera"];

// function botaoClicado(){

//     saida.textContent = nomes[geraAleatorio()];

//     entrada.value = nomes[geraAleatorio()];

// }

// function botao2Clicado(){

// }



function geraAleatorio(){
    let aleatorio = 2*Math.random();
    aleatorio = Math.round(aleatorio);

    return aleatorio;
}

let nomes = ["xablauzito","xabolito","xablauzera"];

function botaoClicado(){
    if(op[0].checked == true){
        saida.innerHTML = "op0 selecionado <br>"
    } else if (op[1].checked == true){
        saida.innerHTML = "op1 selecionado <br>"
    } else if (op[2].checked == true){
        saida.innerHTML = "op2 selecionado <br>"
    } else {
        saida.innerHTML = "nenhum op selecionado <br>"
    }
}

function botao2Clicado(){
    saida.innerHTML = "";

    // if(check[0].checked == true){
    //     saida.innerHTML = "check0 selecionado <br>"
    // } 
    // if (check[1].checked == true){
    //     saida.innerHTML += "check1 selecionado <br>"
    // } 
    // if (check[2].checked == true){
    //     saida.innerHTML += "check2 selecionado <br>"
    // }

    let flag = 0

    for(let i = 0; i<check.length; i++){
        if(check[i].checked == true){
            saida.innerHTML += "check" + i + "selecionado <br>"
            flag++
        }
    }
    if (flag == 0) {
        saida.innerHTML += "nenhum esta selecionado"
        
    }

}

