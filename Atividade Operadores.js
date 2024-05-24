//1-Escreva um programa que receba duas variáveis de números inteiros e realize as quatro 
//  operações básicas (adição, subtração, multiplicação e divisão). Mostre os resultados

var variavel1=20
var variavel2=10

console.log("Soma =", variavel1+variavel2)
console.log("Subtração =", variavel1-variavel2)
console.log("Multiplicação =", variavel1*variavel2)
console.log("Divisão =", variavel1/variavel2)

//2-Crie um programa que converta uma temperatura de Fahrenheit
//  para Celsius. A fórmula de conversão é: C = (F - 32 ) / 1,8

var Fahrenheit=50
var Celsius=(Fahrenheit-32 )/1.8

console.log("Celsius=",Celsius,"°C")

//3-Crie um programa que converta uma temperatura de Celsius para Fahrenheit.
//  A fórmula de conversão é: F = C x (9/5) + 32

var Celsius=10
var Fahrenheit=Celsius*(9/5)+32

console.log("Fahrenheit=",Fahrenheit,"°F")

//4-Faça um programa que converta metros para centímetros. A variavel deve receber o valor em metros

var metros=10

console.log("centimetros=",metros*100,"cm")

//5. Crie um programa que calcule o preço final de um produto após um desconto de 10%,
//   a variável deve receber o valor total da venda

var produto=2000
var desconto=produto*0.9

console.log("preço final=",desconto)