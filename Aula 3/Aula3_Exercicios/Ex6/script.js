
function calcularMedia(){
    var base = parseFloat(document.getElementById("base").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado;
    resultado = (base * altura)/2
    resultado = resultado.toFixed(2)
    console.log(resultado)
    document.getElementById("resultado").value = resultado;
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evite o envio do formulário padrão
    calcularMedia(); // Chame a função para calcular o resultado
  });