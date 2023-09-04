//Sesion 4 - Strings (Cadenas de caracteres)
let str = "Hola soy un texto con comillas dobles";
let str_sng = 'Hola soy un texto con comillas simples';

console.log(str);
console.log(str_sng);

let str_comillas = "El otro dia me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"'; 
let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'";

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);

/////Comillas invertidas (Backticks)
let str_backticks = `Hola esto es un string con backticks`
console.log(str_backticks);

let nombre = "Borja";
let saludo = `Hola, ${nombre} bienvenido`;
console.log(saludo)

////Plantillas HTML
let plantilla = `
<html>
    <h1> Pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>
`;

console.log(plantilla)

//// Introduccion de variables en HTML
let libros = ["Cancion de hielo y fuejo", "Danza de dragones", "Fuego y sangre"];