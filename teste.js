
/*function somar (a,b) {
    return a+b
}

console.log(somar(2,3));*/

const readline = require('readline-sync');

let idade = Number(readline.question('Digite sua idade: '));
if (idade >= 18) {
    console.log('Pode tirar a habilitação!');
}
