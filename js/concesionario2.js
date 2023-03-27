class Vehículo {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    toString() {
        return `El Vehículo: ${this.marca} // Modelo: ${this.modelo} // Tiene un precio de: $${this.precio}`;
    }
}

class Auto extends Vehículo {
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio);
        this.puertas = puertas;
    }

    toString() {
        return `${super.toString() } // Números de puertas ${this.puertas}`;
    }
}

class Moto extends Vehículo {
    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }

    toString() {
        return `${super.toString() } // Cilindrada ${this.cilindrada}`;
    }
}

const vehiculos = [
    new Auto('Peugeot', '206', 200000, '4'),
    new Moto('Honda', 'Titan', 60000, '125cc'),
    new Auto('Peugeot', '208', 250000, '5'),
    new Moto('Yamaha', 'YBR', 80500.50, '160cc'),
]

console.log(vehiculos);

// Vehículo más caro
const mayorPrecio = vehiculos.sort((b, a) => a.precio - b.precio)[0];
console.log("Vehículo más caro:", mayorPrecio);

// Vehículo más barato
const menorPrecio = vehiculos.sort((a, b) => a.precio - b.precio)[0];
console.log("Vehículo más barato:", menorPrecio);

// Vehículo que contiene en el modelo la letra ‘Y’
for (let i = 0; i < vehiculos.length; i++) {
    if(vehiculos[i].modelo.includes("Y")) {
        console.log("El vehículo que contiene en el modelo la letra Y es: " + vehiculos[i].marca + " " + vehiculos[i].modelo + " " + vehiculos[i].precio);
        break;
    }
}

// Vehículos ordenados por precio de mayor a menor:
const mayorToMenor = vehiculos.sort((b, a) => a.precio - b.precio);
console.log("Vehículos ordenados por precio de mayor a menor:", mayorToMenor);
