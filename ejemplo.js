let carrito = [];

function agregar(producto){
carrito.push(producto);
}

function eliminar(id){
carrito = carrito.filter(producto => producto.id != id)
}


let producto1 = {id:1, nombre: "Producto1"};
let producto2 = {id:2, nombre: "Producto2"};
let producto3 = {id:3, nombre: "Producto3"};

agregar(producto1);
agregar(producto2);
agregar(producto3);

console.log(carrito);

eliminar(2);

console.log(carrito);



function operaciones(comando, producto){

switch (comando) {
case "agregar":
agregar(producto);
break;

case "eliminar":
eliminar(producto.id)
break;

default:
break;
}

}