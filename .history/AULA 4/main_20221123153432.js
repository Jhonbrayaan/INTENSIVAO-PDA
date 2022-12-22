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