let vitorias = 200;
let derrotas = 11;
let patentes = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
let requisito = [10, 20, 50, 80, 90, 100];

function saldo(v, d) {
    return v - d;
}

let saldoVitorias = saldo(vitorias, derrotas);

function rank(saldoVitorias) {
    let nivel, i;

    for(i = 0; i < 6; i++) {
        if(saldoVitorias < requisito[i]) {
            nivel = patentes[i];
            break;
        }
    }
    //Caso o valor seja "Imortal" será implementado aqui
    nivel = patentes[i];

    return nivel;
}

let nivelFinal = rank(saldoVitorias);

console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível de ${nivelFinal}`);
