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



/*## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/