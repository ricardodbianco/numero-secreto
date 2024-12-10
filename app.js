alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto =  parseInt(Math.random() * 10 + 1); //parseInt recupera apenas a parte inteira, desprezando as casas decimais. Multiplicando por 10, teremos números entre 0 e 9
// então somamos 1, para termos números entre 1 e 10.
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // operador ternário '?' - caso tentativas for maior do que 1 ? 'tentativas' :(senão) 'tentativa'
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}! Com ${tentativas} ${palavraTentativa}.`);
// if (tentativas > 1) {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}! Com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`)
// }