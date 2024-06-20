//1-Escreva um programa que verifique se um número fornecido pelo usuário é positivo, negativo ou zero.

var numero=0

if (numero >0){
    console.log("É um numero positivo")
}else if (numero <0){
    console.log("É um numero negativo")}

    else(console.log("È zero"))

//2-Crie um programa que leia a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade.

var idade=23

if (idade >=18){
    console.log("Voce é maior de idade")
}else if (idade <18){
    console.log("Voce é menor de idade")}
    
//3-Escreva um programa que verifique se um número fornecido pelo usuário é par ou ímpar.
    
    var y=99
    
    if (y%2==0){
        console.log("É um numero par")}
    
        else(console.log("È um numero impar"))

//4-Crie um programa que leia três números e determine qual é o maior.

    var numero1=1
    var numero2=2
    var numero3=3

    if(numero1>numero2 && numero1>numero3){
        console.log(numero1,"é maior que ",numero2,"e",numero3)
    }else if(numero2>numero1 && numero2>numero3){
        console.log(numero2,"é maior que ",numero1,"e",numero3)
    }else if(numero3>numero1 && numero3>numero2){
        console.log(numero3,"é maior que ",numero1,"e",numero2)
}

//5-Escreva um programa que verifique se uma letra fornecida pelo usuário é uma vogal ou uma consoante.

    var letra="c"

    if (letra == "a"|| letra == "e" || letra =="i" || letra =="o" ||letra == "u"){
    console.log("Vogal")
    }else {
    console.log("consoante")
}

//6-Faça um programa que leia a nota de um aluno e informe se ele está aprovado
//(nota maior ou igual a 7), em recuperação (nota entre 5 e 7) ou reprovado (nota menor que 5).

    var nota=4

    if (nota>=7){
    console.log("Aprovado")
    }else if(nota<7 && nota>=5) {
    console.log("Recuperação")
    }else if(nota<5){
    console.log("Reprovado")
}

//7-Escreva um programa que leia dois números e uma operação 
//(adição, subtração, multiplicação, divisão) e realize a operação entre os dois números.

var variavel1=20
var variavel2=10
var opcao="adição"

switch(opcao) {
    case "adição":
        console.log("Adição =", variavel1+variavel2);
        break;
    case "subtração":
        console.log("Subtração =", variavel1-variavel2);
        break;
    case "multiplicação":
        console.log("Multiplicação =", variavel1*variavel2);
        break;
    case "Divisão":
        console.log("Divisão =", variavel1/variavel2);
        break;
    default:
        console.log("Essa não é uma opção valida");
}

//8-Crie um programa que determine se um ano é bissexto.

    var ano=2000

    if(ano % 4 == 0 && ano % 100!= 0 && ano % 400 == 0)
        console.log(ano,"é uma ano bissexto")
    else(ano,"não é um ano bissexto")