class Persona {
    //private -> #
    #nombre;
    #edad;

    //protected -> _
    _isDeveloper = true;
    constructor(nom, edad){
        this.#nombre = nom
        this.#edad = edad
    }

    saludo(){
        console.log("Hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años")
    }

    dimeNombre(){
        return this.#nombre
    }

    #obtenEdad(){
        return this.#edad
    }

    getEdad(){
        return this.#edad
    }

    setEdad(nuevaEdad){
        this.#edad = nuevaEdad
    }
}

const persona = new Persona("Borja", 23)
//console.log(persona)
//console.log(persona.nombre)
persona.saludo()
console.log(persona.dimeNombre())
//console.log(persona.#obtenEdad())
console.log(persona._isDeveloper)

const edad = persona.getEdad()
console.log(edad)

persona.setEdad(24)
console.log(persona.getEdad())