const readline = require('readline-sync');

let restaurante = [];

let opcao = true;

while (opcao) {
    console.log('------------------ menu ------------------');
    console.log('1 - Cadastrar | 2 - Listar | 3 - Alterar | 4 - Excluir | 5 - Sair');

    let escolha = parseInt(readline.question("Digite a opcao desejada: "));

    switch (escolha) {
        case 1:
            adicionar_tarefa();
            break;
        case 2:
            listar_tarefa();
            break;
        case 3:
            alterar_tarefa();
            break;
        case 4:
            excluir_tarefa();
            break;
        case 5:
            sair_tarefa();
            break;
        default:
            console.log('Escolha uma opção válida');
    }
}

function adicionar_tarefa() {
    let tarefa = readline.question('Cadastre uma tarefa: ');
    restaurante.push(tarefa);
    console.log('Tarefa cadastrada com sucesso.');
}

function listar_tarefa() {
    if (restaurante.length === 0) {
        console.log('Lista de tarefas vazia.');
    } else {
        console.log('Lista de Tarefas:');
        restaurante.forEach((tarefa, index) => {
            console.log(`${index + 1} - ${tarefa}`);
        });
    }
}

function alterar_tarefa() {
    if (restaurante.length === 0) {
        console.log('Não há tarefas para alterar.');
        return;
    }

    let alterarIndex = parseInt(readline.question('Escolha qual tarefa você deseja alterar: ')) - 1;

    if (alterarIndex >= 0 && alterarIndex < restaurante.length) {
        let novaTarefa = readline.question('Digite a nova tarefa: ');
        restaurante[alterarIndex] = novaTarefa;
        console.log('Tarefa alterada com sucesso.');
    } else {
        console.log('Escolha uma tarefa válida.');
    }
}

function excluir_tarefa() {
    if (restaurante.length === 0) {
        console.log('Não há tarefas para excluir.');
        return;
    }

    console.log('Lista de Tarefas:');
    restaurante.forEach((tarefa, index) => {
        console.log(`${index + 1} - ${tarefa}`);
    });

    let excluirIndex = parseInt(readline.question('Escolha qual tarefa você deseja excluir: ')) - 1;

    if (excluirIndex >= 0 && excluirIndex < restaurante.length) {
        restaurante.splice(excluirIndex, 1);
        console.log('Tarefa excluída com sucesso.');
    } else {
        console.log('Escolha uma tarefa válida.');
    }
}

function sair_tarefa() {
    opcao = false;
    console.log('Fim do programa.');
}
