const readline = require('readline-sync');

function calculo(soma, multiplicacao, subtracao, divisao){
    console.log('Resultado: ', soma);
    console.log('Resultado: ', multiplicacao);
    console.log('Resultado: ', subtracao);
    console.log('Resultado: ', divisao);
}{
    let num1 = parseFloat(readline.question('Digite o primeiro num: '));
    let num2 = parseFloat(readline.question('Digite o segundo num: '));
    let soma = num1 + num2;
    let multiplicacao = num1 * num2;
    let subtracao = num1 - num2;
    let divisao = num1 / num2;

    calculo(soma, multiplicacao, subtracao, divisao)

}
