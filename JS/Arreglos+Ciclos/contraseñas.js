const validarContrasenas = () => {

    const contrasenas = ["hola123", "manzana123", "seguro", "minombre12"];

    for (let i = 0; i < contrasenas.length; i++) {
        
        if (contrasenas[i].length >= 8) {
            console.log(`Contrasena ${i + 1} es valida.`);
        } else {
            console.log(`Contrasena ${i + 1} no es valida.`);
        }
    }
};

validarContrasenas();
