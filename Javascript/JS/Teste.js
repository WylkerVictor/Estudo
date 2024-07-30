const readline = require('readline-sync')

let pedidos = [];
let comidas = ['Sushi', 'Sashimi', 'Tempurá', 'Guioza', 'Temaki', 'Missoshiru', 'Harumaki', 'Robata'];
let bebidas = ['Shochu', 'Awamori', 'Amazake', 'Umeshu', 'Hoppy', 'Sakurayu', 'Toso', 'Soju'];

let opção = true;
while(opção) {
    console.log('------------------ Restaurante Kitsune ------------------')
    console.log('1 - Cardápio | 2 - Fazer pedido | 3 - Listar pedidos | 4 - Cancelar pedido | 5 - Sair: ')

    let escolha = parseInt(readline.question("Digite a opção desejada: "))

    switch(escolha) {
        case 1:
            listar_cardapio();
            break;
        case 2:
            fazer_pedido();
            break;
        case 3:
            listar_pedidos();
            break;
        case 4:
            cancelar_pedido();
            break;
        case 5:
            sair_pedido();
            break;
        default:
            console.log('Escolha uma opção válida');
    }
}

function listar_cardapio() { 
    console.log('Comidas:');
    console.log(comidas.join(' | '));
    console.log('Bebidas:');
    console.log(bebidas.join(' | '));
}

function fazer_pedido() {
    let nomeCliente = readline.question('Digite o seu nome: ');
    let pedidoCliente = readline.question('Digite o seu pedido (separe por vírgulas se for múltiplos): ');

    pedidos.push({ nome: nomeCliente, pedido: pedidoCliente });
}

function listar_pedidos() {
    if (pedidos.length === 0) {
        console.log('Nenhum pedido feito ainda.');
        return;
    }

    console.log('Lista de pedidos:');
    pedidos.forEach((pedido, index) => {
        console.log(`${index + 1} - Nome do cliente: ${pedido.nome} | Pedido do cliente: ${pedido.pedido}`);
    });
}

function cancelar_pedido() {
    listar_pedidos();
    if (pedidos.length === 0) {
        return;
    }
    
    let excluirPedido = parseInt(readline.question('Escolha qual pedido deseja excluir: ')) - 1;
    if (excluirPedido >= 0 && excluirPedido < pedidos.length) {
        pedidos.splice(excluirPedido, 1);
        console.log('Pedido cancelado');
    } else {
        console.log('Escolha um pedido existente');
    }
}

function sair_pedido() {
    opção = false;
    console.log('Fim do programa');
}
