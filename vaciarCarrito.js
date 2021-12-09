let btnVaciarCarrito = document.getElementById("vaciarCarrito");

btnVaciarCarrito.addEventListener("click", vaciarCarrito);


function vaciarCarrito(e) {
    let contenedor = e.target;
    while (contenedor == null){
      let cont = document.getElementById("listaCarrito")
      cont.removeChild(contenedor.parentNode);
    }
    return false;
    localStorage.clear();
  }