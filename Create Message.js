//Gerador de Mensagem básico utilizando ArrowFunction
let choice = window.prompt('Selecione o tipo de mensagem: \n'
    + ' 1 - Saudação \n'
    + ' 2 - Despedida \n'
    + ' 3 - Sugestão \n '
)

if (choice == 1) {
    let hi = (choice) => 'Olá, Seja muito bem vindo(a)! Como eu poderia estar te ajudando?'
    alert(hi(choice))
} else if (choice == 2) {
    let bye = (choice) => 'Certo, Até mais, nos falamos quando nos encontrarmos novamente! '
    alert(bye(choice))
} else if (choice == 3) {
    let opn  = (choice) => 'Eu sugiro você fazer dessa forma, pois é a forma mais prática de se realizar isso!'
    alert(opn(choice))
}

