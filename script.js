//script.js

document.getElementById('formularioContato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;

    const contato = { nome, endereco, telefone };

    adicionarContatoFila(contato);
    adicionarContatoOrdenado(contato);

    document.getElementById('formularioContato').reset();
});

const fila = [];
const ordenada = [];

function adicionarContatoFila(contato) {
    fila.push(contato);
    atualizarListaFila();
}

function adicionarContatoOrdenado(contato) {
    ordenada.push(contato);
    ordenada.sort((a, b) => a.nome.localeCompare(b.nome));
    atualizarListaOrdenada();
}

function atualizarListaFila() {
    const listaFila = document.getElementById('listaFila').querySelector('ul');
    listaFila.innerHTML = '';
    fila.forEach(contato => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${contato.nome}, ${contato.endereco}, ${contato.telefone}`;
        listaFila.appendChild(itemLista);
    });
}

function atualizarListaOrdenada() {
    const listaOrdenada = document.getElementById('listaOrdenada').querySelector('ul');
    listaOrdenada.innerHTML = '';
    ordenada.forEach(contato => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${contato.nome}, ${contato.endereco}, ${contato.telefone}`;
        listaOrdenada.appendChild(itemLista);
    });
}