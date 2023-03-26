/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Luiz Henrique Bispo 
DATA: 26/03/2023 */

// Bubble Sort

function bubble_sort(vetor) {
    const len = vetor.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (vetor[j] > vetor[j + 1]) {
          let temp = vetor[j];
          vetor[j] = vetor[j + 1];
          vetor[j + 1] = temp;
        }
      }
    }
    return vetor;
  }

const vetor = [55, 16, 10, 24, 85, 52];
console.log('Burble Sort: ' + bubble_sort(vetor));



// Fatorial
function fatorial(num) {
    if (num === 0) {
      return 1;
    }
    return num * fatorial(num - 1);
  }
  
const num = 4;
console.log('\nFatorial: '+ fatorial(num));


// Fibonacci
function fibonacci(number) {
    let number1 = 0;
    let number2 = 1;
    let nextnumber;
    const result = [number1, number2];
  
    for (let i = 2; i < number; i++) {
      nextnumber = number1 + number2;
      number1 = number2;
      number2 = nextnumber;
      result.push(nextnumber);
    }
  
    return result;
  }
  
  const number = 15;
  console.log('\nFibonacci: ' + fibonacci(number));


  
// Número Primo

function primo(numb) {
    if (numb < 2) {
      return false;
    }
    for (let i = 2; i < numb; i++) {
      if (numb % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const numb = 13;

  const resultado = ()=>{
    if(primo(numb) === true)
        return "Sim"
    else 
        return "Não"
  }
  console.log('\n' + numb + ' é primo? ' + resultado());


// Inverter String

function inverte(str) {
    return str.split('').reverse().join('');
  }
  
  const str = 'Good';
  console.log('\nInverte: ' + inverte(str));


// Contar o número de palavras em uma string
function contar(string) {
    return string.split(' ').length;
  }
  
  const string = 'Melhor aula da faculdade';
  console.log('\nTotal de Palavras: ' + contar(string));


//Calcular média
function average(numbers) {
    const total = numbers.reduce((acc, cur) => acc + cur, 0);
    return total / numbers.length;
  }
  
  const numbers = [2, 5, 8, 12, 16];
  console.log('\nMédia: ' + average(numbers));


// Encontrar a palavra mais longa:
  function longestWord(word ) {
    const words = word .split(' ');
    let longest = '';
    words.forEach((word) => {
      if (word.length > longest.length) {
        longest = word;
      }
    });
    return longest;
  }
  
  const word  = 'O rato roeu a roupa do rei de Roma';
  console.log('\nPalavra mais longa: ' + longestWord(word));


//Algoritmo para somar todos os números em uma matriz:

function somaMatriz(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        soma += matriz[i][j];
      }
    }
    return soma;
  }
  
  const matriz = [[5, 8], [7, 4], [10, 6]];
  console.log('\nSoma: ' + somaMatriz(matriz));


  // Algoritmo para calcular o fatorial de um número usando recursão:
  function fatorialRecursivo(numero) {
    if (numero === 1) {
      return 1;
    } else {
      return numero * fatorialRecursivo(numero - 1);
    }
  }
  
  console.log('Fatorial: ' + fatorialRecursivo(5));