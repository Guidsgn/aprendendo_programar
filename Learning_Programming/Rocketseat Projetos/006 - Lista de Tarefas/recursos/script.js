// Help

function log(message) {
    console.log(message)
};



// Script de Máximo de Caracteres no [ p ]

const text_long = document.querySelectorAll('.with-js p');
const caracLimit = 90;

for (let p of text_long) {
    const aboveLimit = p.innerText.lenght > caracLimit;
    const dotsOrEmpty = aboveLimit ? '...' : ''

    p.innerText = p.innerText.substring(0, caracLimit) + dotsOrEmpty
};



// Script de Drag & Drop

const cards = document.querySelectorAll('.card')
const dropZones = document.querySelectorAll('.dropzone')

/* Nossos cartões */
/* Our cards */
cards.forEach(card => {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragEnd)
});

function dragStart() {
    // log('| Card: Start Dragging')
    dropZones.forEach(  dropzone => dropzone.classList.add('highlight'));

    this.classList.add('is-dragging') // this = card
};

function drag() {
    // log('| Card: Is Dragging')
};

function dragEnd() {
    // log('| Card: End Dragging')
    dropZones.forEach(  dropzone => dropzone.classList.remove('highlight'));

    this.classList.remove('is-dragging') // this = card
};

/* Local onde irei soltar os cartões */
/* Place where we will drop cards */
dropZones.forEach( dropzone => {
    dropzone.addEventListener('dragenter', dragEnter);
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('dragleave', dragLeave);
    dropzone.addEventListener('drop', drop)
});

function dragEnter() {
    // log('| Dropzone: Enter in Zone')
};

function dragOver() {
    // log('| Dropzone: Over in Zone')

    

    this.classList.add('over');

    // Arrastar o cartão
    // Get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging');

    this.appendChild(cardBeingDragged) // this = dropzone
};

function dragLeave() {
    // log('| Dropzone: Leave the Zone')

    this.classList.remove('over') // this = dropzone
};

function drop() {
    // log('| Dropzone: Dropped')

    this.classList.remove('over') // this = dropzone
};

// ------------------------------------------

// Script Criação de Tarefas

   // Selecionar Elemento do Botão de Criar Tarefa
const tarefaCriar = document.querySelector('#criar-tarefa-btn');

   // Função de Criar Tarefa ou Tags

   document.getElementById("criar-tarefa-btn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal").classList.add("fadeIn");
  });
  
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("modal").classList.remove("fadeIn");
    document.getElementById("modal").classList.add("fadeOut");
    setTimeout(function() {
      document.getElementById("modal").style.display = "none";
      document.getElementById("modal").classList.remove("fadeOut");
    }, 500);
  });
  
  document.getElementById("criarTarefaModalBtn").addEventListener("click", function() {
    const titulo = document.getElementById("titulo").value;
        if (titulo) {
            saveTarefa(titulo)

            // Verificação
        }

    const descricao = document.getElementById("descricao").value;
        if (descricao) {
            saveTarefa(descricao)

            // Verificação
        }

    const novaTag = document.getElementById("novaTag").value;
        if (novaTag) {
            saveTarefa(novaTag)

            // Verificação
        }

    const tagsExistentes = document.getElementById("tagsExistentes");
        if (tagsExistentes) {
            saveTarefa(tagsExistentes)

            // Verificação
        }

    const tagSelecionada = tagsExistentes.value;
        if (tagSelecionada) {
            saveTarefa(tagSelecionada)

            // Verificação
        }
    
    // Aqui você pode fazer o que quiser com os dados inseridos, como adicionar à lista de tarefas
    
    // Resetar os campos após criar a tarefa
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("novaTag").value = "";
    tagsExistentes.selectedIndex = 0;
  });
  
  document.getElementById("adicionarTagBtn").addEventListener("click", function() {
    const novaTag = document.getElementById("novaTag").value;
    const tagsExistentes = document.getElementById("tagsExistentes");
    
    if (novaTag.trim() !== "") {
      const option = document.createElement("option");
      option.text = novaTag;
      tagsExistentes.add(option);
      document.getElementById("novaTag").value = "";
    }
  });
  
  

// Script Filtro de Tarefas

   // Selecionar Elemento do Botão de Filtragem
const tarefaFiltrar = document.querySelector('#filtrar-tarefa-btn');

// Script Busca por Tarefas

   // Selecionar Elemento do Input de Busca
const tarefaPesquisar = document.querySelector('#pesquisar-tarefa-input');

// ------------------------------------------