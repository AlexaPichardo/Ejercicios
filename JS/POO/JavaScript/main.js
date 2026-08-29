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

    calcularTotal(){
        const precioUnitario = 100;
        const total = this.carrito.length * precioUnitario;

        console.log(`[Usuario Regular] Total: $${total.toFixed(2)}`);
        return total; 
    }//calcular Total
}//class Persona 

// clase UsuarioRegular
class UsuarioRegular extends Persona{
    constructor(id, nombre, email){
        super(id, nombre, email);
        this.tipo = "Regular";
    }
    calcularTotal(){
        const precioUnitario = 100;
        const total = this.carrito.length * precioUnitario;

        const envioGratis = total > 299.99;
        const costoEnvio = envioGratis ? 0 : 50;
        const totalFinal = total + costoEnvio;

        console.log(`[${this.tipo}] Productos: $${total.toFixed(2)} | Envío: $${costoEnvio.toFixed(2)} | Total Final: $${totalFinal.toFixed(2)}`);
        return totalFinal; 
    }
}
// clase UsuarioPro
class UsuarioPro extends Persona{
    constructor(id, nombre, email){
        super(id, nombre, email);
        this.tipo = "Pro";
    }
    calcularTotal(){
        const precioUnitario = 100;
        const totalBase = this.carrito.length * precioUnitario;
        const total = totalBase * 0.95;

        const envioGratis = total > 199.99;
        const costoEnvio = envioGratis ? 0 : 50;
        const totalFinal = total + costoEnvio;

        console.log(`[${this.tipo} - 5% Desc] Productos: $${total.toFixed(2)} | Envío: $${costoEnvio.toFixed(2)} | Total Final: $${totalFinal.toFixed(2)}`);
        return totalFinal; 
    }
}

//const julia = new Persona(124, "julia Perez", "jul@gmail.com");
//console.log(julia); 
//julia.agregarProducto("Sabritas");
//julia.agregarProducto("Cafe");
//julia.agregarProductos(["Agua", "Pan", "Dulces"]);
//console.log(`Se agregaron ${julia.carrito.length} productos nuevos.`);
//console.log(julia);
//julia.mostrarDatos();


const julia = new UsuarioRegular(124, "Julia Perez", "jul@gmail.com");
julia.agregarProducto("Sabritas");
julia.agregarProductos(["Agua", "Pan"]);
julia.calcularTotal(); 


const pedro = new UsuarioPro(125, "Pedro Gomez", "pedro@gmail.com");
pedro.agregarProducto("Sabritas");
pedro.agregarProductos(["Agua", "Pan"]);
pedro.calcularTotal(); 

const ana = new UsuarioPro(127, "Ana Sanchez", "anas@gmail.com");
ana.agregarProducto("Refresco");
ana.agregarProductos(["Galletas", "Gomitas", "Chocolates"]);
ana.calcularTotal(); 

const moni = new UsuarioRegular(126, "Moni Albarran", "mon@gmail.com");
julia.agregarProducto("Cafe");
julia.agregarProductos(["Manzana", "Arroz", "Sopa"]);
julia.calcularTotal();