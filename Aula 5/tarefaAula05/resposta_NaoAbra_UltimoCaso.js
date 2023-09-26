const startButton = document.getElementById("startButton");
const testButton = document.getElementById("testButton");
const entrada = document.getElementById("code");
const message = document.getElementById("message");
const time = document.getElementById("time");

let tempoRestante = 10;
let timer;
const codigoCorreto = "12345";

startButton.addEventListener("click", iniciarJogo);
testButton.addEventListener("click", testarCodigo);

entrada.disabled = true;

function iniciarJogo() {
    startButton.disabled = true;
    entrada.disabled = false;
    entrada.value = "";

    timer = setInterval(function() {
        tempoRestante = tempoRestante - 1;
        time.textContent = `Tempo Restante: ${tempoRestante} segundos`;

        if (tempoRestante === 0) {
            clearInterval(timer);
            message.textContent = "BOOM! La bombeta explodiu!";
            message.style.color = "red";
            entrada.disabled = true;
        }
    }, 1000);
}


function testarCodigo() {
    
    const codigoDigitado = entrada.value;

    if (codigoDigitado === codigoCorreto) {
        clearInterval(timer);
        message.textContent = "UFA! Você parou a bomba.";
        message.style.color = "green";
        entrada.disabled = true;
    } else {
        message.textContent = "Código incorreto. Continue tentando!";
        message.style.color = "red";
        entrada.value = "";
    }
}
