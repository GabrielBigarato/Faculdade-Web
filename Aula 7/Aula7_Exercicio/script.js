document.addEventListener("DOMContentLoaded", function () {
    const quantidadeLinhasInput = document.getElementById("quantidadeLinhas");
    const criarTabelaButton = document.getElementById("criarTabela");
    const tabelaBody = document.querySelector("#tabela tbody");

    criarTabelaButton.addEventListener("click", function () {
        const quantidadeLinhas = parseInt(quantidadeLinhasInput.value);

        if (!isNaN(quantidadeLinhas)) {
            tabelaBody.innerHTML = ""; // Limpa o conteúdo da tabela

            for (let i = 0; i < quantidadeLinhas; i++) {
                const datetime = new Date();
                const milisec = datetime.getMilliseconds();
                const valorAleatorio = parseFloat(Math.random()).toPrecision(5);

                const row = tabelaBody.insertRow();
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);

                cell1.innerHTML = milisec;
                cell2.innerHTML = valorAleatorio;
            }
        }
    });
});
