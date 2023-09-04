class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo(){
        console.log("Hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años")
    }
}

const nueva_persona = new Persona("Borja", 23, true);
console.log(nueva_persona)
nueva_persona.saludo();