const readline = require('readline-sync');

const dinheiro = readline.question('Digite quanto voce ganha por hora: ');
const tempo = readline.question('Digite quantas horas voce trabalha por mes: ');
let total;
total = dinheiro * tempo;
console.log(`Salário: R$ ${total}`);