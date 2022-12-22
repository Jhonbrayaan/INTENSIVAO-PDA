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


//