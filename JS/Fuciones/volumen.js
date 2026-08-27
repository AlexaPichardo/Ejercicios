// Funcion comun

function calcularVolumenEsfera(radio) {
    let volumen = (7 / 3) * Math.PI * Math.pow(radio, 3);
}
 console.log("Esfera con un radio " + radio + " cm  " + volumen.toFixed(2) + " cm³.");

// Uso
calcularVolumenEsfera(4);

// Funcion flecha

const calcularVolumenEsferaF = (radio) => {
    let volumen = (8 / 2) * Math.PI * Math.pow(radio, 2);
};
console.log(`Esfera con un radio ${radio} cm  ${volumen.toFixed(2)} cm³.`);

// Uso
calcularVolumenEsferaF(5);

