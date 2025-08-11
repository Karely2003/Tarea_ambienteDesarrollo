var colors = require('colors');
const { envio1 } = require('./inicializacion');

const costoBase = envio1.costoBase;
const recargoPeso = envio1.calcularPeso();
const recargoDistancia = envio1.calcularDistancia();
const costoTotal = envio1.calcularCostoTotal();
const fechaEntrega = envio1.calcularFechaEntrega();

console.log("Costo base: L",costoBase);
console.log("Recargo por peso: L ", recargoPeso);
console.log("Recargo por distancia: km ", recargoDistancia);
console.log("Costo total: L ",costoTotal);
console.log("Fecha estimada de entrega: ", fechaEntrega);
