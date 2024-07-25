const readline = require('readline-sync')

let clientes = [];
let pedidos = [];

let opção = true;
while(opção){
console.log('------------------ Restaurante Kitsune ------------------')
console.log('1 - Cardápio | 2 - Fazer pedido | 3 - Alterar Pedido | 4 - Cancelar pedido | 5 - Sair: ')


escolha = parseInt(readline.question("Digite a opcao desejada: "))

switch(escolha){
    case 1:
listar_pedido()
break;
    case 2:
fazer_pedido()
break;
    case 3:
alterar_pedido()
break;
    case 4:
cancelar_pedido()
break;
    case 5:
sair_pedido()
break;
    default:
        console.log('Escolha uma opção válida')
}
}

function listar_pedido(){
    console.log('Lista de Tarefas:');
    pedidos.forEach((pedido) => {
    clientes.forEach((cliente) => {
        console.log(`Nome do cliente: ${cliente} | Pedido do cliente: ${pedido}`);
});
    });

}

function fazer_pedido(){

let nomeCliente = readline.question('Digite o seu nome: ')
let pedidoCliente = readline.question('Digite o seu pedido: ')
        
const adicionarPedido = {
    cliente: nomeCliente,
    pedido: pedidoCliente
 
}

clientes.push(nomeCliente)
pedidos.push(pedidoCliente)

 }

function cancelar_pedido(){
    console.log('Lista de pedidos: ', pedidos)
    let excluirpedido = parseInt(readline.question('Escolha qual tarefa voce deseja excluir: ')) -1;
    if (excluirpedido >= 0 && excluirpedido < pedidos.length) {
    lista.splice(excluirtarefa, 1)
    console.log('Pedido cancelado')
} else {
    console.log('Escolha um pedido existente')
}

}

function sair_pedido(){
    opção = false;
    console.log('Fim do programa')
}
