//ARRAY PRODUCTOS 
const InventarioTienda = [
  { id: 111, nombre: "Leche 1lt", categoria: "Lacteos", precio: 1_000 },
  { id: 121, nombre: "Fideos 400g", categoria: "Despensa", precio: 1_000 },
  { id: 122, nombre: "Arroz 1kg", categoria: "Despensa", precio: 2_400 },
  { id: 131, nombre: "Servilletas 50un", categoria: "Limpieza", precio: 420 },
  { id: 112, nombre: "Yogurt 125gr", categoria: "Lacteos", precio: 320 },
  { id: 132, nombre: "Lavaloza 500ml", categoria: "Limpieza", precio: 2_150 },
];


//ARRAY CARRO DE COMPRA
const carroCompra = [
  { id: 111, nombre: "Leche 1lt", categoria: "Lacteos", precio: 1_000, },
  { id: 122, nombre: "Arroz 1kg", categoria: "Despensa", precio: 2_400,},
];


//SUMAR EL CARRITO

function sumar(...valores) {

  let suma = 0;

  for (const valor of valores) {
    suma += valor;
  }

  return suma;
}

let precio = carroCompra.map(carroCompra => carroCompra.precio);

let totalCompra = sumar(...precio);


//AGREGAR PRODUCTOS

let nuevoPrecio = 0;//prompt("Ingresa el precio del producto:");

//OPERACIONES BÁSICAS
function calcular(operacion, nuevoPrecio) {

  switch (operacion) {
    case "agregar producto":
      console.log("Se ha agregado un nuevo producto.");
      return totalCompra + Number(nuevoPrecio);    
      break;

    case "restar producto":
      console.log("Se ha eliminado un producto del carrito.");
      return totalCompra - Number(nuevoPrecio);
      break;

    case "agregar descuento":
      console.log("Se ha agregado un descuento de 10%.");
      descuento = totalCompra * 0.90;
      return descuento;
      break;

    default:
      return "La operación no es válida";
      break;
  }
}

let nuevoTotal = calcular("restar producto", nuevoPrecio);

  if(nuevoTotal >= 10_000){
    let descuento = nuevoTotal * 0.90;
    console.log(`Se ha aplicado un 10% de descuento. El total a pagar es de: ${descuento} `);
  }
console.log(`El total a pagar es: $${nuevoTotal}.`);


// FILTRAR POR CATEGORIA / ID / PRECIO

const idProducto = carroCompra.filter(Object => String(Object.id).startsWith(`12`));
console.log(idProducto);

//BUCLE PARA GENERAR BOLETA

function generarTicket(productos) {
    console.log("=".repeat(32));
    console.log("      CARRITO DE COMPRAS        ");
    console.log("=".repeat(32));
    console.log("");

    let acumulador = 0;

    for (let index = 0; index < productos.length; index++) {

        let nombre = productos[index].nombre;
        let precio = productos[index].precio;

        console.log(`${nombre}`);
        console.log(`Precio: $${precio}`);
        console.log("-".repeat(32));

        acumulador += precio;
    }

    console.log("");
    console.log(`TOTAL A PAGAR: $${acumulador}`);
    console.log("=".repeat(32));
    console.log("   ¡Gracias por su compra!    ");
    console.log("=".repeat(32));

}  

generarTicket(carroCompra);