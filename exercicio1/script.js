'strict';

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

let sacolao = [];

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades:

let obj1 = {
  nome: 'laranja',
  preco: '9,90',
  disponibilidade: true,
};
let obj2 = {
  nome: 'batata',
  preco: '7,90',
  disponibilidade: false,
};
let obj3 = {
  nome: 'abobrinha',
  preco: '3,90',
  disponibilidade: true,
};

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(obj1, obj2, obj3);

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(typeof sacolao, sacolao.length, sacolao);
console.log(sacolao[1]);
