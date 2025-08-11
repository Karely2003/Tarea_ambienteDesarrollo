class EnvioPaq {
    constructor(peso, distancia) {
        this.peso = peso;
        this.distancia = distancia;
        this.costoBase = 50;
    }

    calcularPeso() {

        if (this.peso > 5) {
            
            return (this.peso - 5) * 20;
        }
        return 0;
    }

    calcularDistancia() {

        if (this.distancia > 50) {

            return (this.distancia - 50) * 10;
        }
        return 0;
    }

    calcularCostoTotal() {

        return this.costoBase + this.calcularPeso() + this.calcularDistancia();
    }

    calcularFechaEntrega() {
        const fechaProcesamiento = 2;
        const diasTransporte = (this.distancia / 100);
        const fechaEntrega = new Date();
        fechaEntrega.setDate(fechaEntrega.getDate() + fechaProcesamiento + diasTransporte);

        return fechaEntrega.toISOString().split('T')[0];
    }
}

module.exports = EnvioPaq;
