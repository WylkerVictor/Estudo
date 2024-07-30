const readline = require('readline-sync')

let pedidos = [];
let comidas = ['Sushi', 'Sashimi', 'Tempurá', 'Guioza', 'Temaki', 'Missoshiru', 'Harumaki', 'Robata'];
let bebidas = ['Shochu', 'Awamori', 'Amazake', 'Umeshu', 'Hoppy', 'Sakurayu', 'Toso', 'Soju'];

let opção = true;
while(opção){
console.log('------------------ Restaurante Kitsune ------------------')
console.log('1 - Cardápio | 2 - Fazer pedido | 3 - Listar pedidos | 4 - Cancelar pedido | 5 - Sair: ')


escolha = parseInt(readline.question("Digite a opcao desejada: "))

switch(escolha){
    case 1:
listar_cardapio()
break;
    case 2:
fazer_pedido()
break;
    case 3:
listar_pedidos()
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

function listar_cardapio(){ 
    console.log('Comidas:')
    console.log(comidas);
    console.log('Bebidas:')
    console.log(bebidas);
}

function fazer_pedido(){
let nomeCliente = readline.question('Digite o seu nome: ')
let pedidoCliente = readline.question('Digite o seu pedido: ')

pedidos.push({nome: nomeCliente, pedido: pedidoCliente})

 }

 function listar_pedidos(){
    if(pedidos == 0){
        console.log('Nenhum pedido foi feito ainda')
        return;
    }
    console.log('Lista de pedidos:');
    pedidos.find((pedido) => {
        console.log(`Nome do cliente: ${pedido.nome} | Pedido do cliente: ${pedido.pedido}`);
    })
}
function cancelar_pedido(){
    console.log('Lista de pedidos: ', pedidos)
    let excluirpedido = parseInt(readline.question('Escolha qual tarefa voce deseja excluir: ')) -1;
    if (excluirpedido >= 0 && excluirpedido < pedidos.length) {
    pedidos.splice(excluirpedido, 1)
    console.log('Pedido cancelado')
} else {
    console.log('Escolha um pedido existente')
}

}

function sair_pedido(){
    opção = false;
    console.log('Fim do programa')
}
