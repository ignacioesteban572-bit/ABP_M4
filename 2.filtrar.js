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



function filtrarCategoria(codigo){

  const categoria = carroCompra.filter(Object => String(Object.id).startsWith(codigo));

  return categoria;

}
const productoDespensa = filtrarCategoria("12");

console.log("Productos Despensa:", productoDespensa.length);
console.table(productoDespensa);

const productoLacteos = filtrarCategoria("11");

console.log("Productos Lacteos:", productoLacteos.length);
console.table(productoLacteos);