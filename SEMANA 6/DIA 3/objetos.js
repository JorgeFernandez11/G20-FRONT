//entidad que tiene un key y un value


//objeto persona

const persona ={
    //key  //value
    edad : 32,
    sexo :"masculino",
    talla:1.78

}
//carro
const carro = {
    marca :"audi",
    motor :" v8",
    color : " verde",
    combustible : "electrico",
    nuevo :true
}

console.log(carro)
console.table(carro)

console.log(persona)
console.table(persona)

//ingreso al valor de un objeto
console.log(carro.marca)

//como puedo alterar un dato o un valor

carro.marca= "bbw";
carro.año =2024;


//como crear un arreglo de objetos

const laptops = [{
    marca : "mac",
    precio: 2500,
    color:"negro",
},
{
    marca:"lenovo",
    precio : 1220,
    color : "rojo",
}
]
console.log(laptops[0].precio)