// Função para calcular o valor a ser pago com base na modalidade selecionada
function calcularValorAPagar() {
    // Obtenha o valor do produto do campo de entrada
    var valorProduto = parseFloat(document.getElementById("valorProduto").value);
    
    // Obtenha a modalidade de pagamento selecionada
    var modalidade = parseInt(document.getElementById("modalidade").value);
    
    // Elemento onde exibiremos o resultado
    var resultadoElement = document.getElementById("resultado");

    var valorASerPago;

    // Use uma estrutura de seleção switch para determinar a ação com base na modalidade
    switch (modalidade) {
        case 1:
            // Se a modalidade for 1 (A VISTA), aplique um desconto de 10%
            valorASerPago = valorProduto - (0.1 * valorProduto);
            break;
        case 2:
            // Se a modalidade for 2 (DEBITO), aplique uma taxa de juros de 2%
            valorASerPago = valorProduto + (0.02 * valorProduto);
            break;
        case 3:
            // Se a modalidade for 3 (CREDITO), aplique uma taxa de juros de 7%
            valorASerPago = valorProduto + (0.07 * valorProduto);
            break;
        default:
            // Se a modalidade não for 1, 2 ou 3, exiba uma mensagem de erro
            resultadoElement.textContent = "Modalidade de pagamento inválida.";
            return;
    }

    // Exiba o valor do produto e o valor a ser pago no elemento de resultado
    resultadoElement.textContent = "Valor do Produto: R$" + valorProduto.toFixed(2) + "\nValor a Ser Pago: R$" + valorASerPago.toFixed(2);

    // Exiba um alerta com o mesmo resultado
    alert("Valor do Produto: R$" + valorProduto.toFixed(2) + "\nValor a Ser Pago: R$" + valorASerPago.toFixed(2));
}
