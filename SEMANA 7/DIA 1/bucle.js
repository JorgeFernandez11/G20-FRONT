//bucle es una estructura repetida es decir que hace algo muchas veces
//normalmente para recorrer o iterar arrays
//lee cada elemnto de una manera indepdndiente
//i iterador  (index)
//i++ incrementa de uno en uno
//i =i +1   es igual a 1++ 


//for

for(let i=0; i <= 10; i= i+2){
console.log(i)}

const alumnos = [
    "pepe" , "cristian" , "abdiel" ,"jorge"
]

for(let  i = 0 ; i < alumnos.length ;i++){
    console.log("cantidad de alumnos : " ,alumnos[i] )
}

const numeros =[1,2,3,4,5,6,7,8,9,10]

for(let j =0;j < numeros.length;j++)
// como atrapar todos los numeros pares 
    if(numeros[j] % 2 === 0){
        console.log(numeros[j])
    }


const laptops =[
    {
        marca: "mac",
        nombre:"19",
        precio: 2800,
        calificacion:"5"
    },

    {
        marca: "acer",
        nombre:"29",
        precio: 1500,
        calificacion:"3"
    }

]

for(let i=0;i <laptops.length;i++){
    console.log(laptops[i].marca)
}

// map
// const productos = [
//     {
//         name :"laptop",
//         price :1500
//     },
//     {
//         name :"monitor",
//         price :1200
//     },
//     {
//         name:"tv",
//         price:2500
//     }
// ]
// productos.map((productos)=>{
//     console.log("productos",productos.name)
// })

//while
//imprimir los numeros del 1 al 5
// let i = 1;
// while(i <= 5){
//     console.log(1)
//     i++
// }

//ejercicio
//realizar 2 arreglos de 6 elemtnos y recorrerlos con bucle
//uno por bucle

//calculadora de suma de precios de una lista de precios
console.log ("Sumando precios")
const precios = [10 , 20 , 30 , 40 ,50]
let suma = 0

for (let i = 0; i < precios.length; i++) {
    // suma = precios[i] + suma
    suma += precios[i]
}
console.log("La suma del mercado es : " , suma)

//Filtrar productos
//quiero ver los productos que no tienen stock

const tecnologia= [
    {
        name :"laptop",
        price :1500,
        stock : true
    },
    {
        name :"monitor",
        price :3200,
        stock :false,
    },
    {
        name:"tv",
        price:2500,
        stock: true
    },
    {
        name:"tv super hd",
        price:4500,
        stock: true
    }
]
// for (let i = 0; i < tecnologia.length; i++) {
//     console.log(tecnologia[i]) 
    
// }

// for (let i = 0; i < tecnologia.length; i++) {
//     if(tecnologia[i].price < 3000)
//     console.log(tecnologia[i]) 
    
// }

tecnologia.map((p) =>{
    p.price = p.price *2
})
console.log(tecnologia)

//el map con for son iguales solo que uno es mas resumido que el otro

// tecnologia.map((p)=>{
//     if(p.stock == true){
//         console.log(p)
//     }
// })
