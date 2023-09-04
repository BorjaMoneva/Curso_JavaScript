const listaCompra = ["Leche", "Huevos", "Carne", "Pescado", "Cereales"];

//Añade un elemento a la lista
listaCompra.push("Aceite de Girasol");
console.log(listaCompra);

//Elimina el ultimo valor
listaCompra.pop();
console.log(listaCompra);

const listaPeliculas = [
    {
        titulo: "Spider-Man No Way Home",
        director: "Jon Watts",
        fecha: new Date(2021, 11, 17)
    },
    {
        titulo: "Avengers: Infinity War",
        director: "Hermanos Russo",
        fecha: new Date(2018, 03, 23)
    },
    {
        titulo: "Star Wars: La venganza de los Sith",
        director: "George Lucas",
        fecha: new Date(2005, 04, 15)
    }
]

const listaNuevas = listaPeliculas.filter(listaPeliculas => listaPeliculas.fecha > new Date(2010, 0, 1));
console.log(listaNuevas)

const listaDirectores = listaPeliculas.map(listaPeliculas =>{
    return listaPeliculas.director;
})
console.log(listaDirectores)

const listaTitulos = listaPeliculas.map(listaPeliculas =>{
    return listaPeliculas.titulo;
})
console.log(listaTitulos)

const listaDirectoresTitulos = listaDirectores.concat(listaPeliculas);
console.log(listaDirectoresTitulos)

const listaDirectoresTitulos_prop = [...listaDirectores, ...listaPeliculas];
console.log(listaDirectoresTitulos_prop)