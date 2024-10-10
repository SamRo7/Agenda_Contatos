document.getElementById('formularioContato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;

    let novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `<td>${nome}</td><td>${telefone}</td><td><button onclick="apagarContato(this)">✖ pagar</button></td>`;

    document.getElementById('contatos').appendChild(novaLinha);

    // Limpar o formulário
    document.getElementById('formularioContato').reset();
});

function apagarContato(botao) {
    let linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}
