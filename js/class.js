// CLASE CONSTRUCTORA OPCIONES
// De esta manera podemos construir el array que contendrá nuestro menú
class Menu {
    constructor(id,nombre,precio,image){
        this.id = id
        this.nombre = nombre,
        this.precio = precio,
        this.image = image
    }
  }
// ARRAY
const opciones = []

// Platos
const opcion1 = new Menu(1, "Milanesas a la Napolitana", 12, "milanesaNapolitana.png")
const opcion2 = new Menu(2, "Pastel de papa", 15, "pastelPapa.png")
const opcion3 = new Menu(3, "6 Empanadas de Carne", 20, "empanadasCarne.png")
const opcion4 = new Menu(4, "6 Empanadas de Jamón y Queso", 20, "empanadasJQ.png")
const opcion5 = new Menu(5, "Torre de Panqueques", 15, "torrePanqueques.png")

// Bebidas
const opcion6 = new Menu(6, "Jugo natural de Naranja 500ml", 5, "jugoNaranja.png")
const opcion7 = new Menu(7, "Cerveza 500ml", 9, "cerveza.png")
const opcion8 = new Menu(8, "Coca-Cola 500ml", 4.5, "coca.png")
const opcion9 = new Menu(9, "Té Helado 500ml", 4, "te.png")
const opcion10 = new Menu(10, "Agua 1L", 4.5, "agua.png")

// Postre
const opcion11 = new Menu(11, "Tiramisú", 8, "tiramisu.png")
const opcion12 = new Menu(12, "Selva Negra", 8, "selvaNegra.png")
const opcion13 = new Menu(13, "Tarta de Queso", 9, "tartaQueso.png")

// Agregamos los datos al array
opciones.push(opcion1,opcion2,opcion3,opcion4,opcion5,opcion6,opcion7,opcion8,opcion9,opcion10,opcion11,opcion12,opcion13)



