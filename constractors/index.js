// a constractor is a function that is called when an object is created.

function Car(make, model, year, price, color = "red") {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
    this.color = color;
    this.drive = function () {
        return (`The ${this.make} ${this.model} is driving`);
    }
    this.brake = function () {
        return (`The ${this.make} ${this.model} is braking`);
    }
    this.honk = function () {
        return (`The ${this.make} ${this.model} is honking`);
    }
}

const car1 = new Car("Toyota", "Camry", 2022, 25000, "black");
const car2 = new Car("Honda", "Accord", 2022, 25000, "white");
const car3 = new Car("Toyota", "Camry", 2022, 25000);

console.log(car1.make);
console.log(car2.model);
console.log(car3.year);
console.log(car1.drive());
console.log(car2.brake());
console.log(car3.honk());