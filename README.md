# Calculadora de Partidas Rankeadas 👾🎮
Projeto de código realizado durando o bootcamp **[GFT Start #6 - Lógica de Programação](https://web.dio.me/track/gft-start-logica-de-programacao)** na plataforma **[DIO](https://web.dio.me/home)**.

### O desafio tem o intuito de praticar a Lógica de Programação em `JavaScript`, utilizando:
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Lógica do código 💻

Criar uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo `(vitórias - derrotas)`

O Nível do jogador é definido pela tabela abaixo:

| Saldo de Vitórias | Nível |
| -------- | ----- |
| Menor que 10 | Ferro |
| Entre 11 e 20 | Bronze |
| Entre 21 e 50 | Prata |
| Entre 51 e 80 | Ouro |
| Entre 81 e 90 | Diamante |
| Entre 91 e 100 | Lendário |
| Maior que 100 | Imortal |

Ao final, deve-se exibir uma mensagem indicando o Nível do jogador.

## Metodologia utilizada 📝

No início do código, temos as declarações de todas as variáveis que irão ser utilizadas para a resolução do problema. Para as variáveis `patentes` e `requisito` escolhi utilizar Vetores, guardando cada nível diferente, e cada requisito que se deve ter para subir para cada nível específico, tudo em um lugar só.

A primeira função criada foi a `saldo`, que apenas retorna o Saldo de Vitórias do jogador.

A segunda função, `rank`, é a que realmente faz o que o problema está pedindo. Ela utiliza de um Laço de Repetição para comparar o **Saldo de Vitórias** com cada **requisito** necessário, assim, é definido o nível do jogador, quebrando o laço assim que o faz.

Por fim, o código exibe no console a mensagem desejada, utilizando o método de `Interpolação de Strings`.