console.log("Empezando con las funciones")

function CalcularSUma(numero1 , numero2){
    return numero1 + numero2
}

// calcula el area de un trinagulo
function CalcularAreaTriangulo(base , altura){
    return (base * altura)/2
}


// calcular el promedio de notas

/**
 * 
 * @param {Array} arreglonotas 
 */
function CalcularPromedioNotas (arreglonotas ){
    let sumaNotas = 0

    //obtenemos la canitdad de notas que tenga el alumno
    const cantidad = arreglonotas.length
    arreglonotas.map((nota)=>(
        //por cada suma , yo lo sumo  a sumanotas
        sumaNotas += nota
    ))
    return sumaNotas / cantidad
}

const notas = [ 10, 15, 12, 13,14]
console.log(CalcularPromedioNotas(notas))

//calcular  el area de un rectangulo
function CalcularAreaRectangulo (ancho , largo){
    return (ancho * largo)
}



// calcular el area de una circuferencia
function CalcularAreaCircunferencia (radio ){
    return( radio*radio*3,1416)
}
console.log(CalcularAreaCircunferencia(10))

//se pide una funcion que permita leer la cantidad de notas de todos los alumnos y verificar cuantos aprobados y desaprobados existe

//leer la cantidad de notas ✅
//ver si hay aprobados✅
//si la nota es mayor a 11 entonces aprobo

//ver si hay desaprobados ✅
//si la nota es menor a 11 entonces desaprobo

/**
 * 
 * @param {Array} notasAlumnos 
 */
function VerAprobadosDesaprobados(notasAlumnos){
    const resultados = {
        aprobados : 0,
        desaprobados :0
    }

    notasAlumnos.map((nota)=>{
        //si la nota es mayor o igual a 11 entonces aprobo
        if (nota>=11){
            resultados.aprobados++
        }
        else{//no sea mayor a 11
            resultados.desaprobados++
        }
    })
    
    return resultados
}
const todasLasNotas = [20,20,15,13,10,5,5,8,4,11]
console.log(VerAprobadosDesaprobados(todasLasNotas))