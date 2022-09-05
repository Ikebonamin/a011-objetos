'strict';

const pokemon1 = {
  nome: 'Bulbasaur',
  tipo: 'Grama',
  nivel: 5,
};

console.log('inicial', pokemon1);

// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”

let pokemon2 = {
  ...pokemon1,
  nome: 'Squirtle',
  tipo: 'Água',
};
console.log('exercício A', pokemon2);

// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`

let pokemon3 = {
  ...pokemon1,
  ...pokemon2,
  Ataques: [],
};
pokemon3.Ataques.push([
  { nome: 'investida' },
  { dano: 40 },
  { tipo: 'normal' },
  { precisão: 100 },
]);

console.log('exerrcício B', pokemon3);

// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
let pokemon4 = {
  ...pokemon1,
  ataques: [...pokemon3.Ataques],
};
console.table('exercício C', pokemon4);

// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
let pokemon5 = {
  ...pokemon1,
  ataques: [
    { nome: 'Folha de Navalha' },
    { dano: 45 },
    { precisão: 100 },
    { tipo: 'grama' },
  ],
};

console.log(pokemon5);

// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;

let pokemon6 = {
  ...pokemon1,
  nome: 'Squirtle',
  tipo: 'Água',
  ataques: [
    { nome: 'Jato de Água' },
    { dano: 4 },
    { precisão: 100 },
    { tipo: 'água' },
  ],
};
console.log('exercício e', pokemon6);

// f) Imprima os dois objetos no console.
console.log(pokemon4, pokemon6);
