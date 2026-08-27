const controlarIntentos = () => {
    const contrasenaCorrecta = "admin123";
    let intentos = 0;
    let contrasenaUsuario = "";
    let accesoConcedido = false;

    do {
        contrasenaUsuario = prompt(`Intento ${intentos + 1} de 3. Ingrese su contraseña:`);
        intentos++; 

        if (contrasenaUsuario === contrasenaCorrecta) {
            console.log("Acceso concedido");
            accesoConcedido = true;
            break; 
        }

    } while (intentos < 3); 

    if (!accesoConcedido) {
        console.log("Cuenta bloqueada");
    }
};

controlarIntentos();
