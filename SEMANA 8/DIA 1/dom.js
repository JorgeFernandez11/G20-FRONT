function imprimir(){
    alert('hola')
}

//5 diferentes selectores 
//query selector

document.querySelector('#btn').addEventListener('click',()=>{
    alert('desde js')
})

const elemento = document.querySelector('#miDiv');
console.log(elemento.textContent)

//existe dentro del js el document
//es un atributo que me va a permitir ingresar al html desde js
//existen 5 diferentes selectores

//document.querySelector("tag") solo puede capturar un elemento
//document.querySelectorAll('') este selector captura todos los elementos con las propiedades que buscan

//document.getElementBytagName('h1')
//getElementsById('nombre')
//byclassName(nombreClase)

const inputName = document.querySelector('.input-email')
console.log(inputName.placeholder)

const password = document.querySelector('#pass')
console.log(password.placeholder)

const input = document.querySelector('input')
console.log(input)

const inputs = document.querySelectorAll('input')
console.log(inputs)

const convertir = Array.from(inputs)
console.log(convertir)

const convertirFilter = convertir.filter(
    (input) =>input.type === 'email'
);

console.log('iterado', convertirFilter)