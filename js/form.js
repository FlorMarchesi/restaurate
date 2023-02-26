//FINALIZAR COMPRA
let form = document.getElementById("form")
form.addEventListener("submit", e=>{
    e.preventDefault()
  //Evaluamos si hay info
  if(nombre.value == "" ||direccion.value == "" || ciudad.value == "") {
    Swal.fire ({
      icon: 'error',
      title: 'Error',
      text: 'No ha rellenado todos los campos.',
      color: '#87189d'
    })
  }else{
    //Alerta Confirmación pedido
  Swal.fire({
  title:'Gracias!',
  text: 'Pedido confirmado',
  icon: 'success',
  showConfirmButton: false,
  timer: 2000
  })

  setTimeout(()=>{
    //Limpiar Carrito
    localStorage.setItem("carrito", ""), //Vaciamos el carrito en Storage
    window.open('../index.html', '_self')//Redirijo a página de inicio
  }, 2000
  )
}
})

let btnCancelar = document.getElementById("btnCancelar")

btnCancelar.addEventListener("click", ()=>{

})