// labels

let unidades = 0;
let decenas = 0;

while(true){
    console.log('El numero actual es: ${decenas}${unidades}');
    while(true){
        unidades++;
        if (unidades === 10) {
            unidades = 0;
            break;
        }
    }
    decenas ++;
    if (decenas === 2) {
        break;
    }
}