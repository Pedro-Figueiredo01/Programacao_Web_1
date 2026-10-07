
let nome = (prompt("Digite o seu nome"))
let num1 = Number(prompt("Digite a primeira nota"))
let num2 = Number(prompt("Digite a segunda nota"))

 let soma = (num1 + num2) /2

       if ( soma >= 6){
    console.log("Parabéns pela aprovação")
    }else{
    console.log("Infelismente você não passou")
    }


alert("Bem vindo ao PPs Burguer")
let escolha = Number(prompt("1 - Combo Bug Hambúrguer + Refri \n 2 - Combo Deploy Pizza + Suco \n 3 - Combo Sênior Salada + Água "))


switch(escolha){
    case 1:
        alert(`Você escolheu o combo Bug hamburguer`)
        break
        case 2:
        alert(`Você escolheu o combo Deploy pizza`)
        break
        case 3:
        alert(`Você escolheu o combo Sênior`)   
        break 
    default:
        alert(`Erro! escolha invalida`)
}

let idade = (prompt("Digite a sua idade"))
 if ( idade >= 18){
    let escolha = Number(prompt("Qual plano ele deseja assinar: \n 1-Básico \n 2-Pro \n 3-VIP"))     
        switch(escolha){
    case 1:
        alert(`Você escolheu o plano Básico \n Acesso a jogos mensais`)
        break
        case 2:
        alert(`Você escolheu o plano Pro \n Acesso a um grande catalogo de jogos modernos mais os beneficios do plano Básico`)
        break
        case 3:
        alert(`Você escolheu o plano VIP \n Acesso a jogos experimentais e todos os outros beneficios`)   
        break 
    default:
        alert(`Erro! escolha invalida`)
}
}
else{
    alert(`ACESSO BLOQUEADO`)
}
