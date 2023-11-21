//PreEntrega2 Sánchez Gastón

//Objetivos
//Capturar entradas mediante prompt()
//Declarar Variables y Objetos necesarios
//Crear funciones y/o métodos para realizar operaciones (suma, resta, división, porcentaje, etc)
//Ejecutar una salida, que es el resultado de los datos procesados, sea por alert() o console.log()

//se debe entregar:
//HTML del proyecto - Listo
//Variables de JS necesarias - Listo
//Funciones escenciales del proceso a simular - Listo
//Objetos de JS - Listo
//Arrays - Listo
//Métodos de búsqueda y filtrado sobre el Array

//Buscador de productos para carrito de comparas de Ferreteria Einhell

//Objetos que necesito: Herrameintas

//Lista de productos profesionales
//usar una variable para un Array que contenga una gama de herrmaientas profesionales
const HerramientasProfesionales = [];

//usar una función constructora
function Producto(id, item, marca, modelo, precio) {
    this.id = id;
    this.item = item;
    this.marca = marca;
    this.modelo  = modelo;
    this.precio  = precio;
}
const producto1 = new Producto(1,"Sierra de sanle", "Einhell", "SS-TP-23", 77000);
const producto2 = new Producto(2, "Sierra circular", "Einhell", "SC-TP-23", 83000);
const producto3 = new Producto(3,"Sierra caladora", "Einhell", "SC-TPC-23", 55000);
const producto4 = new Producto(4,"Sierra caladora", "Einhell", "SC-TPX-23", 75000);
const producto5 = new Producto(5,"Amoladora angular", "Einhell", "AA-TPW-23", 65000);
const producto6 = new Producto(6,"Amoladora angular", "Einhell", "AA-TPK-23", 70000);
const producto7 = new Producto(7,"Amoladora angular", "Einhell", "AA-TPX-23", 75000);
const producto8 = new Producto(8,"Atornillador", "Einhell", "AI-TP-23", 45000);
const producto9 = new Producto(9,"Llave de impacto", "Einhell", "LI-TP-23", 40000);
const producto10 = new Producto(10,"Taladro", "Einhell", "TI-TPI-23", 75000);
const producto11 = new Producto(11,"Taladro", "Einhell", "TI-TPP-23", 65000);
const producto12 = new Producto(12,"Taladro", "Einhell", "TI-TPX-23", 85000);
const producto13 = new Producto(13,"Taladro", "Einhell", "TI-TPA-23", 92000);
const producto14 = new Producto(14,"Taladro", "Einhell", "TI-TPU-23", 77000);
const producto15 = new Producto(15,"Taladro", "Einhell", "TI-TPD-23", 65000);
const producto16 = new Producto(16,"Taladro", "Einhell", "TI-TPZ-23", 88000);
const producto17 = new Producto(17,"Taladro", "Einhell", "TI-TPW-23", 95000);
const producto18 = new Producto(18,"Taladro", "Einhell", "TI-TPI-23", 75000);
const producto19 = new Producto(19,"Taladro", "Einhell", "TI-TPY-23", 125000);
const producto20 = new Producto(20,"Taladro", "Einhell", "TI-TPZ-23", 135000);
const producto21 = new Producto(21,"Demoledor", "Einhell", "DM-TP-23", 195000);
const producto22 = new Producto(22,"Rotomartilo", "Einhell", "DM-TP-23", 195000);

//Agregar los abjetos al Array
HerramientasProfesionales.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8,
    producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16,
    producto17, producto18, producto19, producto20, producto21, producto22)

    console.log(HerramientasProfesionales)


//Lista de productos hobbistas
//usar una variable para un Array que contenga una gama de herrmaientas para Hobbistas
const HerramientasHobbistas = [];

//usar una función constructora
const productoHobbista1 = new Producto(23,"Martillo", "Truper", "M-16", 150);
const productoHobbista2 = new Producto(24,"Destornillador", "Stanley", "66-052", 100);
const productoHobbista3 = new Producto(25,"Taladro", "Bosch", "GSR 1000", 2000);
const productoHobbista4 = new Producto(26,"Llave inglesa", "Bahco", "9031", 300);
const productoHobbista5 = new Producto(27,"Sierra", "Black & Decker", "KS501", 500);
const productoHobbista6 = new Producto(28,"Cinta métrica", "Lufkin", "W606PM", 8000);
const productoHobbista7 = new Producto(29,"Nivel", "Stabila", "70-2", 400);
const productoHobbista8 = new Producto(30,"Lápiz carpintero", "Staedtler", "148 40", 200);
const productoHobbista9 = new Producto(31,"Broca", "Makita", "D-03888", 1500);
const productoHobbista10 = new Producto(32,"Broca", "Makita", "D-03999", 1500);
const productoHobbista11 = new Producto(33,"Cepillo", "Tramontina", "43407/507", 200);
const productoHobbista12 = new Producto(34,"Alicate", "Knipex", "03 02 180", 2500);
const productoHobbista13 = new Producto(35,"Alicate", "Knipex", "13 02 180", 2700);
const productoHobbista14 = new Producto(36,"Alicate", "Knipex", "03 22 130", 250);

//Agregar los abjetos al Array
HerramientasHobbistas.push(productoHobbista1, productoHobbista2, productoHobbista3, productoHobbista4, productoHobbista5, productoHobbista6, productoHobbista7, productoHobbista8,
    productoHobbista9, productoHobbista10, productoHobbista11, productoHobbista12, productoHobbista13, productoHobbista14)

    console.log(HerramientasHobbistas)


//Voy a dejar al usuario agregar filtro mediante prompt, primero le voy a mostrar
//Puedo hacer un IF ELSE para buscar, usando includes para buscar en los arrays mediante prompt.
//Si es resultado del Include es TRUE, que imprima en pantalla los resultados, por Alert o Consla
//En caso de ser FALSE que muestre un alert con "Lo sentiomos, no encontramos el artíoculo que buscás"
let ListaDeProductos = HerramientasProfesionales.concat(HerramientasHobbistas)
console.table(ListaDeProductos)

alert("ingrese por consola: buscar() para buscar un producto  \nIngrese marca() para filtrar por marca   \nvea en consola el resultado de su busqueda")

function buscar() {
    let filtro = prompt("Ingrese el filtro marca").toUpperCase().trim()
    let listaFiltrada = ListaDeProductos.filter((x)=>x.item.toUpperCase().includes(filtro))

    if (listaFiltrada.length>0) {
        console.table(listaFiltrada)
        
    } else {
        alert("No hay resultádos para su búsqueda")
    }

}
function marca() {
    let filtro = prompt("Ingrese el filtro marca").toUpperCase().trim()
    let listaFiltrada = ListaDeProductos.filter((x)=>x.marca.toUpperCase().includes(filtro))

    if (listaFiltrada.length>0) {
        console.table(listaFiltrada)
        
    } else {
        alert("No hay resultádos para su búsqueda")
    }

}
