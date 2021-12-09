let btnVerCarrito = document.getElementById("verCarrito");

btnVerCarrito.addEventListener("click", llenarCarrito);

function llenarCarrito(e) {
    let contenedor = JSON.parse(localStorage.getItem("contenedor"));
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
      totalPrecio = i.total + totalPrecio;
      console.log(totalPrecio);
      let sumatoria = document.getElementById("sumatoria");
      sumatoria.innerHTML = `<h5>Total a pagar:  ${totalPrecio}</h5>`;
      let totalIva = totalPrecio*1.19;
      let totalFinal = document.getElementById("totalIva");
      totalFinal.innerHTML = `<h5>Total con Iva:  ${totalIva}</h5>`;
    }  
  }