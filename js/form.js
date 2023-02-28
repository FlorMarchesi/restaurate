
let form = document.getElementById("form")
let btnCancelar = document.getElementById("btnCancelar")

//FINALIZAR COMPRA
form.addEventListener("submit", e=>{
    e.preventDefault()
  //Evaluamos si hay info
  if(nombre.value == "" ||direccion.value == "" || ciudad.value == "") {
    Swal.fire ({
      icon: 'error',
      title: 'Error',
      text: 'No ha rellenado todos los campos.',
      color: '#a1c181ff',
      background: '#000000'
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

btnCancelar.addEventListener("click", ()=>{

})