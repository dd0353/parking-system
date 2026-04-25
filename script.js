class Vehicle {
    constructor(number) {
        this.number = number;
    }
    calculateFee(hours) { return 0; }
}

class Car extends Vehicle {
    calculateFee(hours) { return hours * 20; }
}

class Bike extends Vehicle {
    calculateFee(hours) { return hours * 10; }
}

let vehicles = [];

function parkCar() {
    let num = document.getElementById("vehicleNumber").value;
    vehicles.push(new Car(num));
    document.getElementById("output").innerText = "Car Parked!";
}

function parkBike() {
    let num = document.getElementById("vehicleNumber").value;
    vehicles.push(new Bike(num));
    document.getElementById("output").innerText = "Bike Parked!";
}

function removeVehicle() {
    if (vehicles.length === 0) {
        document.getElementById("output").innerText = "No vehicles!";
        return;
    }

    let v = vehicles.pop();
    let hours = prompt("Enter hours:");
    let fee = v.calculateFee(hours);

    document.getElementById("output").innerText = "Fee: " + fee;
}