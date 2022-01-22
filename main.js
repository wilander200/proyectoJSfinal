let contenedor = [];
contenedor = JSON.parse(localStorage.getItem("contenedor"));
let botonCompra = document.querySelectorAll(".btnCarrito");

for (let btn of botonCompra){
  btn.addEventListener("click", agregarStorage);
}

function agregarStorage(e) {
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
      if (contenedor === null) {
        contenedor=[];
      }else {
      contenedor.push(producto);
      guardarLocalStorage(contenedor);
    }
  }
  }
} 

function guardarLocalStorage(contenedor) {
  let guardado = JSON.stringify(contenedor);
  localStorage.setItem("contenedor", guardado) 
}
