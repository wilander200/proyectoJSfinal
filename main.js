/*window.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    agregarForm();
  }
});*/

let contenedor = [];
let botonForm = document.getElementById("button");
botonForm.addEventListener("click", agregarForm);

function agregarForm() {
  let bebidaUser = document.getElementById("selecProduct");
  let cantidadBebidas = document.getElementById("unidades");

  // programa para la lista

  for (let i of bebidas) {
    if (i.ref == parseInt(bebidaUser.value)) {
      class datos {
        constructor(nombre, precio, unidad, total) {
          this.nombre = nombre;
          this.precio = precio;
          this.unidad = unidad;
          this.total = total;
        }
      }
      let producto = new datos(
        i.nombre,
        i.precio,
        parseInt(cantidadBebidas.value),
        i.precio * parseInt(cantidadBebidas.value)
      );
      let lista = document.createElement("ul");
      lista.innerHTML = `<li>${producto.nombre}</li>  <li>${producto.unidad}</li>  <li>${producto.precio} pesos</li>  <li>${producto.total} pesos</li>`;
      let mensaje = document.getElementById("resultado");
      mensaje.appendChild(lista);
      contenedor.push(producto);
    }
  }
  let totalPrecio = 0;
  for (i of contenedor) {
    totalPrecio = i.total + totalPrecio;
    console.log(totalPrecio);
    let sumatoria = document.getElementById("sumatoria");
    sumatoria.innerHTML = `<h5>Total a pagar:  ${totalPrecio}</h5>`;
  }
}
