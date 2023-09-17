const entrada = document.getElementById("entrada");
const btn = document.getElementById("btn");

num = Math.random()*100
let numSecreto = Math.floor(num);

erro = 0

btn.addEventListener("click", function(){
// verificar se o valor de entrada é o numero correto
    console.log(entrada.value)
    console.log("funciona")

    if (entrada.value > numSecreto) {
        alert('O numero de entrada é maior')

        erro = erro +1

    } else if (entrada.value < numSecreto){
        alert('O numero de entrada é menor')

        erro = erro + 1

    } else if (entrada.value == numSecreto){
        alert('O numero é igual PARABENS, voce acertou depois de ' + erro + ' erros')
    }
        
})