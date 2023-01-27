// CLASE CONSTRUCTORA OPCIONES
// De esta manera podemos construir el array que contendrá nuestro menú
class Menu {
    constructor(id,nombre,precio){
        this.id = id
        this.nombre = nombre,
        this.precio = precio
    }
  }
// ARRAY
const opciones = []

// Platos
const milanesas = new Menu(1, "Milanesas a la Napolitana", 12)
const pastelPapa = new Menu(2, "Pastel de papa", 15)
const empanadasCarne = new Menu(3, "6 Empanadas de Carne", 20)
const empanadasJQ = new Menu(4, "6 Empanadas de Jamón y Queso", 20)
const torrePanqueques = new Menu(5, "Torre de Panqueques", 15)

// Bebidas
const jugo = new Menu(6, "Jugo natural de Naranja 500ml", 5)
const cerveza = new Menu(7, "Cerveza 500ml", 9)
const cola = new Menu(8, "Coca-Cola 500ml", 4.5)
const te = new Menu(9, "Té Helado 500ml", 4)
const agua = new Menu(10, "Agua 1L", 4.5)

// Postre
const tiramisu = new Menu(11, "Tiramisú", 8)
const selvaNegra = new Menu(12, "Selva Negra", 8)
const tartaQueso = new Menu(13, "Tarta de Queso", 9)

// Ninguna opcion
const ninguno = new Menu(0, "Ninguno", 0)

// Agregamos los datos al array
opciones.push(milanesas,pastelPapa,empanadasCarne,empanadasJQ,torrePanqueques,jugo,cerveza,cola,te,agua,tiramisu,selvaNegra,tartaQueso,ninguno)

//ARRAY COMPRA
class Carrito{
  constructor(plato,bebida,postre){
    this.plato = plato,
    this.bebida = bebida,
    this.postre = postre
  }
}

const carrito = []


// FUNCIONES

// MENÚ
function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
}

function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
           1 - Menú
           2 - Carrito
           0 - Salir del menu`))

        switch(opcionIngresada){
            case 1:
                seleccionMenu(opciones)
            break
            case 2:
                mostrarCarrito(carrito)
            break
            case 0:
                console.log("Gracias por visitarnos! Esperamos volver a verlos")
                salir = true
                return salir
            break
            default:
                console.log("Ingrese una opción correcta")
            break
        }
}
// MENÚ

// SELECCION ALIMENTOS
  function seleccionMenu (opciones){
    //Seleccion del plato principal
   let platoSeleccionado = parseInt(prompt(`Seleccione el plato deseado:
   1. Milanesas a la napolitana (12 UsD)
   2. Pastel de papa (15 UsD)
   3. 6 Empanadas de carne (20 UsD)
   4. 6 Empanadas de jamón y queso (20 UsD)
   5. Torre de panqueques (15 UsD)
   0. No deseo comida`))
   //Seleccion plato principal

   //Selección bebida
   let bebidaSeleccionada = parseInt(prompt(`Seleccione la bebida deseada:
   6. Jugo natural de naranja (5 UsD)
   7. Cerveza (9 UsD)
   8. Coca-Cola (4.5 UsD)
   9. Té helado (4 UsD)
   10. Agua (4.5 UsD)
   0. No deseo bebida
   `))
   //Seleccion bebida

   //Seleccion postre
   let postreSeleccionado = parseInt(prompt(`Seleccione el postre deseado:
   11. Tiramisú (8 UsD)
   12. Selva Negra (8 UsD)
   13. Tarta de Queso (9 UsD)
   0. No deseo postre
   `))
   //Seleccion postre

   // SELECCION ALIMENTOS
   // Creo nuevas constantes con el numero de la opción seleccionada para subirlo al carrito
   const plato = opciones.find((elemento) => elemento.id  === platoSeleccionado)
   const bebida = opciones.find((elemento) => elemento.id === bebidaSeleccionada)
   const postre = opciones.find((elemento) => elemento.id === postreSeleccionado)

   //Subo la seleccion al array de carrito para calcular precio
   const nuevoCarrito = new Carrito(plato,bebida,postre)
   carrito.push(nuevoCarrito)
  }



  // Carrito
function mostrarCarrito(carrito){
    console.log("El menú seleccionado es:")
    for(let elemento of carrito){


    const datosPlato = elemento.plato
    const datosBebida = elemento.bebida
    const datosPostre = elemento.postre
    console.log(`Plato: ${datosPlato.nombre}
    Bebida: ${datosBebida.nombre}
    Postre: ${datosPostre.nombre}`)

 //Obtenemos el precio de cada elemento seleccionado
    let precioPlato = datosPlato.precio
    let precioBebida = datosBebida.precio
    let precioPostre = datosPostre.precio

    let precioTotal = precioPlato + precioBebida + precioPostre
      console.log(`El precio total de su pedido es: ${precioTotal}`)
    }


}
    // Carrito

menu()
mostrarCarrito()