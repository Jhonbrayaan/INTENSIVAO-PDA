// captar a média de 3 notas

//valor1
//valor2
//valor3

// resultado = (valor1 + valor2 + valor3) /3

var valor1 = 7;
var valor2 = 3;
var valor3 = 10;

var resultado = (valor1 + valor2 + valor3) / 3;

console.log(resultado);

// NUMERICO - INT, FLOAT

var inteiro = 10.0 //INT
var real = 45 //FLOAT

//TEXTO - STRING

var texto = "a.."

//BOOLEAN - TRUE/FALSE

var boolean = true

//NULL, UNDERFINED NAN

var nulo = null
var indefinido =  //não defini
var nan = "abc.." * 2

// VARIAVEIS
var // vazar dados / dados de escopo global
let // não vazar / dados de escopo local

let global = 3 

function a (){
  let salvar = "ola"
}

if(true){
  let mundo = "oi"
  console.log(mundo)
}

// variavel local = let
// global = var

// CONSTANTES não pode mudar o valor
const mundo = "mundo" // o valor é atribuido somente uma unica vez
mundo =  "word"

// FUNÇÕES

var idade = 19

function mostrarIdade(){
  console.log(idade);
}

mostrarIdade();


function exibirNome(nome){
  console.log(nome)
}

exibirNome("Jhon")

// NÃO TEM NOME
var anonimo = function(){
  console.log()
}

anonimo()


var anonimo = (text) => {
  console.log(text);
};

anonimo("so anonimo");

// WHILE - FOR

while // condição & código



// = - atribuição
// == - igual que (valor)
// === - extritamente igual que (valor & tipo)
// > -  maior que 
// < - menor que 
// >= - maior ou igual que
// <= - menor ou igual que
// ! - negação
// != - diferente que (valor)
// !== - extritamente diferente que (valor & tipo)
// && - E
// || - OU (se algum for verdadeiro)


var carregado = false;

while(numero < 4){
  console.log(numero)
  numero = numero + 1
}

// 0 < 4 = true => 0 => 0 + 1 = 1
// 0 < 4 = true => 1 => 1 + 1 = 2

// numero = 1
// numero = 2
// numero = 3
// numero = 4
