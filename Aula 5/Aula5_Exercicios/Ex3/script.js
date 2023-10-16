function NumeroMM() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultadoElement = document.getElementById("resultado");

    if (isNaN(numero1) || isNaN(numero2)) {
        resultadoElement.value = "Digite números válidos em ambos os campos";
    } else if (numero1 > numero2) {
        alert("Número 1 MAIOR");
        resultadoElement.value = "Número 1 MAIOR";
    } else if (numero2 > numero1) {
        alert("Número 2 MAIOR");
        resultadoElement.value = "Número 2 MAIOR";
    } else {
        alert("Números IGUAIS");
        resultadoElement.value = "Números IGUAIS";
    }
}
