const persona = {
    nombre: "Borja",
    edad: 23,
    isDeveloper: true,
    saludo: function(){
        console.log("Hola")
    }
}

//console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Jorge",
    edad: 15,
    isDeveloper: false,
    saludo: function(){
        console.log("Hola")
    }
}

otra_persona.saludo()

const creaPersona = (nombre, edad, isDeveloper) => {
    return{
        nombre,
        edad,
        isDeveloper,
        saludo: function(){
            console.log("Hello")
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true)
console.log(nueva_persona)