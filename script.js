let inserisciNota = document.getElementById('input');
let inputButton = document.getElementById('input-button');
let listaNote = document.getElementById('lista-note');

inputButton.addEventListener('click',aggiungiNota)

function aggiungiNota(){
if (inserisciNota.value === ''){
   alert('devi scrivere qualcosa')
}
let li = document.createElement('li');

li.appendChild(document.createTextNode(inserisciNota.value))

// let collegamento = document.createElement('collegamento')

li.appendChild(collegamento)

listaNote.appendChild(li)

inserisciNota.value = ''

}