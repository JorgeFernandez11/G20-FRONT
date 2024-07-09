// let numero1 = prompt("Escribe el primer numero")
// let numero2 = prompt("Escribe el segundo numero")
// //necesito que el usuario ingreso el tipo de operacion a realizar + - * /
// const operador = prompt ("Escribe el operador matematico + - * /")
// let resultado = 0
// if (operador === "+"){
//     resultado= +numero1 +  +numero2;
//     console.log(resultado)
//     alert( "El resultado es: " +resultado)
// }
// else if (operador === "-"){
//     resultado= +numero1 -  +numero2;
//     console.log(resultado)
//     alert("El resultado es: " +resultado)
// }
// else if (operador === "*"){
//     resultado= +numero1 *  +numero2;
//     console.log(resultado)
//     alert("El resultado es: " +resultado)
// }
// else if (operador === "/"){
//     resultado= +numero1 /  +numero2;
//     console.log(resultado)
//     alert("El resultado es: " +resultado)
// }


// console.log(numero1)
// console.log(numero2)

//escriban un algoritmo que pida 2 numero en prompt e imprima el numero mayor

let num1 = prompt ("Escriba el primer numero");
let num2 = prompt ("Escriba el segundo numero");
let resultado = num1


if (num1 > num2){
    console.log ("El valor mayor es ",num1)
    alert("El valor mayor es "+ num1)
}else if(num2>num1){
    console.log("El valor mayor es "+ num2)
    alert("El valor mayor es ",num2)
}else if(num1=num2){
    console.log("Ambos valores son iguales")
    alert("Ambos valores son iguales")
}