let btnVaciarCarrito = document.getElementById("vaciarCarrito");

btnVaciarCarrito.addEventListener("click", vaciarCarrito);


function vaciarCarrito(e) {
    localStorage.clear();
    let lista = document.getElementById("listaCarrito");
    let suma = document.getElementById("sumatoria");
    let iva = document.getElementById("totalIva");
    lista.remove();
    suma.remove();
    iva.remove();
  }