// Função para calcular o resultado com base na seleção do usuário
function calcularResultado() {
    // Obtem os valores digitados pelo usuário
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat(document.getElementById("valor2").value);
    
    // Obtem a opção selecionada pelo usuário
    var operacaoSelecionada = document.querySelector('input[name="valor"]:checked').value;
  
    // Realiza a operação com base na seleção do usuário
    var resultado;
    switch (operacaoSelecionada) {
      case "som":
        resultado = valor1 + valor2;
        break;

      case "sub":
        resultado = valor1 - valor2;
        break;

      case "mul":
        resultado = valor1 * valor2;
        break;

      case "div":
        resultado = valor1 / valor2;
        break;

      default:
        resultado = "Selecione uma operação";
    }
  
    // Exiba o resultado no campo de texto
    document.getElementById("resul").value = resultado;
  }
  
  // Adicione um ouvinte de evento para o formulário
  document.getElementById("meu_form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evite o envio do formulário padrão
    calcularResultado(); // Chame a função para calcular o resultado
  });