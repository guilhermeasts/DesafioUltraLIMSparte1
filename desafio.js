//Função que encontra o numero faltante da sequência de numeros

function encontrarNumerosFaltantes(arr) {
    const numerosFaltantes = [];
    const max = Math.max(...arr); // Verifica valor máximo do array

    for (let i = 1; i < max; i++) { // Faz o Loop até esse valor máximo
        if (!arr.includes(i)) { // Verifica se o valor i é diferente dos includos no array 
            numerosFaltantes.push(i); 
        }
    }

    return numerosFaltantes;
}

// Exemplo
const arr = [1, 2, 3, 6, 7, 8];
console.log(encontrarNumerosFaltantes(arr));

//Função que encontra o sequencia de numeros que somados resultam em zero

function encontrarSomaIgualaZero(arr){
    
    for (let i = 0; i < arr.length - 2; i++){ 
        if(arr[i] + arr[i+1] + arr[i+2] == 0){ // Verifica se o valor do array na posição somado com os dois próximos valores resultam em 0
            return arr[i] + " + " + arr[i+1] + " + " + arr[i+2] + " = 0"; 
        }       
    }
    return "Nenhuma sequência de três valores resulta em 0";
}

// Exemplo
const arr2 = [-1, 0, 1, 2, -1, -4];
console.log(encontrarSomaIgualaZero(arr2));

//Função que encontra três valores em sequencia que a soma é igual o parametro passado 

function SomaIgualParametro(arr, num){

var arrResposta = [];

    for(let i = 0; i < arr.length - 2; i++){
        if(arr[i] + arr[i + 1] + arr[i + 2] == num){ // Condicional que verifica se a posição do array somada com as duas próximas resulta no numero passado por parametro
           arrResposta.push(arr[i] + " + " + arr[i + 1] + " + " + arr[i + 2] + " = " + num + ".");
        }
    }
    if(arrResposta.length > 0){
        return arrResposta
    } else {
        return "Nenhuma sequencia de valores resulta em " + num;
    }

}

const arr3 = [2, 7, 7, 1, 8, 2, 7, 8, 7];
const num = 16;
console.log(SomaIgualParametro(arr, num));

function encontrarNumeroSozinho(arr) {
    let contador = {};
  
    // Conta as ocorrências de cada número no array
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      contador[num] = (contador[num] || 0) + 1;
    }
  
    // Procura o número que aparece apenas uma vez
    for (let num in contador) {
      if (contador[num] === 1) {
        return "O numero que aparece apenas uma vez é: " + parseInt(num);
      }
    }
  
    return "Nenhum número único encontrado.";
  }
  
  // Exemplo
  const arr4 = [5, 3, 4, 3,4];
  console.log(encontrarNumeroSozinho(arr4));
  


  function fazerSequenciaFibonacci(num) {
    let arr = [];
  
    for (let i = 0; i < num; i++) {
      // Se o contador do for for menor ou = 1 ele usa i como no array
      if (i <= 1) {
        arr.push(i);
      } else {
        // A cada número é a soma dos dois anteriores na sequência
        arr.push(arr[i - 1] + arr[i - 2]);
      }
    }
  
    return arr;
  }
  
  // Exemplo 
  const num2 = 6;
  console.log(fazerSequenciaFibonacci(num2));

  
  function encontrarNumeroSozinhoNosTrios(arr) {
    const mapaContagem = new Map();

    // Conta as ocorrências de cada elemento no array
    for (const num of arr) {
        if (mapaContagem.has(num)) {
            mapaContagem.set(num, mapaContagem.get(num) + 1);
        } else {
            mapaContagem.set(num, 1);
        }
    }

    // Encontra o elemento com contagem não divisível por 3
    for (const [chave, contagem] of mapaContagem.entries()) {
        if (contagem % 3 !== 0) {
            return "O número que não se repete três vezes encontrado é: " + chave;
        }
    }
    return "Não foi encontrado número que não se repete três vezes";
}
  
const arr5 = [5, 3, 4, 3, 5, 5, 3];
console.log(encontrarNumeroSozinhoNosTrios(arr5))

  
  
   
