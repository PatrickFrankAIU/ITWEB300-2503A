class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }


    getInfo() {
        return(this.make + ", " + this.model);
    }

}

class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model);
        this.doors = doors;
    }

    getInfo() {
        return(this.doors + " door " + this.make + " " + this.model);
    }
}


const Veloster = new Car('Hyundai', 'Veloster', 3);

console.log(Veloster.getInfo());
