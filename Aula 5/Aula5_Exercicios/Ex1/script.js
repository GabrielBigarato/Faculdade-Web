// Função para calcular o resultado com base na seleção do usuário
function calcularParcela() {
    // Obtem o valor digitado pelo usuário
    var valor_compra = parseFloat(document.getElementById("valor_compra").value);

    // Obtem a opção selecionada pelo usuário
    var parcelaSelecionada = document.getElementById("parcelas");
    // Realiza a operação com base na seleção do usuário
    var resultado;

    switch (parcelaSelecionada.value) {
      case "1":
        resultado = valor_compra;
        break;

      case "2":
        resultado =(((3 / 100)*valor_compra)+valor_compra)/2;
        break;

      case "4":
        resultado =(((7 / 100)*valor_compra)+valor_compra)/4;
        break;

      default:
        resultado = "Selecione uma parcela";
    }
  
    // Exiba o resultado no campo de texto
    document.getElementById("resultado").value = resultado;
  }
  
  // Adicione um ouvinte de evento para o formulário
  document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evite o envio do formulário padrão
    calcularParcela(); // Chame a função para calcular o resultado
  });