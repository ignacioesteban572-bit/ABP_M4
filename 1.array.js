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
  { id: 111, nombre: "Leche 1lt", categoria: "Lacteos", precio: 1_000, cantidad: 2 },
  { id: 122, nombre: "Arroz 1kg", categoria: "Despensa", precio: 2_400, cantidad: 1 },

];

carroCompra.push({ id: 112, nombre: "Yogurt 125gr", categoria: "Lacteos", precio: 320 });

console.log(carroCompra);
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

console.log(`El total del Carrito es: $${totalCompra}.`);

//AGREGAR PRODUCTOS

let nuevoPrecio = 10_000;//prompt("Ingresa el precio del producto:");

//OPERACIONES BÁSICAS
function calcular(operacion, nuevoPrecio) {

  let totalCompra = 0;

  switch (operacion) {
    case "agregar producto":
      console.log("Se ha agregado un nuevo producto.");
      totalCompra + Number(nuevoPrecio);
      break;

    case "restar producto":
      console.log("Se ha eliminado un producto del carrito.");
      totalCompra - Number(nuevoPrecio);
      break;

    case "agregar descuento":
      console.log("Se ha agregado un descuento de 10%.");
      descuento = totalCompra * 0.90;
      descuento;
      break;

    default:
      "La operación no es válida";
      break;
  }
}

let nuevoTotal = calcular("restar producto", nuevoPrecio);
console.log("Total antes de descuento:", nuevoTotal);
if (nuevoTotal >= 10_000) {
  let descuento = nuevoTotal * 0.90;
  console.log(`Se ha aplicado un 10% de descuento. El total a pagar es de: ${descuento} `);
} else {
  console.log("No aplica descuento.");
}

console.log(`El nuevo total es: $${nuevoTotal}.`);