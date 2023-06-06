const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-Nome');
const sDescrição = document.querySelector('#m-Descrição');
const sValor = document.querySelector('#m-Valor');
const sData = document.querySelector('#m-Data');
const btnSalvar = document.querySelector('#btnSalvar');

let eventos = [];
let id;

function openModal(edit = false, index = 0) {
  modal.style.display = 'flex';

  modal.onclick = e => {
    if (e.target.classList.contains('modal-container')) {
      modal.style.display = 'none';
    }
  };

  if (edit) {
    sNome.value = eventos[index].nome;
    sDescrição.value = eventos[index].descrição;
    sValor.value = eventos[index].valor;
    sData.value = eventos[index].data;
    id = index;
  } else {
    sNome.value = '';
    sDescrição.value = '';
    sValor.value = '';
    sData.value = '';
  }
}

function editEvento(index) {
  openModal(true, index);
}

function deleteEvento(index) {
  eventos.splice(index, 1);
  setEventosLocalStorage();
  loadEventos();
}

function insertEvento(evento, index) {
  let tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${evento.nome}</td>
    <td>${evento.descrição}</td>
    <td>R$ ${evento.valor}</td>
    <td>${formatDate(evento.data)}</td>
    <td class="acao">
      <button onclick="editEvento(${index})"><i class='bx bx-edit'></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteEvento(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbody.appendChild(tr);
}

btnSalvar.onclick = e => {
  if (sNome.value === '' || sDescrição.value === '' || sValor.value === '' || sData.value === '') {
    return;
  }

  e.preventDefault();

  const novoEvento = {
    nome: sNome.value,
    descrição: sDescrição.value,
    valor: parseFloat(sValor.value),
    data: sData.value
  };

  if (id !== undefined) {
    eventos[id] = novoEvento;
  } else {
    eventos.push(novoEvento);
  }

  setEventosLocalStorage();

  modal.style.display = 'none';
  loadEventos();
  id = undefined;
};

function loadEventos() {
  eventos = getEventosLocalStorage();
  tbody.innerHTML = '';
  eventos.forEach((evento, index) => {
    insertEvento(evento, index);
  });
}

function formatDate(date) {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(date).toLocaleDateString('pt-BR', options);
}

function getEventosLocalStorage() {
  return JSON.parse(localStorage.getItem('eventos')) || [];
}

function setEventosLocalStorage() {
  localStorage.setItem('eventos', JSON.stringify(eventos));
}

loadEventos();
