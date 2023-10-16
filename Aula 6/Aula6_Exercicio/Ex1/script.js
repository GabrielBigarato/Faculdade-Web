document.getElementById('button1').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    alert('Nome: ' + nome + ' Sobrenome: ' + sobrenome);
    console.log('Nome: ' + nome + ' Sobrenome: ' + sobrenome);
});

document.getElementById('button2').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    document.getElementById('nome').value = sobrenome;
    document.getElementById('sobrenome').value = nome;
});

document.getElementById('button3').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    document.getElementById('paragrafo').textContent = (nome + ' ' + sobrenome).toUpperCase();
});

document.getElementById('button4').addEventListener('click', function() {
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    document.getElementById('paragrafo').textContent = (nome + ' ' + sobrenome).toLowerCase();
});