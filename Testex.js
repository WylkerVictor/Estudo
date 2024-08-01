const readline = require('readline-sync')

let restaurantes = []
let pedidos = []

let opção = true;
while(opção){
console.log('------------------ Restaurante Kitsune ------------------')
console.log('1 - Fazer pedido | 2 - Listar pedidos | 3 - Cancelar pedido \n | 4 - Sair | 5 - Alterar restaurante | 6 - Adicionar restaurante | 7 - Listar restaurante: ')


escolha = parseInt(readline.question("Digite a opcao desejada: "))

switch(escolha){
    case 1:
fazer_pedido()
break;
    case 2:
listar_pedidos()
break;
    case 3:
cancelar_pedido()
break;
    case 4:
sair_pedido()
break;
    case 5:
alterar_restaurante()
break;
    case 6:
adicionar_restaurantes()
break;
    case 7:
listar_restaurantes()
break;
    default:
        console.log('Escolha uma opção válida')
}
}


function adicionar_restaurantes(){
    let nomeRestaurante = readline.question('Digite o nome do restaurante: ');
    restaurantes.push({nome: nomeRestaurante})
}

function listar_restaurantes(){
    if(restaurantes == 0){
        console.log('Nenhum restaurante foi adicionado')
        return;
    } 
    console.log(restaurantes);
    let selecionar = parseInt(readline.question('Escolha um restaurante: ')) -1;
    pedidos.find((listar) => { 
        console.log(`Nome do restaurante: ${listar.nome} | Pedidos do restaurante: ${listar.pedidos}`)
    })
}

function fazer_pedido(){
if(restaurantes == 0){
    console.log('Nenhum restaurante foi adicionado')
return;
} 
console.log(`Lista de restaurantes: ${restaurantes}`)
let restaurantee = parseInt(readline.question('Escolha o restaurante: ')) -1;
    if (restaurantee >= 0 && restaurantee < restaurantes.length) {
    restaurantes.find(restaurantee, 1)
    console.log(`Nome do restaurante: ${restaurantes}`)

let nomeCliente = readline.question('Digite o seu nome: ')
let pedidoCliente = readline.question('Digite o seu pedido: ')
pedidos.push({nome: nomeCliente, pedido: pedidoCliente})
    }
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
    let restaurantee = parseInt(readline.question('Escolha qual pedido voce deseja cancelar: ')) -1;
    if (restaurantee >= 0 && restaurantee < pedidos.length) {
    pedidos.splice(restaurantee, 1)
    console.log('Pedido cancelado')
} else {
    console.log('Escolha um pedido existente')
}

}

function sair_pedido(){
    opção = false;
    console.log('Fim do programa')
}

function alterar_restaurante(){
let alterarRestaurante = parseInt(readline.question('Escolha qual tarefa voce deseja alterar: ')) -1;
    novoRestaurante = readline.question('Digite a nova tarefa: ')

    if (alterarRestaurante >= 0 && alterarRestaurante < lista.Length) {
        restaurantes[alterarRestaurante] = novoRestaurante;
        console.log('Lista atualizada')
} else {
    console.log('Digite um valor valido')
}
}