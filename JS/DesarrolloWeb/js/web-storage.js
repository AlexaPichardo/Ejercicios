// WebStorage

export function cambiarTema() {
    const temaBtn = document.getElementById("temaBtn");
    const html = document.querySelector("html");
    let temaActual;
    let tema = html.getAttribute("data-bs-theme");
    
    if( localStorage.getItem("tema") != null){ //revisar su el elemento "tema" ya reciste dentro del localStorage
        temaActual = localStorage.getItem("tema");
        html.setAttribute("data-bs-theme", temaActual);
    } else { //si NO EXISTE
        localStorage.setItem("tema", "light"); //Lo crea, vlaor inicial "light"
        temaActual = localStorage.getItem("tema"); //Actualiza temaActual con localStorage
        html.setAttribute("data-bs-theme", temaActual); //renderiza en html segun el temaActual
    }//else



    temaBtn.addEventListener("click", () => {
        if (temaActual === "light") { // Lee el valor de data-bs-theme en HTML
            html.setAttribute("data-bs-theme", "dark"); // Si es light, lo cambia a dark
            temaActual = html.getAttribute("data-bs-theme"); // Actualiza el valor de temaActual
            localStorage.setItem("tema", temaActual);
        } else {
            html.setAttribute("data-bs-theme", "light"); // Si NO es light, lo define así
            temaActual = html.getAttribute("data-bs-theme"); // Actualiza el valor de temaActual
            localStorage.setItem("tema", temaActual);
        }// else
    });

}
