class Persona{

    //estas son las propiedades de la clase no se escribe let porque ya es una propiedad
    id;  
    nombre;
    email;
    carrito;

    //Constructor Persona
    constructor(id, nombre, email){
        this.id = id; //this es la class en este caso Persona porque esta dentro de esa clase
        this.nombre = nombre.toUpperCase();
        this.email = email;
        this.carrito = [];
    }//constructor Persona

    mostrarDatos(){
    console.log(`id persona: ${this.id},
nombre completo: ${this.nombre},
correo de contacto: ${this.email}`);    //Codigo a ejecutar
    }// mostrar Datos(showData)

    agregarProducto(producto){
        this.carrito.push(producto);
    } //AgregarProductos (addProducts)

    agregarProductos(listaProductos){
    for (let i = 0; i < listaProductos.length; i++){
    this.carrito.push(listaProductos[i]);
        } 
    }//agregar Prodctos

    calcularTotal(){}//calcular Total
}//class Persona 

// class UsuarioRegular hereda de Persona
class UsuarioRegular extends Persona{
    //propiedad tipo
    tipo; 
    constructor(id, nombre, email){
        super(id, nombre, email); //super es Persona , ese es el constructor que se manda a llamar
        this.tipo = "Regular";
    }
    calcularTotal(){
        console.log("Calculando el precio total para Usuario Regular...")
        const precioUnitario = 100;
        const total = this.carrito.length * precioUnitario;

        const envioGratis = total > 299.99;
        const costoEnvio = envioGratis ? 0 : 50;
        const totalFinal = total + costoEnvio;

        console.log(`[${this.tipo}] Productos: $${total.toFixed(2)} | Envío: $${costoEnvio.toFixed(2)} | Total Final: $${totalFinal.toFixed(2)}`);
        return totalFinal; 
    }
}// class UsuarioRegular


// clase UsuarioPro
class UsuarioPro extends Persona{
    tipo;
    constructor(id, nombre, email){
        super(id, nombre, email);
        this.tipo = "Pro";
    }
    calcularTotal(){
        console.log("Usuario Pro descuento del 5%, Calculando...")
        const precioUnitario = 100;
        const totalBase = this.carrito.length * precioUnitario;
        const total = totalBase * 0.95;

        const envioGratis = total > 199.99;
        const costoEnvio = envioGratis ? 0 : 50;
        const totalFinal = total + costoEnvio;

        console.log(`[${this.tipo} - 5% Desc] Productos: $${total.toFixed(2)} | Envío: $${costoEnvio.toFixed(2)} | Total Final: $${totalFinal.toFixed(2)}`);
        return totalFinal; 
    }
} //class UsuarioPro

//const julia = new Persona(124, "julia Perez", "jul@gmail.com");
//julia.agregarProducto("Sabritas");
//julia.agregarProductos(["Agua", "Pan", "Dulces"]);
//console.log(`Se agregaron ${julia.carrito.length} productos nuevos.`);
//console.log(julia);
//julia.mostrarDatos();

class Main{

    static main (){

    const julia = new UsuarioRegular(124, "Julia Perez", "jul@gmail.com");
    julia.agregarProducto("Sabritas");
    julia.agregarProductos(["Agua", "Pan"]);
    console.log(julia);
    julia.calcularTotal(); 

    const pedro = new UsuarioPro(125, "Pedro Gomez", "pedro@gmail.com");
    pedro.agregarProducto("Sabritas");
    pedro.agregarProductos(["Agua"]);
    console.log(pedro);
    pedro.calcularTotal(); 

    const ana = new UsuarioPro(126, "Ana Sanchez", "anas@gmail.com");
    ana.agregarProducto("Refresco");
    ana.agregarProductos(["Galletas", "Gomitas", "Chocolates"]);
    console.log(ana);
    ana.calcularTotal(); 

    const moni = new UsuarioRegular(127, "Moni Albarran", "mon@gmail.com");
    moni.agregarProducto("Cafe");
    moni.agregarProductos(["Manzana", "Arroz", "Sopa"]);
    console.log(moni);
    moni.calcularTotal();
    }
}

Main.main();
