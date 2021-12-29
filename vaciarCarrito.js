/* Botones para llenar y vaciar el carrito */

$("#btnCerrar").click(function(){
  $("#elementos").hide()
  $("#btnCerrar").hide()
  $("#btnVaciar").hide()
})

$("#btnVaciar").click(function(){
  $("#elementos").empty()
  $("#btnCerrar").hide()
  $("#btnVaciar").hide()
  localStorage.clear();
  contenedor = [];
  contenedorDos = [];
})
