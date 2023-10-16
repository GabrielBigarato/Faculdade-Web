function calcularValorAPagar() {
    var valorProduto = parseFloat(document.getElementById("valorProduto").value);
    var modalidade = parseInt(document.getElementById("modalidade").value);
    var resultadoElement = document.getElementById("resultado");

    var valorASerPago;

    switch (modalidade) {
        case 1:
            valorASerPago = valorProduto - (0.1 * valorProduto); // 10% de desconto
            break;
        case 2:
            valorASerPago = valorProduto + (0.02 * valorProduto); // 2% de juros
            break;
        case 3:
            valorASerPago = valorProduto + (0.07 * valorProduto); // 7% de juros
            break;
        default:
            resultadoElement.textContent = "Modalidade de pagamento inválida.";
            return;
    }

    resultadoElement.textContent = "Valor do Produto: R$" + valorProduto.toFixed(2) + "\nValor a Ser Pago: R$" + valorASerPago.toFixed(2);

    alert("Valor do Produto: R$" + valorProduto.toFixed(2) + "\nValor a Ser Pago: R$" + valorASerPago.toFixed(2));
}
