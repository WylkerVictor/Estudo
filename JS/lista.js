const readline = require('readline-sync');

let lista = []

let lista1 = parseFloat(readline.question('1 - Inserir | 2 - Listar | 3 - Sair: '));

switch(lista1){
        case 1:
            let valor = parseInt(readline.question('Digite o numero que voce quer inserir: '));
            lista.push(valor)
        case 2:
            console.log(lista)
        case 3:
            console.log('Fim do programa')
            break;
    }

console.log('Fim do programa')