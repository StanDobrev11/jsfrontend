class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type,
        this.model = model,
        this.parts = this.setQuality(parts),
        this.fuel = fuel
    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss
    }

    setQuality(parts) {
        parts['quality'] = parts.engine * parts.power
        return parts
    }

}


let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);