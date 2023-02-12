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
// Productor en el carrito
let productosEnCarrito
if(localStorage.getItem("carrito")){
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    productosEnCarrito = []
    localStorage.setItem("carrito", productosEnCarrito)
}
// DOM

// FUNCIONES

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

      let agregarBtn = document.getElementById(`agregarBtn${opcion.id}`)
        agregarBtn.onclick = ()=>{

            agregarAlCarrito(opcion)
    }
}
}
// Función card de productos

// Funciónes carrito
function cargarProductosCarrito(array){
    //console.log("Funciona btn render carrito")
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
            // console.log("btn eliminar funciona")
            //borrar del DOM
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            cardProducto.remove()
            //eliminar del array
            //busco prod a eliminar
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


// Agregar un procuto al carrito
function agregarAlCarrito(opcion){
    console.log(opcion)
    productosEnCarrito.push(opcion)
    //setearlo en storage
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    console.log(productosEnCarrito)
    //evaluar si ya existe o no el producto
    let productoAgregado = productosEnCarrito.find((elem)=> elem.id == opcion.id)
    console.log(productoAgregado)
    if(productoAgregado == undefined){
        console.log(`El producto ${opcion.nombre} ha sido agregado al carrito y vale ${opcion.precio}`)
        //sumarlo a productosEnCarrito
        productosEnCarrito.push(opcion)
        //setearlo en storage
        localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
         console.log(productosEnCarrito)
        //sweetalert para experiencia de usuario
    }else{
        //el producto ya se encuentra
        console.log(`El producto ${opcion.nombre} ya se encuentra en el carrito`)
    }
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

// FUNCIONES

// EVENTOS
carritoBtn.addEventListener("click", ()=>{
  cargarProductosCarrito(productosEnCarrito)
})
// EVENTOS

mostrarOpciones(opciones);
