//Listas, array
const lista = [1, "hola", true, undefined, null]
const lista2 = new Array(1, "hola", true, undefined, null)
const lista3 = new Array(3)
lista3[0] = "Soy el primer elemento, index 0"

console.log(lista)
console.log(lista2)
console.log(lista3)

//Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Borja", "Jose"],
    tarjeta: {
        marca: "Redmi",
        almacenamiento: 128
    }
}
movil.anyo = 2021;
movil.marca = "Iphone"
console.log(movil.marca)

//Fechas
// Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //Utilizando los milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena)

const fecha_valores = new Date("2022, 1, 15");
console.log(fecha_valores)

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1; 
const anyo = ahora.getFullYear();
console.log(dia , mes, anyo)