let numero = Number (prompt("digita un numero"))
let arreglo = []

for( let i = 1; i <= numero; i++ ) {
    arreglo.push(i);
}

arreglo.splice(1,1);
 
arreglo.forEach(function(elemento){
    console.log(elemento)
});