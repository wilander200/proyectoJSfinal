/* Animando las imagenes de los productos y haciendolas un poco mas grandes*/

$(".imgProducto").mouseenter(function(e){
    $(e.currentTarget).css("transform", "scale(1.2)" );
    $(e.currentTarget).css("transition", "transform 1s" );
})

$(".imgProducto").mouseleave(function(){
    $(".imgProducto").css("transform", "scale(1)" );
})

/* Animando los botones de agregar al carrito  */

$(".btnCarrito").mouseenter(function(e){
    $(e.currentTarget).css("background", "#17a2b8" );
})

$(".btnCarrito").mouseleave(function(){
    $(".btnCarrito").css("background", "#007bff" );
})