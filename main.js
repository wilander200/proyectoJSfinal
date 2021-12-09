/*window.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    agregarForm();
  }
});*/

let contenedor = [];
let botonCompra = document.querySelectorAll(".btnCarrito");
let btnVaciarCarrito = document.getElementById("vaciarCarrito");
document.addEventListener("DOMContentLoaded", readLocalStorage);

for (let btn of botonCompra){
  btn.addEventListener("click", agregarCarrito);
}
btnVaciarCarrito.addEventListener("click", vaciarCarrito);

function agregarCarrito(e) {
  e.preventDefault();
  let hijo = e.target;
  let padre = hijo.parentNode.parentNode.parentNode;
  let biciRef = padre.querySelector("h5").textContent;

 for (let i of bikes) {
    if (i.ref == parseInt(biciRef)) {
      class datos {
        constructor(ref, nombre, precio) {
          this.ref =ref;
          this.nombre = nombre;
          this.precio = precio;
        }
      }
      let producto = new datos(
        i.ref,
        i.nombre,
        i.precio
      );
      let row = document.createElement("tr");
      row.innerHTML = `<td>${producto.ref}</td> 
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>`;
      let mensaje = document.getElementById("listaCarrito");
      mensaje.appendChild(row);
      contenedor.push(producto);
      guardarLocalStorage(contenedor);
    }
  }
  let totalPrecio = 0;
  for (i of contenedor) {
    totalPrecio = i.total + totalPrecio;
    console.log(totalPrecio);
    let sumatoria = document.getElementById("sumatoria");
    sumatoria.innerHTML = `<h5>Total a pagar:  ${totalPrecio}</h5>`;
    let totalIva = totalPrecio*1.19;
    let totalFinal = document.getElementById("totalIva");
    totalFinal.innerHTML = `<h5>Total con Iva:  ${totalIva}</h5>`;
  }
} 

function vaciarCarrito() {
  while(producto.firstChild){
    producto.removeChild(producto.firstChild);
  }
  return false;
}

function guardarLocalStorage(contenedor) {
  let cont = traerLocalStorage();
  contenedor.push(cont);
  localStorage.setItem("contenedor" , JSON.stringify(contenedor)); 
}

function traerLocalStorage () {
  let contenedorLS;
  if (localStorage.getItem("contendor") === null) {
    contenedorLS = [];
  } else {
    contenedor.LS = JSON.parse(localStorage.getItem("contenedor"));
  }
  return contenedorLS;
}

function readLocalStorage() {
  let contenedorLS = traerLocalStorage();
  contenedorLS.forEach(function(contenedor){
    row.innerHTML = `<td>${producto.ref}</td> 
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>`;
    let mensaje = document.getElementById("listaCarrito");
    mensaje.appendChild(row);
  });
}