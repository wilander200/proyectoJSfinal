let contenedorDos = [];
$("#carrito").click(function(){
  let contenedorDos = JSON.parse(localStorage.getItem("contenedor"));
    $("#elementos").empty()
    $("#btnCerrar").show()
    $("#btnVaciar").show()
    $("#elementos").show().append(`<ul><li><b>REFERENCIA</b></li> 
      <li><b>PRODUCTO</b></li>
      <li><b>PRECIO</b></li></ul>`)
    for (let i of contenedorDos){
      $("#elementos").show().append(`<ul><li>${i.ref}</li> 
      <li>${i.nombre}</li>
      <li>${i.precio.toLocaleString("es-CL")}</li></ul>`)
    }
    let totalPrecio = 0;
    for ( let i of contenedorDos) {
      totalPrecio = i.precio + totalPrecio;}
      console.log(totalPrecio);
      $("#elementos").show().append(`<h4 class= "text-end display-6"><b>Total neto a pagar:  ${totalPrecio.toLocaleString("es-CL")}</b></h4>`)
      let totalIva = totalPrecio*1.19;
      $("#elementos").show().append(`<h4 class = "text-end display-6"><b>Total con IVA:  ${totalIva.toLocaleString("es-CL")}</b></h4>`)  
  }
)
  
