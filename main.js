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
function producto(id, item, marca, modelo, precio) {
    this.id = id;
    this.item = item;
    this.marca = marca;
    this.modelo  = modelo;
    this.precio  = precio;
}
const producto1 = new producto(1,"Sierra de sanle", "Einhell", "SS-TP-23", 77000);
const producto2 = new producto(2, "Sierra circular", "Einhell", "SC-TP-23", 83000);
const producto3 = new producto(3,"Sierra caladora", "Einhell", "SC-TPC-23", 55000);
const producto4 = new producto(4,"Sierra caladora", "Einhell", "SC-TPX-23", 75000);
const producto5 = new producto(5,"Amoladora angular", "Einhell", "AA-TPW-23", 65000);
const producto6 = new producto(6,"Amoladora angular", "Einhell", "AA-TPK-23", 70000);
const producto7 = new producto(7,"Amoladora angular", "Einhell", "AA-TPX-23", 75000);
const producto8 = new producto(8,"Atornillador", "Einhell", "AI-TP-23", 45000);
const producto9 = new producto(9,"Llave de impacto", "Einhell", "LI-TP-23", 40000);
const producto10 = new producto(10,"Taladro", "Einhell", "TI-TPI-23", 75000);
const producto11 = new producto(11,"Taladro", "Einhell", "TI-TPP-23", 65000);
const producto12 = new producto(12,"Taladro", "Einhell", "TI-TPX-23", 85000);
const producto13 = new producto(13,"Taladro", "Einhell", "TI-TPA-23", 95000);
const producto14 = new producto(14,"Taladro", "Einhell", "TI-TPI-23", 75000);
const producto15 = new producto(15,"Taladro", "Einhell", "TI-TPD-23", 65000);
const producto16 = new producto(16,"Taladro", "Einhell", "TI-TPZ-23", 85000);
const producto17 = new producto(17,"Taladro", "Einhell", "TI-TPW-23", 95000);
const producto18 = new producto(18,"Taladro", "Einhell", "TI-TPI-23", 75000);
const producto19 = new producto(19,"Taladro", "Einhell", "TI-TPP-23", 65000);
const producto20 = new producto(20,"Taladro", "Einhell", "TI-TPX-23", 85000);
const producto21 = new producto(21,"Demoledor", "Einhell", "DM-TP-23", 195000);
const producto22 = new producto(22,"Rotomartilo", "Einhell", "DM-TP-23", 195000);

//Agregar los abjetos al Array
HerramientasProfesionales.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8,
    producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16,
    producto17, producto18, producto19, producto20, producto21, producto22)

    console.log(HerramientasProfesionales)


//Lista de productos hobbistas
//usar una variable para un Array que contenga una gama de herrmaientas para Hobbistas
const HerramientasHobbistas = [];

//usar una función constructora
const productoHobbista1 = new producto(1,"Martillo", "Truper", "M-16", 150);
const productoHobbista2 = new producto(2,"Destornillador", "Stanley", "66-052", 100);
const productoHobbista3 = new producto(3,"Taladro", "Bosch", "GSR 1000", 2000);
const productoHobbista4 = new producto(4,"Llave inglesa", "Bahco", "9031", 300);
const productoHobbista5 = new producto(5,"Sierra", "Black & Decker", "KS501", 500);
const productoHobbista6 = new producto(6,"Cinta métrica", "Lufkin", "W606PM", 8000);
const productoHobbista7 = new producto(7,"Nivel", "Stabila", "70-2", 400);
const productoHobbista8 = new producto(8,"Lápiz carpintero", "Staedtler", "148 40", 200);
const productoHobbista9 = new producto(9,"Broca", "Makita", "D-03888", 1500);
const productoHobbista10 = new producto(10,"Broca", "Makita", "D-03999", 1500);
const productoHobbista11 = new producto(11,"Cepillo", "Tramontina", "43407/507", 200);
const productoHobbista12 = new producto(12,"Alicate", "Knipex", "03 02 180", 2500);
const productoHobbista13 = new producto(13,"Alicate", "Knipex", "13 02 180", 2700);
const productoHobbista14 = new producto(14,"Alicate", "Knipex", "03 22 130", 250);

//Agregar los abjetos al Array
HerramientasHobbistas.push(productoHobbista1, productoHobbista2, productoHobbista3, productoHobbista4, producto5, productoHobbista6, productoHobbista7, productoHobbista8,
    productoHobbista9, productoHobbista10, productoHobbista11, productoHobbista12, productoHobbista13, productoHobbista14)

    console.log(HerramientasHobbistas)


//Voy a dejar al usuario agregar filtro mediante prompt, primero le voy a mostrar
//Puedo hacer un IF ELSE para buscar, usando includes para buscar en los arrays mediante prompt.
//Si es resultado del Include es TRUE, que imprima en pantalla los resultados, por Alert o Consla
//En caso de ser FALSE que muestre un alert con "Lo sentiomos, no encontramos el artíoculo que buscás"

