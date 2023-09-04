const misDatos = {
    nombre: "Borja",
    apellido: "Moneva",
    edad: 23,
    altura: 180,
    isDeveloper: true
}

const edad = misDatos.edad;
console.log(edad);

const listaDatos = [
    {
    ...misDatos
    },{
        nombre: "Jorge",
        apellido: "Comas",
        edad: 23,
        altura: 178,
        isDeveloper: false
    },{
        nombre: "Miguel",
    apellido: "Lorente",
    edad: 23,
    altura: 170,
    isDeveloper: false
    }
];

const listaOrdenada = listaDatos.sort((a,b) => b.edad - a.edad);
console.log(listaOrdenada)