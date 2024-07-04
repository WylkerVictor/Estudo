const readline = require('readline-sync')

let lista = [];
opção = 1;
while(opção == 1){
console.log('------------------ menu ------------------')
console.log('1 - Cadastrar | 2 - Listar | 3 - Alterar | 4 - Excluir | 5 - Sair: ')

escolha = parseInt(readline.question("Digite a opcao desejada: "))

switch(escolha){
    case 1:
let tarefa = readline.question('Cadastre uma tarefa: ')
lista.push(tarefa)
break;
    case 2:
console.log(lista)
break;
    case 3:
    let alterartarefa = readline.question('Escolha qual tarefa voce deseja alterar: ')
    novatarefa = readline.question('Digite a nova tarefa: ')
    if (alterartarefa >= 0 && alterartarefa < lista) {
        lista[alterartarefa] = novatarefa;
        console.log('Lista atualizada')
      }
break;
    case 4:
    let excluirtarefa = readline.question('Escolha qual tarefa voce deseja alterar: ')
    lista.splice(excluirtarefa, 1)
break;
    case 5:
        opção = 2;
break;
    default:
        console.log('Escolha uma opção válida')
}
}
console.log("Fim do programa")