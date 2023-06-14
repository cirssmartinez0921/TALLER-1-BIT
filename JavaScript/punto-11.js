const numeros = [ 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1 ];

let count =0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] ===1) {
        count++;
    }
}
console.log (count)