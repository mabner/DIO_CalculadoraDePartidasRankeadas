/**
 ## O Que deve ser utilizado

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

 ## Objetivo

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
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 */

const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

function calcularRankeadas(vitorias, derrotas) {
  return vitorias - derrotas;
}

function determinarNivel(saldoVitorias) {
  let nivel = '';

  switch (true) {
    case saldoVitorias <= 10:
      nivel = 'Ferro';
      break;
    case saldoVitorias > 10 && saldoVitorias <= 20:
      nivel = 'Bronze';
      break;
    case saldoVitorias > 20 && saldoVitorias <= 50:
      nivel = 'Prata';
      break;
    case saldoVitorias > 50 && saldoVitorias <= 80:
      nivel = 'Ouro';
      break;
    case saldoVitorias > 80 && saldoVitorias <= 90:
      nivel = 'Diamante';
      break;
    case saldoVitorias > 90 && saldoVitorias <= 100:
      nivel = 'Lendário';
      break;
    case saldoVitorias >= 101:
      nivel = 'Imortal';
      break;
  }
  return nivel;
}

async function executar() {
  const rl = readline.createInterface({ input, output });

  console.log('...::: Calculadora de partidas Rankeadas :::...\n');

  const vitorias = Number(
    await rl.question('Informe a quantidade de vitórias: '),
  );
  const derrotas = Number(
    await rl.question('Informe a quantidade de derrotas: '),
  );

  const saldo = calcularRankeadas(vitorias, derrotas);
  const nivel = determinarNivel(saldo);

  console.log(`O Herói tem saldo de ${saldo} e está no nível de ${nivel}`);

  console.log();

  rl.close();
}

executar();
