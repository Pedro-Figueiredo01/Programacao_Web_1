/*
Operadores logicos

&& and lógico
|| or lógico
! not lógico
*/

//Exemplos simples

let num1 = 10
let num2 = 15
let num3 = 2

console.log("condições simples")

if (num1 >= num2){
    console.log("entrou no if")
}else{
console.log("(falso!)não entrou if")
}

//Exemplo composto

console.log("condições compostas")

if ((num1 >= num2) && (num1 != num3)){
    console.log("entrou no if")
}else{
console.log("(falso!)não entrou if")
}

//Exemplo com 3 condições

console.log("condições com 3 situações")

if (((num1 >= num2) && (num1 != num3)) || (num1 != num3)){
    console.log("entrou no if")
}else{
console.log("(falso!)não entrou if")
}

//Exemplo simples negada

console.log("condições simples negada")

if (!(num1 >= num2)){
    console.log("entrou no if")
}else{
console.log("(falso!)não entrou if")
}
