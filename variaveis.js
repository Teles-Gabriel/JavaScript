const titulo = 'Tipos de Variáveis';
console.log(titulo);

console.log(); //deixar uma linha em branco

var corda = 'String recebe um ou mais caracteres(texto)';
console.log(corda);
const nome = 'gabriel' //String
console.log(nome);
console.log(typeof nome);

console.log();

console.log('Uma váriavel number recebe números podendo ser inteiros ou reais');
var idade = 10; //Number
console.log(idade);
console.log(typeof idade);

console.log();

console.log('Boolean valor binário: sim ou não, 0 ou 1, true ou false');
const pessoa = true;
console.log('pessoa = true');
console.log(pessoa);
console.log(typeof pessoa);

console.log();

console.log('variável null');
const A = null;
console.log(typeof A);

console.log();

console.log('Undefined');
const B = undefined;
console.log(B);

//concatenação
console.log('nome ' + nome + ' idade ' + idade);

console.log('número de letras= ' + nome.length + ' ' + nome.split(''));

//array 
const lista = [0,1,2,3,4,5,6,7];
console.log(lista);  //para chamar um elemento,usar o nome da variavel[posição do elemento]
console.log(lista[5]);

