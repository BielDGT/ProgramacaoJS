//1-Imprimir números de 1 a 10
/*
i=0

while(i<10){
    i=i+1
    console.log(i)
}

//2-Imprimir números pares de 1 a 20

i=0

while(i<21){
    i=i+1
    if (i%2==0){console.log(i)}
}

//3-Somar números de 1 a 100

i=0
soma=0

while(i<100){
    i=i+1
    console.log(soma=soma+i)
}

//4-Tabuada do 5

    i=0

    while(i<10){
        i=i+1
        console.log("5 X",i,"=",i*5)
}

//5-Imprimir uma frase 10 vezes

i=0

while(i<10){
    i=i+1
    console.log("Eu estou aprendendo laços de repetição")
}


//6-Fatorial de um número

n=8
i=0
fatorial=1

while(i!=n){
    fatorial=fatorial*n
    n=n-1
}
console.log(fatorial)


//7-Imprima os primeiros 10 números da sequência de Fibonacci utilizando um laço de repetição

n=10
i=1
numero1=0
numero2=1
Fibonacci=0

while(i!=n){
    Fibonacci=numero1+numero2
    numero1=numero2
    numero2=Fibonacci
    n=n-1
    console.log(Fibonacci)
}

//8-Imprima todos os números primos de 1 a 50 utilizando um laço de repetição

numeroF=1

while(numeroF<=50){
    if(numeroF==2 || numeroF==3||numeroF==5||numeroF==7||numeroF%1==0 && numeroF%numeroF==0 && numeroF%2!=0 && numeroF%3!=0 && numeroF%5!=0 && numeroF%7!=0){
        console.log(numeroF)
    }
    numeroF=numeroF+1
}*/
//10- Implemente uma contagem regressiva de 10 até 0 utilizando um laço de repetição.

i=10

while(i>-1){
    console.log(i)
    i=i-1
}
