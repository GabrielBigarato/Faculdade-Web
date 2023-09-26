
**Desarmando a Bomba - Tutorial Passo a Passo**

Neste tutorial, vamos criar um jogo em HTML, CSS e JavaScript chamado "Desarmar a Bomba". O jogador precisará inserir um código correto (5 dígitos) antes que o tempo se esgote para evitar uma explosão fictícia. Vamos dividi-lo em etapas simples:

**1. Capturando Elementos HTML:**
Primeiro, precisamos capturar os elementos HTML que usaremos em nosso jogo. Vamos pegar os botões "Iniciar" e "Testar", o campo de entrada de código, a mensagem de feedback e o contador de tempo. Usaremos esses elementos para interagir com o jogo.

```javascript
const startButton = document.getElementById("startButton");
const testButton = document.getElementById("testButton");
const entrada = document.getElementById("code");
const message = document.getElementById("message");
const time = document.getElementById("time");
```

**2. Variáveis Globais:**
Agora, vamos criar algumas variáveis globais para rastrear o tempo restante, o temporizador e o código correto.

```javascript
let tempoRestante = 10;
let timer;
const codigoCorreto = "12345";
```

**3. Event Listeners:**
Vamos adicionar dois ouvintes de eventos, um para o botão "Iniciar" e outro para o botão "Testar". Esses ouvintes de eventos executarão funções quando os botões forem clicados.

```javascript
startButton.addEventListener("click", iniciarJogo);
testButton.addEventListener("click", testarCodigo);
```

**4. Função iniciarJogo():**
Agora, criaremos a função `iniciarJogo` que será chamada quando o botão "Iniciar" for clicado. Esta função inicializará o jogo.

```javascript
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
```

**5. Função testarCodigo():**
Agora, criaremos a função `testarCodigo` que será chamada quando o botão "Testar" for clicado. Esta função verificará se o código inserido é correto.

```javascript
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
```

**6. Finalizando:**
Agora você tem um jogo funcional "Desarmar a Bomba" com interações básicas em HTML, CSS e JavaScript. Os passos acima guiarão você na criação do jogo e demonstram como os elementos HTML e as funções JavaScript se relacionam para criar uma experiência interativa. Lembre-se de incluir seu HTML, CSS e JavaScript em arquivos separados e referenciá-los no documento HTML para que tudo funcione corretamente.
