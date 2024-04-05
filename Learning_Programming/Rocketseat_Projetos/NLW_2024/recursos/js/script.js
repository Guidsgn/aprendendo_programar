
let participantes = [
    {
        nome: "Mayk Brito",
        email: "mayk@gmail.com",
        dataInscricao: new Date(2024, 4, 9, 19, 20),
        dataCheckIn: new Date(2024, 2, 25, 22, 0),
    },
    {
        nome: "Diego Fernandes",
        email: "diegofernandes284@gmail.com",
        dataInscricao: new Date(2024, 2, 1, 19, 12),
        dataCheckIn: new Date(2024, 6, 12, 22, 20),
    },
    {
        nome: "João Silva",
        email: "joaosilva@gmail.com",
        dataInscricao: new Date(2024, 3, 15, 18, 30),
        dataCheckIn: new Date(2024, 4, 3, 9, 45),
    },
    {
        nome: "Ana Santos",
        email: "anasantos@hotmail.com",
        dataInscricao: new Date(2024, 3, 20, 12, 0),
        dataCheckIn: new Date(2024, 5, 8, 17, 30),
    },
    {
        nome: "Pedro Costa",
        email: "pedrocosta@yahoo.com",
        dataInscricao: new Date(2024, 1, 5, 10, 15),
        dataCheckIn: new Date(2024, 4, 1, 8, 0),
    },
    {
        nome: "Mariana Oliveira",
        email: "mariana.o@gmail.com",
        dataInscricao: new Date(2024, 0, 28, 14, 45),
        dataCheckIn: new Date(2024, 3, 10, 11, 10),
    },
    {
        nome: "Luiz Almeida",
        email: "luizalmeida@gmail.com",
        dataInscricao: new Date(2024, 2, 18, 20, 5),
        dataCheckIn: new Date(2024, 6, 20, 15, 20),
    },
    {
        nome: "Carla Souza",
        email: "carlasouza@gmail.com",
        dataInscricao: new Date(2024, 1, 10, 9, 30),
        dataCheckIn: new Date(2024, 3, 5, 16, 40),
    },
    {
        nome: "Rafael Santos",
        email: "rafaelsantos@gmail.com",
        dataInscricao: new Date(2024, 0, 15, 22, 0),
        dataCheckIn: new Date(2024, 4, 15, 18, 15),
    },
    {
        nome: "Camila Lima",
        email: "camilalima@hotmail.com",
        dataInscricao: new Date(2024, 3, 5, 16, 20),
        dataCheckIn: new Date(2024, 5, 25, 14, 30),
    }
]; // array

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao);
    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn);

    if(participante.dataCheckIn == null) {
        dataCheckIn = `
        <button data-email="${participante.email}" onclick="fazerCheckIn(event)">
            <i class="bi bi-check-lg"></i> Confirmar check-in
        </button>
        `;
    } 

    return `
    <tr>
        <td>
            <strong>${participante.nome}</strong><br>
            <small>${participante.email}</small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
    `;
};

const atualizarLista = (participantes) => {

    let output = "";
    // Estrutura de Repetição - loop
    for(let participante of participantes) {
        output = output + criarNovoParticipante(participante);
    }

    // Substituir informação do HTML
    document.querySelector('tbody').innerHTML = output;

}; // arrow function

atualizarLista(participantes);

const adicionarParticipante = (event) => {
    event.preventDefault(); // Não recarregar a página ao enviar

    const formData = new FormData(event.target);
    const participante = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        dataInscricao: new Date(),
        dataCheckIn: null
    };

    const participanteExiste = participantes.find((p) => p.email == participante.email);

    if(participanteExiste) {
        alert('E-mail já foi cadastrado!');
        return;
    } else {

    }

    participantes = [participante, ...participantes];

    atualizarLista(participantes);

    event.target.querySelector('[name="nome"]').value = "";
    event.target.querySelector('[name="email"]').value = "";

};

const fazerCheckIn = (event) => {
    const mensagemConfirmacao = 'Tem certeza que deseja realizar o check-in?';
    if(confirm(mensagemConfirmacao) == false) {
        return;
    };

    const participante = participantes.find((p) => p.email == event.target.dataset.email);

    participante.dataCheckIn = new Date();

    atualizarLista(participantes);
};