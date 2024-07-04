let readline = require('readline-sync');

let metros = readline.question('Digite metros você quer converter para centimentros: ');
console.log(metros);
resultado = metros * 100;
console.log(`Valor digitado: ${metros}m | Resultado: ${resultado}cm`);