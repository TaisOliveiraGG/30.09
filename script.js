// Array de alunos
const alunos = [
    { nome: "Taís", numero: 1 },
    { nome: "Paulino", numero: 2 },
    { nome: "Nico", numero: 3 },
    { nome: "Isa", numero: 4 },
    { nome: "Gui", numero: 5 },
    { nome: "Andrei", numero: 6 },
    { nome: "Lian", numero: 7 }
];

// Seleciona o botão e a div para exibir o resultado
const sortearBtn = document.getElementById('sortearBtn');
const resultadoDiv = document.getElementById('resultado');

// Função para sortear um nome
function sortearNome() {
    // Gera um índice aleatório baseado no comprimento do array
    const indiceAleatorio = Math.floor(Math.random() * alunos.length);
    
    // Seleciona o aluno aleatório
    const alunoAleatorio = alunos[indiceAleatorio];
    
    // Atualiza a div de resultado com o nome e número do aluno sorteado
    resultadoDiv.textContent = `Nome sorteado: ${alunoAleatorio.nome} (Número: ${alunoAleatorio.numero})`;
}

// Adiciona um evento de clique ao botão
sortearBtn.addEventListener('click', sortearNome);