// const numero1 = Number(prompt("ingresa el primer numero"))
// const numero2 = Number (prompt("ingresa el segundo numero"))

// if (numero1<=numero2) {
//     for (let i = numero1; i <= numero2; i++) {
//         console.log (i)    
//     }   
// }

const numero1 =Number(prompt("Ingrese el primer número:"));
const numero2 =Number(prompt("Ingrese el segundo número:"));

if (isNaN(numero1) || isNaN(numero2)) {
  console.log("Uno o ambos números ingresados no son válidos.");
} 
else if (numero1 > numero2) {
  console.log("El primer número debe ser menor al segundo número.");
} 
else {
  for (let i = numero1; i <= numero2; i++) {
    console.log(i);
  }
}





