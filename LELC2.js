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

    var ano=1900

    if((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)){
        console.log(ano,"é um ano bissexto")
    } else{
        console.log(ano,"não é um ano bissexto")
}
    

//9-Escreva um programa que verifique se um número fornecido pelo usuário é primo.

    var numeroF=4

    if(numeroF==2||numeroF%1==0 && numeroF%numeroF==0 && numeroF%2!=0){
        console.log(numeroF,"é um numero primo!")
    }else{
        console.log(numeroF,"não é um numero primo")
}

//10-Escreva um programa que leia o peso e a altura de uma pessoa e calcule seu IMC,
//   informando se está abaixo do peso, no peso normal, acima do peso ou obeso

var peso= 70
var altura=1.78
var IMC=peso/(altura*altura)

console.log("Seu IMC é:",IMC)

    if(IMC<18.5){
        console.log("Abaixo do peso")
    }else if(IMC>=18.5 && IMC<25){
        console.log("Peso Adequado")
    }else if(IMC>=25 && IMC<30){
        console.log("Acima do peso")
    }else if(IMC>=30){
        console.log("Obesidade")
    }else {
        console.log("Dados invaidos")
}

//11-Escreva um programa que leia um mês do ano e informe quantos dias ele tem.

var mes="abril"

switch(mes) {
    case "janeiro":
        console.log("Janeiro tem 31 dias");
        break;
    case "fevereiro":
        console.log("Fevereiro tem 28 dias");
        break;
    case "março":
        console.log("Março tem 31 dias");
        break;
    case "abril":
        console.log("Abril tem 30 dias");
        break;
    case "maio":
        console.log("maio tem 31 dias");
        break;
    case "junho":
        console.log("junho tem 30 dias");
        break;
    case "julho":
        console.log("Julho tem 31 dias");
        break;
    case "agosto":
        console.log("Agosto tem 30 dias");
        break;
        case "setembro":
        console.log("Setembro tem 31 dias");
        break;
    case "outubro":
        console.log("Outubro tem 28 dias");
        break;
    case "novembro":
        console.log("Novembro tem 31 dias");
        break;
    case "dezembro":
        console.log("Dezembro tem 30 dias");
        break;
    default:
        console.log("Essa não é uma opção valida");
}

//12-Faça um programa que verifique se um triângulo é equilátero, isósceles ou escaleno com base nos comprimentos de seus lados.
    var numero1 = 10
    var numero2 = 20
    var numero3 = 30

    if (numero1 == numero2 && numero2 == numero3){
        console.log("é um triângulo equilátero")
    }else if(numero1 == numero2 && numero2 != numero3 || numero2 == numero3 && numero3 != numero1 || numero1 == numero3 && numero3 != numero2){
        console.log("triângulo isósceles");
    }else if(numero1 != numero2 && numero2 != numero3 && numero1 != numero3){
        console.log("Triangulo Escaleno")
}

//13-Crie um programa que simule um jogo de adivinhação, onde o usuário tem que adivinhar um número entre 1 e 100 gerado aleatoriamente
// pelo programa, com dicas de "maior" ou "menor" após cada palpite.

    var aleatorio=Math.floor (Math.random() * 101)
    var chute=77

    console.log(aleatorio)

    if(chute==aleatorio){
        console.log("Voce acertou!!Parabens!!")
    }else if(chute>aleatorio){
        console.log("Voce errou! Ele é menor ")
    }else if(chute<aleatorio){
        console.log("Voce errou! Ele é maior")
    }else{
        console.log("Dados invalidos")
}