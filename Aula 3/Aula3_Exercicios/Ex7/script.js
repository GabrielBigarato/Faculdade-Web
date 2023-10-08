function calcularIdade() {

    var nome = document.getElementById("nome").value;

    var anoNascimento = parseInt(document.getElementById("anoNascimento").value);

    var anoAtual = parseInt(document.getElementById("anoAtual").value);
    
    var idade = anoAtual - anoNascimento;
    
    var resultado = "Nome: " + nome + "<br>Idade: " + idade + " anos";

    document.getElementById("resultado").innerHTML = resultado;
}