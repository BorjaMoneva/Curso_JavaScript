function devolverTrue(){
    return true;
}

console.log(devolverTrue())

async function promesa(){
    return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}

function* generarPar(){
    let num = 0;

    while(true){
        num +=2
        if(num === 30){
            return num
        }
        yield num;
    }
}

const gen = generarPar();
console.log(gen.next().value)