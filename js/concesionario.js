const vehiculos = [
    {Marca: "Peugeot", Modelo: "206", Puertas: "4", Precio: 200000.00},
    {Marca: "Honda", Modelo: "Titan", Cilindrada: "125cc", Precio: 60000.00},
    {Marca: "Peugeot", Modelo: "208", Puertas: "5", Precio: 250000.00},
    {Marca: "Yamaha", Modelo: "YBR", Cilindrada: "160cc", Precio: 80500.50},
];

console.log(vehiculos);

// Vehículo más caro
const mayorPrecio = vehiculos.sort((b, a) => a.Precio - b.Precio)[0];
console.log("Vehículo más caro:", mayorPrecio);

// Vehículo más barato
const menorPrecio = vehiculos.sort((a, b) => a.Precio - b.Precio)[0];
console.log("Vehículo más barato:", menorPrecio);

// Vehículo que contiene en el modelo la letra ‘Y’
for (let i = 0; i < vehiculos.length; i++) {
    if(vehiculos[i].Modelo.includes("Y")) {
        console.log("El vehículo que contiene en el modelo la letra Y es: " + vehiculos[i].Marca + " " + vehiculos[i].Modelo + " " + vehiculos[i].Precio);
        break;
    }
}

// Vehículos ordenados por precio de mayor a menor:
const mayorToMenor = vehiculos.sort((b, a) => a.Precio - b.Precio);
console.log("Vehículos ordenados por precio de mayor a menor:", mayorToMenor);
