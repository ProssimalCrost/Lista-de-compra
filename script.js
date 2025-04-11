// script.js
document.getElementById('adicionarBtn').addEventListener('click', adicionarProduto);

function adicionarProduto() {
  const input = document.getElementById('produtoInput');
  const nome = input.value.trim();

  if (nome === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = nome;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', () => {
    li.classList.toggle('comprado');
    const ul = document.getElementById('listaProdutos');
    if (checkbox.checked) {
      ul.appendChild(li);
    } else {
      ul.insertBefore(li, ul.firstChild);
    }
  });

  const editarBtn = document.createElement('button');
  editarBtn.textContent = 'Editar';
  editarBtn.addEventListener('click', () => {
    const novoNome = prompt('Novo nome do produto:', span.textContent);
    if (novoNome) span.textContent = novoNome;
  });

  const excluirBtn = document.createElement('button');
  excluirBtn.textContent = 'Excluir';
  excluirBtn.classList.add('excluir');
  excluirBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(editarBtn);
  li.appendChild(excluirBtn);

  document.getElementById('listaProdutos').appendChild(li);
  input.value = '';
  input.focus();
}

function concluirTudo() {
  alert('Lista de compras concluída com sucesso!');
}