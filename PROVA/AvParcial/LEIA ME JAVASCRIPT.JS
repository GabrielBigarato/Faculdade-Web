// --------------------------------
// Nome do arquivo: script.js
// Descrição: arquivo de script para o jogo de adivinhação.
// Autores:
//  GABRIEL BIGARATO - RGM: 32831048
//  MARIA EDUARDA GOMES LOPES - RGM: 33292345
// --------------------------------



// Parte 1 (1 ponto)

// Capture os elementos com name="dificuldade" e id="btnCriarJogo" e atribua-os à variáveis.
// Quando o usuário clicar no botão "Criar Jogo", execute uma função ajustaDificuldade().
// Na função ajustaDificuldade() verifique qual nível de dificuldade foi selecionado pelo usuário. Se o usuário não selecionou um nível de dificuldade, exiba um alerta. Se o usuário selecionou um nível de dificuldade, execute a função novoJogo().
//
// Dicas: 
// - Declare uma variável global "maxTentativas" e atribua o valor 0.
// - Na função ajustaDificuldade(), cria uma estrutura condicional para verificar qual nível de dificuldade foi selecionado pelo usuário.
// - Use o método checked para verificar se um elemento do tipo radio está selecionado.
// - Ajuste o valor da variável maxTentativas de acordo com o nível de dificuldade selecionado pelo usuário.
// - Em outro bloco condicional, verifique se o valor da variável maxTentativas é maior que 0. Se for, execute a função novoJogo(). Caso contrário, exiba um alerta para o usuário indicando ele a selecionar um nível de dificuldade.









// Parte 2 (0.5 ponto)
// Na função novoJogo(), gere um número aleatório entre 1 e 100 e atribua-o à variável numeroSecreto. Atribua o valor 0 à variável tentativas. 
//
// Dicas:
// - Declare uma variável global "numeroSecreto".
// - Declare uma variável global "tentativas" e atribua o valor 0.
// - Utilize o método Math.floor() para arredondar o número gerado pelo método Math.random().
// - Utilize o método Math.random() para gerar um número aleatório entre 0 e 1. Multiplique o número gerado por 100 para gerar um número aleatório entre 0 e 100.







// Parte 3 (1.5 ponto)
// Capture os elementos com ids "entrada", "btnEnviarPalpite" e "saida" e atribua-os à variáveis.
// Quando o usuário clicar no botão "Enviar Palpite", execute uma função avaliaPalpite().
// Na função avaliaPalpite(), verifique se o palpite do usuário é igual ao número secreto. Se for igual, exiba uma mensagem de parabéns e o número de tentativas que o usuário utilizou para acertar o número secreto. Se for menor, exiba uma mensagem informando que o usuário deve tentar um número maior. Se for maior, exiba uma mensagem informando que o usuário deve tentar um número menor.
// Armazene todos os palpites do usuário, assim como o número de tentativas. Exiba os palpites do usuário no elemento com id "palpites".
//
// Dicas: 
// - Declare uma variável global "tentativas" e atribua o valor 0. 
// - Declare uma variável global "numerosDigitados" e atribua o valor de um array vazio.
// - Na função avaliaPalpite(), incremente a variável tentativas e armazene o palpite do usuário no array numerosDigitados.
// - Para adicionar um elemento ao final de um array utilize uma variável como contador para adicionar o elemento na última posição do array. Por exemplo, variável i e contador i++.
// - Utilize a variável "tentativas" para contar o número de tentativas que o usuário utilizou para acertar o número secreto. Se o número de tentativas ultrapassar o número máximo de tentativas possíveis "maxTentativas", exiba uma mensagem informando que o usuário atingiu o limite e exiba o número secreto.

// Parte 4 (Não fornece pontuação)
// Exiba a div de id "blocoInicial" e oculte a div de id "blocoJogo" quando a página for carregada.
// Dicas:
// - Utilize no escopo global o método display para ocultar e exibir as divs. 
// Por exemplo, elemento.style.display = "none"; para ocultar e elemento.style.display = "block"; para exibir o elemento.




// Parte 5 (Não fornece pontuação)
// Após o usuário selecionar um nível de dificuldade e clicar no botão "Criar Jogo", oculte a div de id "blocoInicial" e exiba a div de id "blocoJogo". Ou seja, o processo inverso ao carregamento da página.
// Após o usuário acertar o número secreto ou atingir o limite de tentativas, reinicie o jogo. Para isso, crie uma função reinicia() e execute-a após o usuário acertar o número secreto ou atingir o limite de tentativas.
// A função reinicia() deve ser executada após 5 segundos o usuário ter acertado ou acabado com as tentativas. Exiba a div de id "blocoInicial" e oculte a div de id "blocoJogo". Ou seja, o processo similar ao carregamento da página.



