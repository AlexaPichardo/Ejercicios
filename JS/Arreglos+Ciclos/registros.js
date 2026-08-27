const procesarRegistros = () => {

    let n = parseInt(prompt("Cuantos registros deseas procesar"));

    for (let i = 1; i <= n; i++) {
        console.log(`Proceso ${i} registrado...`);
    }

    console.log("Todos los procesos han sido registrados con exito.");
};

procesarRegistros();