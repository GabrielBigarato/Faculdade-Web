function Notas() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var mediaElement = document.getElementById("media");
    var conceitoElement = document.getElementById("conceito");

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        mediaElement.value = "Notas devem ser de 0 a 10";
        conceitoElement.value = "";
        alert("Notas devem ser de 0 a 10");
    } else {
        var media = (nota1 + nota2 + nota3) / 3;
    
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            mediaElement.value = "Digite números válidos em todos os campos";
            conceitoElement.value = "";
            alert("Digite números válidos em todos os campos");
        } else if (media >= 6) {
            mediaElement.value = media;
            conceitoElement.value = "APROVADO";
            alert("APROVADO - Média: " + media);
        } else if (media >= 3 && media < 6) {
            mediaElement.value = media;
            conceitoElement.value = "EXAME";
            alert("EXAME - Média: " + media);
        } else {
            mediaElement.value = media;
            conceitoElement.value = "REPROVADO";
            alert("REPROVADO - Média: " + media);
        }
    }
}
