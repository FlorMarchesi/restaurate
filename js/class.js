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
let opciones = []

const cargarOpciones = async () => {
    const response = await fetch("productos.json") //La ruta es relativa del HTML al JSON y no al class.js
    const data = await response.json()
    for(let producto of data){
        let nuevoProducto = new Menu(producto.id, producto.nombre, producto.precio, producto.image)
        opciones.push(nuevoProducto)
    }
    console.log(opciones)
    localStorage.setItem("opciones", JSON.stringify(opciones))
}

//Evaluamos si existe algo en el Storage (y entra en el if), o no hay nada (entra en el else)
if(localStorage.getItem("opciones")){

    for(let producto of JSON.parse(localStorage.getItem("opciones"))){
        let productoStorage = new Menu(producto.id, producto.nombre, producto.precio, producto.image)
        opciones.push(productoStorage)
    }
}else{
    //Seteamos por primera vez
    cargarOpciones()

}