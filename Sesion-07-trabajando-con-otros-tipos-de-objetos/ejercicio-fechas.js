const hoy = new Date();
console.log(hoy);

const fechaNac = new Date(1999, 10, 24);
console.log(fechaNac);

const comparacion = hoy > fechaNac
console.log(comparacion);

const diaNac = fechaNac.getDate();
console.log(diaNac);

const mesNac = fechaNac.getMonth();
console.log(mesNac + 1)

const anioNac = fechaNac.getFullYear();
console.log(anioNac)