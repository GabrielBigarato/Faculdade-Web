function ParOuImpar() {
    var numero = parseFloat(document.getElementById("numero").value);
    var resultadoElement = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultadoElement.value = "Digite um número válido";
    } else if (numero % 2 === 0) {
        alert("Número Par")
        resultadoElement.value = "Número Par";
    } else {
        alert("Número Ímpar")
        resultadoElement.value = "Número Ímpar";
    }
}