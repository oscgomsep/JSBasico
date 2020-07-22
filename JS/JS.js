// solicitud de información para el usuario, Ejercicio de par e impar
let number = prompt('Introduzca el número máximo en la secuencia');
// desarrollo de la secuencia
for (let index=1; index <= number; index++){

    if (index % 2 === 0){
        console.log("El Número " + index + " es par")
    } else {
        console.log("El Número " + index + " es impar")
    }

}
console.log("////////")
console.log("////////")
console.log("////////")


// ejercicio de tabla de multiplicar
let number2 = prompt('De cual número deseas conocer la tabla de multiplicar, entre 2 y 10');
// desarrollo de la secuencia
if (number2 > 2 && number2 < 10){
    let index = 0;
    let resultado = 0;
    while(index <= number2){
        resultado = index * number2;
        console.log( number2 + " * " + index + " = " + resultado)
        index++;
    }
} else {
    console.log("El número no esta en el rango")
}
console.log("////////")
console.log("////////")
console.log("////////")
