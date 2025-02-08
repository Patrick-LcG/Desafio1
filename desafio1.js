// Gabriel Patrick - Back End

//QUESTÃO 1
let nome = 'Gabriel';
console.log(nome);

//QUESTÃO 2
let idade = '25'
let altura = '1.75'
console.log("Tenho " +idade+ " anos e " +altura+ " de altura.")

//QUESTÃO 3
let preco = 50;
let desconto = 0.2;
let valor_final = preco - preco*desconto;
console.log(valor_final);

//QUESTÃO 4
let temperatura = 30;

if (temperatura>25) {
    console.log("Está calor!");
} else {
    console.log("Está fresco!");
}

//QUESTÃO 5
let idade = 30;

if (idade>=18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade");
}

//QUESTÃO 6
let nota = parseInt (Math.random() * 10 + 1); //Apresentado na 1° semana do curso.

if (nota>=7) {
    console.log("Aprovado!");
} else if (nota>=5 && nota<=6) {
    console.log("Recuperação!");
} else {
    console.log("Reprovado!");
}

//QUESTÃO 7
let num1 = 7;
let num2 = 7;

if (num1 == num2) {
    console.log("Os números são iguais");
} else {
    console.log("Os números são diferentes");
}

//QUESTÃO 8
let nome = 'Gabriel';
let idade = 22;
console.log("Meu nome é " +nome+ " e eu tenho " +idade+ " anos.");

//QUESTÃO 9
let num = 1;
for (num;num<11;num++) {
    console.log(num);
}

//QUESTÃO 10
let num; //Essa questão eu testei lá na pasta com html disponibilizada na 1° semana.
while (num!=5) {
    num = prompt("Digite um número: ");
}

//QUESTÃO 11
let num7 = 7;
for (i=1; i<11 ;i++) {
    console.log(num7+ " * " +i+ " = " + i*num7);
}

//QUESTÃO 12
for (i=0;i<21;i++) { 
    if (i%2==0) {
        console.log(i);
    }
}

//QUESTÃO 13
function calcArea(raio) {
    let area = Math.PI*(raio*raio);
    return console.log(Math.round(area)); //Resolvi arredondar 
}

calcArea(3);

//QUESTÃO 14
function somaNum(a,b) { //Crio uma função que recebe 2 valores.
    let soma = a+b; // Armazeno o resultado da adição desses valores em soma.
    return console.log(soma); //Retorno o valor de soma.
}

somaNum(2,3);

//QUESTÃO 15
function numSoma(num1=10,num2=20) { // Apenas reutilizei a função da questão passada.
    let resultado = num1+num2;
    return console.log(resultado);
}

numSoma() //Chamei apenas a função, já que os valores de num1 e num2 foram definidos pelo enunciado.