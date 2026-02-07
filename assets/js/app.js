let caja = 100000;
let stock = {};
let compra = { producto: "", peso: 0, costo: 0 };

function init() {
  const frutas = ["manzanas", "peras", "uvas", "duraznos"];
  frutas.forEach((f) => {
    stock[f] = {
      cantidad: Math.floor(Math.random() * 24) + 1,
      precio: Math.floor(Math.random() * 1900) + 100,
    };
    document.getElementById("stock-" + f).textContent = stock[f].cantidad;
    document.getElementById("precio-" + f).textContent = stock[f].precio;
  });
  document.getElementById("caja").textContent = caja;
}

function comprar() {
  let fruta = document.getElementById("fruta").value;
  let peso = parseFloat(document.getElementById("peso").value);

  if (!fruta) return alert("Elige el tipo fruta");
  if (!peso || peso <= 0) return alert("Peso inválido");
  if (peso > stock[fruta].cantidad) return alert("Sin stock");

  compra.producto = fruta;
  compra.peso = peso;
  compra.costo = peso * stock[fruta].precio;

  stock[fruta].cantidad -= peso;
  document.getElementById("stock-" + fruta).textContent = stock[fruta].cantidad;

  document.getElementById("pago").disabled = false;
  document.getElementById("btnPagar").disabled = false;
  document.getElementById("pago").focus();

  alert(`Compra Realizada\n${peso}kg ${fruta}\nCosto: $${compra.costo}`);
}

function pagar() {
  let pagado = parseFloat(document.getElementById("pago").value);
  if (!pagado || pagado < compra.costo) return alert("Pago insuficiente");

  caja += pagado - compra.costo;
  let vuelto = pagado - compra.costo;

  document.getElementById("caja").textContent = caja;

  let msg = `
                ✅ VENTA EXITOSA!!
                Producto: ${nombreFruta(compra.producto)}
                Peso: ${compra.peso}kg
                Costo: $${compra.costo}
                Pagado: $${pagado}
                Vuelto: $${vuelto}
                Caja nueva: $${caja}
            `;

  document.getElementById("resultado").innerHTML = msg;
  document.getElementById("resultado").style.display = "block";

  // Reset
  document.getElementById("fruta").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("pago").value = "";
  document.getElementById("pago").disabled = true;
  document.getElementById("btnPagar").disabled = true;
}

function nombreFruta(f) {
  const nombres = {
    manzanas: "Manzanas",
    peras: "Peras",
    uvas: "Uvas",
    duraznos: "Duraznos",
  };
  return nombres[f];
}

   window.onload = init;