let carregado = true

// IF, ELSE IF, ESLSE
// SE

if(carregado === true){
  console.log("Desconecte o Carregador")
}

// ENTÃO / SE NÃO
else{
  console.log("Conecte o Carregador")
}

let idade = 19

if(idade < 18) {
  console.log("menor de idade")
}

else if (idae === 18) {
  console.log("na idade certa")
}

else {
  console.log("maior de idade")
}

// SWIFT CASE

switch (idade) {
  case idade < 18:
    console.log("menor de idade")
    break;

    case 18:
      console.log("na idade certa")
      break;

      default:
        console.log("maior de idade")
        break;
}

// TERNARIO - 2 possibilidades

const resultado =
 idade < 18 
 ? console.log("menor de idade") 
 : console.log("maior de idade");

 // condição ? (if) : (else)



 // Função sem ancora -  só pode chamar a função depois

 const exibir = () => {
  console.log("ola");
 };

 exibir ()

 // Função com ancora pode ser chamada antes


 // VETOR iniciado empre pelo 0
 // INDEX -         0    1    2     3
  const numeros = ["um", 2, 3.400, []]

  // seletor por index
  console.log(numeros[2])

// empurrar adicionar
numeros.push(4)
console.log(numeros)

// retirar -  vai sempre retirar o ultimo que foi inserido
numeros.pop()
console.log(numeros)

// adicionar - inicio
numeros.unshift("zero")
console.log(numeros)

// retirar - inicio
numeros.shift()
console.log(numeros)

// adicionar qualquer ex: 1 = onde começa, 0 = não quer remover nenhum, 
numeros.splice(1,0,"tres")
console.log(numeros)

// remover qualquer ex: (2,1) 2 = onde começa 1 = quantos quer remover
numeros.splice(2,1)
console.log(numeros)