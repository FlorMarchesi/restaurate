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

//ARRAY COMPRA
class Carrito{
  constructor(plato,bebida,postre,id){
    this.plato = plato,
    this.bebida = bebida,
    this.postre = postre,
    this.id = id+1
  }
}

const carrito = []

// DOM
let productosCarrito = document.getElementById("productosCarrito")
//CARD DE PRODUCTOS
// Creación de las CARD para seleccion
// Capturo todas las opciones según el ID para luego poder imprimirlas
let opcionesDivPlato = document.getElementById("menu_plato")
let opcionesDivBebida = document.getElementById("menu_bebida")
let opcionesDivPostre = document.getElementById("menu_postre")

// DOM

// FUNCIONES
function cantidadCarrito(array){
  productosCarrito = ""
  let nuevaCantidad = document.createElement("p")
        nuevaCantidad.innerHTML = `<p>
        ${id}</p>`
}

// Función card de productos
// Creo una función que me imprimirá las opciones automáticamente gracias al Array. Si agrego más opciones o quito alguna, se verá reflejado en la página
function mostrarOpciones(array){
  opcionesDivPlato.innerHTML  = ""
  opcionesDivBebida.innerHTML = ""
  opcionesDivPostre.innerHTML = ""
    for(let opcion of array){
      //Función Nuevo DIV De las Card
      let nuevoMenuDiv = document.createElement("div")
        nuevoMenuDiv.className = "col-12 col-md-6 col-lg-4 my-3"
        nuevoMenuDiv.innerHTML = `
        <div id="card${opcion.id}" class="card" style="width: 18rem;">
          <img src="assets/${opcion.image}" class="card-img-top" alt="${opcion.nombre}">
          <div class="card-body">
            <h5 class="card-title">${opcion.nombre}</h5>
            <p class="card-text">Precio  ${opcion.precio} $USD</p>
            <button id="agregarBtn${opcion.id}" class="btn btn-outline-success">Agregar al carrito</button>
          </div>
        </div>`

      //Card para los PLATOS
      if(opcion.id<6){
        opcionesDivPlato.appendChild(nuevoMenuDiv)
      }
      //Card para las BEBIDAS
      if(opcion.id>5 && opcion.id<11){
        opcionesDivBebida.appendChild(nuevoMenuDiv)
      }
      //Card para los POSTRES
      if(opcion.id >10 && opcion.id<14){
        opcionesDivPostre.appendChild(nuevoMenuDiv)
      }else{}
    }
}
// Función card de productos

// FUNCIONES

// EVENTOS

// EVENTOS



mostrarOpciones(opciones)
