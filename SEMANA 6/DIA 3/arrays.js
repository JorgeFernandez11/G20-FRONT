//Una variable almacena un solo tipo de datos
// en un array (arreglo) vamos a poder guardar mas de un dato o valor


//valor

let alumno = "Jorge"
console.log(alumno)


//arreglo
let alumnos = ["pepe" , "Guiller" , 23 , true ]
console.log(alumnos)

//se puede acceder a un elemento de la lista
//capturamos el indice de la lista(siempre empieza de cero )
console.log(alumnos[3])

//editar o modificar el valor de uno de los elementos
alumnos[2]="juan"

//agregar un nuevo elemento
//como sabemos la cantidad de elementos de un array

console.log(alumnos.length)

//ejercicio realizen 2 arrays de cosas de casa y otro de trabajo
//en el primer array cambiar el elementos 3 y 5
//en el segundo array insertar 2 elementos nuevos

let Cosas_Casa = ["mesa" , "silla" , "alfombra" , "cocina" , "ollas"]
console.log(Cosas_Casa)
let Cosas_Trabajo =["laptop" , "escritorio" , "impresora", "tachos" , "computadora"]
console.log(Cosas_Trabajo)

Cosas_Casa[3] = "silla gamer"
Cosas_Casa[4] = "platos"

Cosas_Trabajo[5]="mesitas"
Cosas_Trabajo[6] ="cuadros"