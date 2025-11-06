class Vehicle {
    move() {
        console.log("Kendaraan bergerak");
    }
}

class Car extends Vehicle{
    move() { 
        console.log("Mobil berjalan di jalan raya");
    }
}

class Boat extends Vehicle{
    move() { 
        console.log("Kapal berlayar di laut");
    }
}

const car = new Car();
car.move();