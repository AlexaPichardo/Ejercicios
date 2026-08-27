let distancia = parseFloat(prompt("Ingresa el valor de la distancia"));
let tiempo = parseFloat(prompt("Ingresa el valor del tiempo"));
let velocidad;

function calcularVelocidad(d, t){
    let v = d/t;
    return v;
}// calcularVelocidad

velocidad = (calcularVelocidad(distancia, tiempo)).toFixed(2);

console. log(`Distancia`)
