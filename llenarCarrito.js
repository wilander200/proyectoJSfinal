let btnVerCarrito = document.getElementById("verCarrito");

btnVerCarrito.addEventListener("click", llenarCarrito);

let contenedor = JSON.parse(localStorage.getItem("contenedor"));

function llenarCarrito(e) {

    for (let i of contenedor){
      let row = document.createElement("ul");
      row.innerHTML = `<li>${i.ref}</li> 
      <li>${i.nombre}</li>
      <li>${i.precio}</li>`;
      let mensaje = document.getElementById("listaCarrito");
      mensaje.appendChild(row);
    }
    let totalPrecio = 0;
    for ( let i of contenedor) {
      totalPrecio = i.precio + totalPrecio;
      console.log(totalPrecio);
      let sumatoria = document.getElementById("sumatoria");
      sumatoria.innerHTML = `<h5 class= "display-4">Total neto a pagar:  ${totalPrecio.toLocaleString("es-CL")}</h5>`;
      let totalIva = totalPrecio*1.19;
      let totalFinal = document.getElementById("totalIva");
      totalFinal.innerHTML = `<h5 class = "display-4">Total con IVA:  ${totalIva.toLocaleString("es-CL")}</h5>`;
    }  
  }