// DOM

//CARD DE PRODUCTOS
// Creación de las CARD para seleccion
// Capturo todas las opciones según el ID para luego poder imprimirlas
let opcionesDivPlato = document.getElementById("menu_plato")
let opcionesDivBebida = document.getElementById("menu_bebida")
let opcionesDivPostre = document.getElementById("menu_postre")
// Botón para acceder al carrito
let carritoBtn = document.getElementById("idCarritoBtn")
// Cuerpo del carrito
let carritoModal = document.getElementById("idCarritoModal")
// Boton pagar
let pagarBtn = document.getElementById("pagarBtn")
// Productos en el carrito
/* console.log(JSON.parse(localStorage.getItem("carrito")))
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [] // OPERADOR OR

productosEnCarrito = [] && localStorage.setItem("carrito", productosEnCarrito) // OPERADOR AND */ //Dejó de funcionar y no encuentro solución

let productosEnCarrito
if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
    /* initCartHTML(productosEnCarrito)
    cantidadCarrito.innerText = productosEnCarrito.reduce((acc, cant) => acc + cant.quantity, 0)
    console.log(cantidadCarrito) */
}else{
    productosEnCarrito = []
    localStorage.setItem("carrito", productosEnCarrito)
}

// DOM

// FUNCIONES

// Función card de productos
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
      else if(opcion.id>5 && opcion.id<11){
        opcionesDivBebida.appendChild(nuevoMenuDiv)
      }
      //Card para los POSTRES
      else if(opcion.id >10 && opcion.id<14){
        opcionesDivPostre.appendChild(nuevoMenuDiv)
      }else{}

      let agregarBtn = document.getElementById(`agregarBtn${opcion.id}`)
        agregarBtn.onclick = ()=>{
            agregarAlCarrito(opcion)
      }
    }
}
// Función card de productos

// Funciónes carrito
function cargarProductosCarrito(array){
    carritoModal.innerHTML = ""
    array.forEach((productoCarrito)=>{

        carritoModal.innerHTML += `
        <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
            <img class="card-img-top" height="300px" src="assets/${productoCarrito.image}" alt="${productoCarrito.nombre}">
            <div class="card-body">
                    <h4 class="card-title">${productoCarrito.nombre}</h4>

                    <p class="card-text">$${productoCarrito.precio}</p>
                    <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
        `
        })

         //segundo forEach agregar function eliminar
     array.forEach((productoCarrito)=>{
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", ()=>{
            //borrar del DOM
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            cardProducto.remove()
            //eliminar del array
            let productoEliminar = array.find(opcion => opcion.id == productoCarrito.id)
            console.log(productoEliminar)
            //busco el indice
            let posicion = array.indexOf(productoEliminar)
            console.log(posicion)
            //splice (posicion donde trabajar, cant de elementos a eliminar)
            array.splice(posicion, 1)
            console.log(array)
            //eliminar storage (volver a setear)
            localStorage.setItem("carrito", JSON.stringify(array))
            //recalcular total
            compraTotal(array)
        })
     })

    compraTotal(array)
    }

// Agregar un producto al carrito
function agregarAlCarrito(opcion){
    //evaluar si ya existe o no el producto
    let productoAgregado = productosEnCarrito.find((elem)=> elem.id == opcion.id)
    console.log(productoAgregado) //Si es UNDEFINED es porque no se encuentra en el carrito

    //Operador ternario
    productoAgregado == undefined ? (
    productosEnCarrito.push(opcion),
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito)),
    console.log(productosEnCarrito),
    //Toastify alerta producto agregado
    Toastify({
      text: "El producto se ha agregado al carrito!",
      duration: 3000,
      gravity: "bottom",
      style: {
      background: "linear-gradient(to right, #085078, #85D8CE)",
      }
    }).showToast()) :
    //Toastify alerta producto ya se encuentra en el carrito
    Toastify({
      text: "El producto ya se encuentra en el carrito!",
      duration: 1500,
      gravity: "bottom",
      style: {
      background: "linear-gradient(to right, #FF8008, #FFC837)",
      }
    }).showToast()
  }

  let precioTotal = document.getElementById("precioTotal")
function compraTotal(array){
    let acumulador = 0
    for(let option of array){
       acumulador = acumulador + option.precio
    }
    console.log(acumulador)
    //Precio Total
    precioTotal.innerHTML = ""
    precioTotal.innerHTML = `No hay productos agregados`
    precioTotal.innerHTML = `El total del carrito es <strong>${acumulador}</strong>`
}

//Boton pagar, no avanzar si no hay nada en el carrito
pagarBtn.addEventListener("click", ()=>{
  if(productosEnCarrito.length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Cart empty',
      background: '#87189d',
      color: '#ffde59'
    })
  }
})

//Confirmar compra
  //Modal ingreso de datos
  /* pagoModal.addEventListener("click", ()=>{
    //Alerta Confirmación pedido
    document.getElementById("btnEnviarCompra")
  swal(
    "Gracias!",
    "Pedido confirmado",
    "success")

  //Validar lo datos (click)

//Limpiar Carrito
    carritoModal.innerHTML = ""
}) */


let pagoModal = document.getElementById("btnConfirmarCompra").addEventListener("click", ()=>{

  //Alerta Confirmación pedido
  Swal.fire({
  title:'Gracias!',
  text: 'Pedido confirmado',
  icon: 'success',
  showConfirmButton: false,
  timer: 1500
})
//Limpiar Carrito
localStorage.setItem("carrito", "") //Vaciamos el carrito en Storage
location. reload() //Recargamos la página para vaciar el carrito
})

// FUNCIONES

// EVENTOS
//Abrir carrito
carritoBtn.addEventListener("click", ()=>{
  cargarProductosCarrito(productosEnCarrito)
})

// EVENTOS

mostrarOpciones(opciones);


