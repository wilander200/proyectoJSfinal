//ORDENAR UN ARRAY DE OBJETOS POR EL PRECIO Y REFERENCIA

class producto {
    constructor(ref, nombre, precio, unidad, stock) {
      this.ref = ref;
      this.nombre = nombre;
      this.precio = precio;
      this.unidad = unidad;
    }
  }
  let bebidas = [];
  
  bebidas.push(new producto(1, "Coca-Cola zero 1.5l", 1680, 500));
  bebidas.push(new producto(2, "Coca-Cola Light 1.5L", 1680, 500));
  bebidas.push(new producto(3, "Coca-Cola Original 1.5L", 1680, 500));
  bebidas.push(new producto(4, "Sprite zero 1.5L", 1680, 350));
  bebidas.push(new producto(5, "Sprite Light 1.5L", 1680, 320));
  bebidas.push(new producto(6, "Sprite Original 1.5L", 1680, 350));
  bebidas.push(new producto(7, "Jugo de naranja 2L", 1550, 150));
  bebidas.push(new producto(8, "Agua mineral 1.5L", 850, 1500));
  bebidas.push(new producto(9, "Cerveza Patagonia Variedades 335ml", 950, 650));
  bebidas.push(new producto(10, "Cerveza Corona 335ml", 550, 1000));
  bebidas.push(new producto(11, "Cerveza Quilmes 335ml", 450, 1000));
  bebidas.push(new producto(12, "Ron Madero", 3500, 200));
  bebidas.push(new producto(13, "Ron Cacique 500", 6500, 200));
  bebidas.push(new producto(14, "Vodka Absolute variedades", 8950, 100));
  bebidas.push(new producto(15, "Vinos Tarapaca", 4500, 100));
  bebidas.push(new producto(16, "Vino Casillero del Diablo", 5650, 100));
  bebidas.push(new producto(17, "Hielo 1kg", 1250, 50));
  bebidas.push(new producto(18, "Hielo 2kg", 850, 50));
  bebidas.push(new producto(19, "Papas Fritas Lays 400g", 2500, 150));
  bebidas.push(new producto(20, "Pisco Variedades", 6500, 150));
  