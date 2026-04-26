console.log("JS FILE LOADED");
class Vehicle {
    constructor(number, type) {
        this.number = number;
        this.type = type;
    }

    calculateFee(hours) { return 0; }
}

class Car extends Vehicle {
    constructor(number) {
        super(number, "Car");
    }

    calculateFee(hours) {
        return hours * 20;
    }
}

class Bike extends Vehicle {
    constructor(number) {
        super(number, "Bike");
    }

    calculateFee(hours) {
        return hours * 10;
    }
}

// Parking data
let vehicles = [];
let capacity = 10;

// Park Car
function parkCar() {
    let num = document.getElementById("vehicleNumber").value;

    if (vehicles.length >= capacity) {
        document.getElementById("output").innerText = "Parking FULL!";
        return;
    }

    vehicles.push(new Car(num));
    document.getElementById("output").innerText = "Car Parked!";
}

// Park Bike
function parkBike() {
    let num = document.getElementById("vehicleNumber").value;

    if (vehicles.length >= capacity) {
        document.getElementById("output").innerText = "Parking FULL!";
        return;
    }

    vehicles.push(new Bike(num));
    document.getElementById("output").innerText = "Bike Parked!";
}

// Remove Vehicle
function removeVehicle() {
    if (vehicles.length === 0) {
        document.getElementById("output").innerText = "No vehicles!";
        return;
    }

    let v = vehicles.pop();
    let hours = prompt("Enter hours:");
    let fee = v.calculateFee(hours);

    document.getElementById("output").innerText =
        v.type + " removed. Fee: " + fee;
}

// Show Vehicles
function showVehicles() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    vehicles.forEach(v => {
        let li = document.createElement("li");
        li.innerText = v.type + " - " + v.number;
        list.appendChild(li);
    });
}

// Show Status
function showStatus() {
    document.getElementById("status").innerText =
        "Total: " + capacity +
        " | Parked: " + vehicles.length +
        " | Available: " + (capacity - vehicles.length);
}