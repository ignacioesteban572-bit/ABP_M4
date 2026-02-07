//ARRAY CARRO DE COMPRA
const carroCompra = [
  { id: 111, nombre: "Leche 1lt", categoria: "Lacteos", precio: 1_000, cantidad: 2 },
  { id: 122, nombre: "Arroz 1kg", categoria: "Despensa", precio: 2_400, cantidad: 1 },
 
];

//BUCLE PARA GENERAR BOLETA

function boleta(productos) {
    console.log("=".repeat(32));
    console.log("      BOLETA COMPRAS        ");
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

boleta(carroCompra);