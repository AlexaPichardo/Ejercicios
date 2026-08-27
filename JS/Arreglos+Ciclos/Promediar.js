const promediarCalificacion = () => {

    const calificaciones = [4.3, 5.0, 4.1, 4.4, 3.1, 4.0];
    let suma = 0; //El 0 es para colocar un punto de partida es decir 0+4=4 + 5=9 y asi consecutivamente

    for (let i = 0; i < calificaciones.length; i++) {
        suma = suma + calificaciones [i]; //El ciclco for va haciendo que se acumulen el resultado mas la nueva calificacion y asi como un ciclo
    }
    let promedio = suma / calificaciones.length;

    console.log(`El promedio es: ${promedio.toFixed(1)}`); 
    //to.Fixed es para poner el numero de decimales que quieres
};

    promediarCalificacion();
