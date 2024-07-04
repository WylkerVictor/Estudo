const readline = require('readline-sync');

let lista = [];
opção = 1;
while(opção == 1){
console.log("------------------ menu ------------------")
console.log("1 - Cadastrar | 2 - Listar | 3 - Alterar | 4 - Excluir | 5 - Sair: ")

escolha = parseInt(readline.question("Digite a opcao desejada: "));

if (escolha == 1){
let tarefa = readline.question("Cadastre uma tarefa: ");
lista.push(tarefa)
}else if(escolha == 2){
console.log(lista)
}else if(escolha == 3){

}else if(escolha == 4){
    let excluirtarefa = readline.question("Escolha qual tarefa voce deseja remover: ")
    lista.splice(excluirtarefa, 1);
}
}
console.log("Fim do programa")