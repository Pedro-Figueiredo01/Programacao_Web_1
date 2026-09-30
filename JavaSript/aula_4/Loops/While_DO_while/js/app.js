/*
A diferença do While e Do while
1 - While
    1.1 - verifica a condição antes de entrar no loop 
    1.2 - tem um contador e variavel de escape no loop
2 - Do while
    1.1 - Primeiro executa o loop e depois testa
    1.2 - usado quando se precisa executar o loop pelo menos uma 
    1.3 - Escapa do loop apenas se a variavel atender a condição
*/
//while
/*
let num1 = 0
while(num1 <=5){
    console.log(`${(num1 +1)}° rodada`)
    num1++
}
*/

//Exemplo 2 Tabuada
let escolha = Number(prompt("Digite o valor da tabuada"))
let num1 = 0
while(num1 <=10){
    console.log(`${escolha} X ${num1} = ${(escolha * num1)}`)
    num1++
}
//correção tabuada com Prompt

