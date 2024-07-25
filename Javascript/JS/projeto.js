const readline = require('readline-sync')

let restaurante = [];

let opção = true;

while(opção){
console.log('------------------ menu ------------------')
console.log('1 - Cadastrar | 2 - Listar | 3 - Alterar | 4 - Excluir | 5 - Sair: ')


escolha = parseInt(readline.question("Digite a opcao desejada: "))

switch(escolha){
    case 1:
adicionar_tarefa()
break;
    case 2:
listar_tarefa()
break;
    case 3:
alterar_tarefa()
break;
    case 4:
excluir_tarefa()
break;
    case 5:
sair_tarefa()
break;
    default:
        console.log('Escolha uma opção válida')
}
}

function adicionar_tarefa(){

let tarefa = readline.question('Cadastre uma tarefa: ')
restaurante.push(tarefa)
}

function listar_tarefa(){

    console.log('Lista de Tarefas:');
    restaurante.forEach((tarefa) => {
        console.log(`Nome do cliente: - ${tarefa}`);
    });

}

function alterar_tarefa(){

    let alterartarefa = parseInt(readline.question('Escolha qual tarefa voce deseja alterar: ')) -1;
    novatarefa = readline.question('Digite a nova tarefa: ')

    if (alterartarefa >= 0 && alterartarefa < lista.Length) {
        lista[alterartarefa] = novatarefa;
        console.log('Lista atualizada')
  } else {
    console.log('Digite um valor valido')
  }
}

function excluir_tarefa(){
    console.log('Lista de tarefas: ', lista)
    let excluirtarefa = parseInt(readline.question('Escolha qual tarefa voce deseja excluir: ')) -1;
    if (excluirtarefa >= 0 && excluirtarefa < lista.length) {
    lista.splice(excluirtarefa, 1)
    console.log('Tarefa excluida')
} else {
    console.log('Digite um valor valido')
}

}

function sair_tarefa(){
    opção = false;
    console.log('Fim do programa')
}
