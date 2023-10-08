
function calcularMedia(){
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    var valor3 = parseFloat(document.getElementById("valor3").value);
    var resultado;
    resultado = (valor1 + valor2 + valor3)
    console.log(resultado)
    document.getElementById("resultado").value = resultado;
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evite o envio do formulário padrão
    calcularMedia(); // Chame a função para calcular o resultado
  });